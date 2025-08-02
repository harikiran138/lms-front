import ExamPrepChat from '@/components/dashboards/chat/ExamPrepChat'
import { createClient } from '@/utils/supabase/server'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

export default async function ExamnChatIdPage({
    params,
}: {
    params: {
        chatId: string
    }
}) {
    const supabase = createClient()

    const messagesData = await supabase
        .from('chats')
        .select('*, messages(*)')
        .eq('chat_id', Number(params.chatId))
        .order('created_at', { foreignTable: 'messages', ascending: true })
        .single()

    if (messagesData.error) {
        console.log(messagesData.error)
        throw new Error('Error fetching messages')
    }

    console.log(messagesData.data.messages)

    const initialMessages = messagesData.data.messages.map((message: any) => ({
        id: message.id,
        content: message.content,
        createdAt: message.created_at,
        role: message.role,
    }))

    console.log('Initial messages:', initialMessages)

    return <ExamPrepChat chatId={Number(params.chatId)} />
}
