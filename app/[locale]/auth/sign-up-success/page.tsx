import { getScopedI18n } from '@/app/locales/server'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

export default async function SignUpSuccessPage() {
    const t = await getScopedI18n('auth')

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">{t('SignUpSuccessPage.title')}</CardTitle>
                            <CardDescription>{t('SignUpSuccessPage.description')}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                {t('SignUpSuccessPage.message')}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
