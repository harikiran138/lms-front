'use client'
import { useChat } from '@ai-sdk/react'
import { generateId, Message } from 'ai'
import { useState } from 'react'

import { studentCreateNewChat } from '@/actions/dashboard/chatActions'
import ViewMarkdown from '@/components/ui/markdown/ViewMarkdown'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import useScrollAnchor from '@/utils/hooks/useScrollAnchor'

import { ChatInput, ChatTextArea } from '../Common/chat/chat'
import MarkdownEditorTour from '../Common/tour/MarkdownEditorTour'
import ChatLoadingSkeleton from './ChatLoadingSkeleton'
import EmptyChatState from './EmptyChatState'
import ExamFeedbackCard from './ExamFeedbackCard'
import ExamPrepAiComponent from './ExamPrepAiComponent'

export default function ExamPrepChat({ chatId }: { chatId?: number }) {
    const {
        scrollRef,
        visibilityRef,
        messagesRef: messagesEndRef,
        isAtBottom,
        scrollToBottom,
    } = useScrollAnchor()

    const [hideInput, setHideInput] = useState(false)
    const [defaultChatId, setDefaultChatId] = useState<number | undefined>(chatId)

    const {
        messages,
        input,
        handleInputChange,
        handleSubmit,
        status,
        setMessages,
        append,
        stop,
        addToolResult,
        reload,
    } = useChat({
        api: '/api/exams/examPrep',
        async onToolCall({ toolCall }) {
            console.log('Tool call:', toolCall)
            if (toolCall.toolName === 'showExamForm') {
                setHideInput(true)
            }
        },
        maxSteps: 3,
        body: {
            chatId: defaultChatId
        },
    })

    const isLoading = status === 'streaming'
    async function handleSubmit2() {
        if (input.trim() === '') return
        if (!chatId) {
            const res = await studentCreateNewChat({
                title: input,
                chatType: 'exam_prep',
            })

            if (res.error) {
                console.error('Error creating chat:', res.error)
                return
            }
            setDefaultChatId(res.data.chatId)
        }
        append({
            role: 'user',
            content: input,
            id: generateId(),
        })
        handleSubmit()
        setHideInput(true)
    }

    return (
        <div>
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-1 md:p-2 lg:p-4"
            >
                {messages.length ? (
                    <ChatList
                        messages={messages}
                        messagesEndRef={messagesEndRef}
                        onSubmit={async (message, toolCallId) => {
                            // if (hideInput) return
                            addToolResult({
                                toolCallId,
                                result: message,
                            })
                            setHideInput(false)
                        }}
                    />
                ) : (
                    <div className="flex flex-col gap-4">
                        <EmptyChatState
                            onSuggestionClick={async (suggestion) => {
                                // Handle suggestion click
                                let currentChatId = defaultChatId
                                if (!currentChatId) {
                                    const res = await studentCreateNewChat({
                                        title: suggestion,
                                        chatType: 'exam_prep',
                                    })
                                    console.log(res)
                                    if (res.error) {
                                        console.error('Error creating chat:', res.error)
                                        return
                                    }
                                    currentChatId = res.data.chatId
                                    setDefaultChatId(currentChatId)
                                }

                                append({
                                    role: 'user',
                                    content: suggestion,
                                    id: generateId(),
                                }, {
                                    body: {
                                        chatId: defaultChatId
                                    }
                                })
                                handleSubmit2()
                            }}
                        />
                    </div>
                )}

                {isLoading && <ChatLoadingSkeleton />}
                <div ref={visibilityRef} className="w-full h-px" />
            </div>

            {!hideInput && (
                <>
                    <Tabs defaultValue="markdown" className="w-full py-4">
                        <div className="flex gap-4">
                            <TabsList
                                id='tabs-list'
                                className='gap-4'
                            >
                                <TabsTrigger
                                    id='simple-tab'
                                    value="simple"
                                >
                                    Simple
                                </TabsTrigger>
                                <TabsTrigger
                                    id='markdown-tab'
                                    value="markdown"
                                >
                                    Markdown
                                </TabsTrigger>
                            </TabsList>
                            <MarkdownEditorTour />
                        </div>
                        <TabsContent
                            id='markdown-content'
                            value="markdown"
                        >
                            <ChatInput
                                isLoading={isLoading}
                                stop={() => stop()}
                                callbackFunction={ async (args) => {
                                    let currentChatId = defaultChatId
                                    if (!currentChatId) {
                                        const res = await studentCreateNewChat({
                                            title: args.content,
                                            chatType: 'exam_prep',
                                        })
                                        console.log(res)
                                        if (res.error) {
                                            console.error('Error creating chat:', res.error)
                                            return
                                        }
                                        currentChatId = res.data.chatId
                                        setDefaultChatId(currentChatId)
                                    }
                                    append({
                                        role: 'user',
                                        content: args.content,
                                        id: generateId(),
                                    }, {
                                        body: {
                                            chatId: currentChatId
                                        }
                                    })
                                }}
                                isTemplatePresent={true}
                            />
                        </TabsContent>
                        <TabsContent
                            id='simple-content'
                            value="simple"
                        >
                            <ChatTextArea
                                isLoading={isLoading}
                                stop={() => stop()}
                                callbackFunction={ async (args) => {
                                    let currentChatId = defaultChatId
                                    if (!currentChatId) {
                                        const res = await studentCreateNewChat({
                                            title: args.content,
                                            chatType: 'exam_prep',
                                        })
                                        console.log(res)
                                        if (res.error) {
                                            console.error('Error creating chat:', res.error)
                                            return
                                        }
                                        currentChatId = res.data.chatId
                                        setDefaultChatId(currentChatId)
                                    }
                                    append({
                                        role: 'user',
                                        content: args.content,
                                        id: generateId(),
                                    }, {
                                        body: {
                                            chatId: currentChatId
                                        }
                                    })
                                }}
                            />
                        </TabsContent>
                    </Tabs>
                </>
            )}
        </div>
    )
}

interface ChatListProps {
    messages: Message[]
    messagesEndRef: React.RefObject<HTMLDivElement>
    onSubmit: (message: Record<string, any>, toolCallId: string) => void
}

function ChatList({ messages, messagesEndRef, onSubmit }: ChatListProps) {
    return (
        <div className="relative">
            {messages.map((message, index) => (
                <div key={index} className="flex flex-col gap-2">
                    {message.parts.map((part, partIndex) => {
                        // render text parts as simple text:
                        if (message.role === 'data' || message.role === 'system') {
                            return null
                        }

                        switch (part.type) {
                            case 'text':
                                return (
                                    <ViewMarkdown key={`part-${index}-${message.id}`} markdown={part.text} />
                                )
                            case 'tool-invocation': {
                                const callId = part.toolInvocation.toolCallId

                                switch (part.toolInvocation.toolName) {
                                    case 'showExamForm': {
                                        if (!part.toolInvocation.args) return null

                                        const {
                                            singleSelectQuestion,
                                            multipleChoiceQuestion,
                                            freeTextQuestion,
                                            matchingTextQuestions
                                        } = part.toolInvocation.args

                                        // switch (part.toolInvocation.state) {
                                        //     case 'call':
                                        return (
                                            <ExamPrepAiComponent
                                                key={`exam-form-${callId}-${partIndex}-${message.id}`}
                                                singleSelectQuestions={singleSelectQuestion}
                                                multipleChoiceQuestions={multipleChoiceQuestion}
                                                freeTextQuestions={freeTextQuestion}
                                                matchingTextQuestions={matchingTextQuestions}
                                                onSubmit={onSubmit}
                                                toolCallId={callId}
                                            />
                                        )
                                        //     default:
                                        //         return null
                                        // }
                                    }
                                    case 'showExamResult': {
                                        if (!part.toolInvocation.args) return null

                                        const {
                                            score,
                                            overallFeedback,
                                            freeTextQuestionFeedback,
                                            multipleChoiceQuestionFeedback,
                                            singleSelectQuestionFeedback,
                                            matchingTextQuestionsFeedback
                                        } = part.toolInvocation.args

                                        return (
                                            <ExamFeedbackCard
                                                score={score}
                                                key={`exam-form-${callId}-${partIndex}-${message.id}`}
                                                overallFeedback={overallFeedback}
                                                freeTextQuestionFeedback={freeTextQuestionFeedback}
                                                multipleChoiceQuestionFeedback={multipleChoiceQuestionFeedback}
                                                singleSelectQuestionFeedback={singleSelectQuestionFeedback}
                                                matchingTextQuestionsFeedback={matchingTextQuestionsFeedback}
                                                fire
                                            />
                                        )
                                    }
                                    default:
                                        return null
                                }
                            }
                            default:
                                return null
                        }
                    })}
                </div>
            ))}
            <div ref={messagesEndRef} className="h-px" />
        </div>
    )
}
