import { google } from '@ai-sdk/google'
import { appendResponseMessages, streamText } from 'ai'
import { z } from 'zod'

import { createClient } from '@/utils/supabase/server'

const examFormSchema = z.object({
    singleSelectQuestion: z.array(z.object({
        id: z.string().describe('The id of the question'),
        text: z.string().describe('The label of the question'),
        options: z.array(
            z.object({
                id: z.string().describe('The id of the option'),
                text: z.string().describe('The text of the option, could be true or false')
            })
        ).describe('The options of the question, could be true or false')
    })),
    multipleChoiceQuestion: z.array(z.object({
        id: z.string().describe('The id of the question'),
        label: z.string().describe('The label of the question'),
        options: z.array(
            z.object({
                id: z.string().describe('The id of the option'),
                text: z.string().describe('The text of the option')
            })
        )
    }).refine((value) => value.id !== undefined, {
        message: 'Each multiple choice question must have an id.'
    })),
    freeTextQuestion: z.array(z.object({
        id: z.string().describe('The id of the question'),
        label: z.string().describe('The question the user must anwser with a free text')
    })),
    matchingTextQuestions: z.array(z.object({
        id: z.string().describe('The id of the question'),
        leftColumn: z.array(z.object({
            id: z.string().describe('The id of the left column item'),
            text: z.string().describe('The text in the left column')
        })),
        rightColumn: z.array(z.object({
            id: z.string().describe('The id of the right column item'),
            text: z.string().describe('The text in the right column'),
            matchedWith: z.string().describe('The id of the matching left column item')
        }))
    }).refine((value) => value.id !== undefined, {
        message: 'Each matching text question must have an id.'
    }))
})

type ExamFormType = z.infer<typeof examFormSchema>

const showExamResultSchema = z.object({
    score: z.number().int().describe('The grade of the student in the exam with a scale from 0 to 20'),
    overallFeedback: z.string().describe('The overall feedback for the student in the exam, if the student did well or not'),
    freeTextQuestionFeedback: z.array(z.object({
        id: z.string().describe('The id of the question'),
        question: z.string().describe('The original question'),
        answer: z.string().describe('The answer the student gave'),
        correctAnswer: z.string().describe('The correct answer of the question'),
        feedback: z.string().describe('The feedback for the question the student gave')
    })),
    multipleChoiceQuestionFeedback: z.array(z.object({
        id: z.string().describe('The id of the question'),
        question: z.string().describe('The original question'),
        options: z.array(z.object({
            id: z.string().describe('The id of the option'),
            text: z.string().describe('The text of the option'),
            correct: z.boolean().describe('If the option is correct or not'),
            userSelected: z.boolean().describe('If the user selected the option')
        }))
    })),
    singleSelectQuestionFeedback: z.array(z.object({
        id: z.string().describe('The id of the question'),
        question: z.string().describe('The original question'),
        answer: z.string().describe('The answer the student gave'),
        correctAnswer: z.string().describe('The correct answer of the question'),
        feedback: z.string().describe('The feedback for the question the student gave')
    })),
    matchingTextQuestionsFeedback: z.array(z.object({
        question: z.string().describe('The original question'),
        rightColumn: z.array(z.object({
            id: z.string().describe('The id of the right column item'),
            text: z.string().describe('The text in the right column'),
            matchedWith: z.string().describe('The id of the matching left column item'),
            userMatchedWith: z.string().describe('The id of the matching left column item')
        })),
        feedback: z.string().describe('The feedback for the question the student gave')
    }))

})

type ExamResultType = z.infer<typeof showExamResultSchema>

const examSuggestionsSchema = z.object({
    suggestions: z.array(z.object({
        title: z.string().describe('The title of the suggestion for the exam'),
        description: z.string().describe('The description of the suggestion for the exam'),
        content: z.string().describe('The content of the suggestion for the exam'),
        difficulty: z.string().describe('The difficulty of the exam')
    }))
})

type ExamSuggestionsType = z.infer<typeof examSuggestionsSchema>
// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
    const body = await req.json()
    const {
        messages,
        examResponse,
        chatId
    } = body
    const supabase = createClient()

    const userData = await supabase.auth.getUser()

    if (userData.error != null) {
        throw new Error(userData.error.message)
    }

    const result = streamText({
        model: google('gemini-2.5-flash-preview-04-17'),
        messages,
        system: `\
            You are a PHD expert Teacher and you must give feedback and a grade to the student based on the exams he takes
            You and the user can discuss the exams and the student's performance.
            Generate questions for a student who wants to review the main concepts of the learning objectives in the exam.

            Messages inside [] means that it's a UI element or a user event. For example:
            - [showExamForm] means that the user will mean that the user will see a form to fill out for an exam preparation
            - [showExamResult] means that the user will see the result of the exam he took with the score and the feedback for each question, you need to evaluate the correctnes of the answeres provided by the student.
            - [examsSuggestions] means that the user will see suggestions for exams he can take, with the title, description, content, and difficulty of the exam, the user can click on the suggestion to see more details about the exam

Also you can chat the user and ask him questions about the subject to get more information about the subject and the learning objectives of the student.`,

        tools: {

            showExamForm: {
                description: 'Show the user an exam form to fill out for an exam preparationn, this form will be sent to the user and he will anwser it',
                parameters: examFormSchema,
                // execute: async (params: ExamFormType) => {
                //     return {
                //         type: 'examForm',
                //         data: params
                //     };
                // }
            },
            showExamResult: {
                description: 'Show the user the result of the exam he took with the score and the feedback for each question',
                parameters: showExamResultSchema,
                execute: async (params: ExamResultType) => {
                    return {
                        type: 'examResult',
                        data: params
                    }
                }
            },
            examsSuggestions: {
                description: 'Show the user suggestions for exams he can take, with the title, description, content, and difficulty of the exam',
                parameters: examSuggestionsSchema,
                execute: async (params: ExamSuggestionsType) => {
                    return {
                        type: 'examSuggestions',
                        data: params
                    }
                }
            },
        },
        onStepFinish: async (step) => {
            console.log('onStepFinish step:', step)
            const { toolCalls } = step
            const lastMessage = body.messages[body.messages.length - 1]
            console.log('Last message:', lastMessage)
            console.log('Tool calls:', toolCalls)
            // Save the user's message
        },
        async onFinish(data) {
            const { text, toolResults, toolCalls, response } = data
            const lastMessage = body.messages[body.messages.length - 1]

            const a = appendResponseMessages({
                messages,
                responseMessages: response.messages,
            })

            console.log(a)

            // // Save the user's message
            // const userMessage = await supabase.from('messages').insert({
            //     chat_id: +chatId,
            //     message: lastMessage.content,
            //     sender: 'user',
            //     created_at: new Date().toISOString()
            // })

            // // Save the assistant's message if present
            // if (text && text.length > 0) {
            //     const assistantMessage = await supabase.from('messages').insert({
            //         chat_id: +chatId,
            //         message: text,
            //         sender: 'assistant',
            //         created_at: new Date().toISOString()
            //     })

            //     console.log({
            //         userMessage: userMessage.data ? 'Saved' : 'Not saved',
            //         assistantMessage: assistantMessage.data ? 'Saved' : 'Not saved'
            //     })
            // }

            console.log(toolResults)

            console.log(typeof toolResults[0].result === 'string' ? toolResults[0].result : JSON.stringify(toolResults[0].result))

            // // Save tool result message if present
            // if (toolResults[0]?.result) {
            //     const toolResultMessage = await supabase.from('messages').insert({
            //         chat_id: +chatId,
            //         message: typeof toolResults[0].result === 'string' ? toolResults[0].result : JSON.stringify(toolResults[0].result),
            //         sender: 'tool',
            //         created_at: new Date().toISOString()
            //     })

            //     console.log({
            //         toolResultMessage: toolResultMessage.data ? 'Saved' : 'Not saved'
            //     })
            // }
        }
    })

    return result.toDataStreamResponse()
}
