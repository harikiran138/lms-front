
import { Message } from 'ai'
import dayjs from 'dayjs'
import { Check, Copy, Edit, Recycle, Trash } from 'lucide-react'

import { useScopedI18n } from '@/app/locales/client'
import WebSearchResult from '@/components/chatbox/WebSearchResult'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import ViewMarkdown from '@/components/ui/markdown/ViewMarkdown'
import { Separator } from '@/components/ui/separator'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

interface MessageItemProps {
    message: Message
    profile: {
        full_name: string
        avatar_url: string
    }
    isEditing: boolean
    editedContent: string
    setEditedContent: (content: string) => void
    onEdit: () => void
    onSave: () => void
    onDelete: () => void
    onCopy: () => void
    onRegenerate: () => void
    isLoading: boolean
    isCompleted: boolean
    toolInvocations?: JSX.Element
}

const MessageItem: React.FC<MessageItemProps> = ({
    message,
    profile,
    isEditing,
    editedContent,
    setEditedContent,
    onEdit,
    onSave,
    onDelete,
    onCopy,
    onRegenerate,
    isLoading,
    isCompleted,
    toolInvocations,
}) => {
    const t = useScopedI18n('ExerciseChat')
    return (
        <div className={'mb-6'}>
            <div className="flex flex-col items-start gap-3">
                <Avatar className="w-8 h-8">
                    <AvatarImage
                        src={
                            message.role === 'user'
                                ? profile.avatar_url
                                : '/img/robot.jpeg'
                        }
                    />
                    <AvatarFallback>
                        {message.role === 'user' ? profile.full_name[0] : 'A'}
                    </AvatarFallback>
                </Avatar>
                <div className="flex-1 w-full">
                    <div className="py-3 rounded-lg ">
                        <MessageParts message={message} />
                        <div className="text-xs text-gray-500 mt-1 flex items-center flex-wrap gap-4 justify-between">
                            <span>
                                {dayjs(message.createdAt).format(
                                    'MMM D, YYYY h:mm A'
                                )}
                            </span>
                            <div className="flex items-center space-x-2">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={onCopy}
                                                disabled={isLoading}
                                            >
                                                {message.id ===
                                                    'copiedMessageId' ? (
                                                        <Check className="h-4 w-4" />
                                                    ) : (
                                                        <Copy className="h-4 w-4" />
                                                    )}
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {message.id === 'copiedMessageId'
                                                ? t('copied')
                                                : t('copyToClipboard')}
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                                {message.role === 'user' && (
                                    <>
                                        <ActionButton
                                            icon={
                                                isEditing ? (
                                                    <Check className="h-4 w-4" />
                                                ) : (
                                                    <Edit className="h-4 w-4" />
                                                )
                                            }
                                            tooltip={
                                                isEditing
                                                    ? t('save')
                                                    : t('edit')
                                            }
                                            onClick={
                                                isEditing ? onSave : onEdit
                                            }
                                            disabled={isLoading || isCompleted}
                                            variant={
                                                isEditing ? 'default' : 'ghost'
                                            }
                                        />
                                        <ActionButton
                                            icon={<Trash className="h-4 w-4" />}
                                            tooltip={t('delete')}
                                            onClick={onDelete}
                                            disabled={isLoading || isCompleted}
                                            variant='ghost'
                                        />
                                    </>
                                )}

                                {message.role === 'assistant' && (
                                    <>
                                        <ActionButton
                                            icon={<Recycle className="h-4 w-4" />}
                                            tooltip={t('regenerate')}
                                            onClick={onRegenerate}
                                            disabled={isLoading || isCompleted}
                                            variant="ghost"
                                        />
                                        <ActionButton
                                            icon={<Trash className="h-4 w-4" />}
                                            tooltip={t('delete')}
                                            onClick={onDelete}
                                            disabled={isLoading || isCompleted}
                                            variant="ghost"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <Separator className="mt-3" />
                </div>
            </div>
        </div>
    )
}

export default MessageItem

interface ActionButtonProps {
    icon: React.ReactNode
    tooltip: string
    onClick: () => void
    variant: 'default' | 'ghost'
    disabled?: boolean
}

const ActionButton: React.FC<ActionButtonProps> = ({
    icon,
    tooltip,
    onClick,
    variant,
    disabled = false,
}) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant={variant}
                    size="sm"
                    onClick={onClick}
                    disabled={disabled}
                >
                    {icon}
                </Button>
            </TooltipTrigger>
            <TooltipContent>{tooltip}</TooltipContent>
        </Tooltip>
    </TooltipProvider>
)

const renderToolInvocation = ({
    toolInvocation,
    index,
    message,
}: {
    toolInvocation: any
    index: number
    message: Message
}) => {
    if (!toolInvocation?.result) return null

    switch (toolInvocation.toolName) {
        case 'tavily_web_search':
            return (
                <div key={`${message.id}-tool-${index}`} className="mt-4">
                    <WebSearchResult
                        key={
                            `${toolInvocation.toolName}-${index}`
                        }
                        toolName={
                            'tavily_web_search'
                        }
                        result={
                            toolInvocation.result
                        }
                    />
                </div>
            )
        default:
            return null
    }
}

function MessageParts({
    message,
}: {
    message: Message
}) {
    return (
        <>
            {message.parts.map((part, index) => {
                switch (part.type) {
                    case 'text':
                        if (message.role === 'user') {
                            return (
                                <div key={`part-${index}`} className="text-sm  p-2 rounded-md my-2">
                                    <span className="font-medium">{part.text}</span>
                                </div>
                            )
                        }
                        return <ViewMarkdown key={`part-${index}`} markdown={part.text} />
                    case 'tool-invocation':
                        return renderToolInvocation({
                            toolInvocation: part.toolInvocation,
                            index,
                            message
                        })
                    case 'reasoning':
                        return (
                            <div
                                key={`part-${index}`}
                                className="text-sm bg-orange-100/10 p-2 rounded-md my-2 border border-orange-200/20"
                            >
                                <h4 className="font-medium text-orange-500 mb-1">Razonamiento:</h4>
                                <ViewMarkdown markdown={part.reasoning} />
                            </div>
                        )
                    case 'file':
                        return (
                            <img
                                key={`part-${index}`}
                                src={`data:${part.mimeType};base64,${part.data}`}
                                alt="Imagen generada"
                                className="rounded-md max-w-full mt-2"
                            />
                        )
                    default:
                        return null
                }
            })}
        </>
    )
}
