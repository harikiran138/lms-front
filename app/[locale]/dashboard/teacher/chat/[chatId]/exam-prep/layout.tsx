import BreadcrumbComponent from '@/components/dashboards/student/course/BreadcrumbComponent'
import { createClient } from '@/utils/supabase/server'

export default async function ExamnChatIdPageLayout ({
    params,
    children
}: {
    params: {
        chatId: string
    }
    children: React.ReactNode
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

    return (
        <>
            <BreadcrumbComponent
                links={[
                    { href: '/dashboard', label: 'Dashboard' },
                    { href: '/dashboard/student', label: 'Student' },
                    { href: '/dashboard/student/chat', label: 'Chat' },
                    { href: `/dashboard/student/chat/${params.chatId}`, label: messagesData.data.title.slice(0, 40) + '...' }
                ]}
            />
            {children}
        </>
    )
}
