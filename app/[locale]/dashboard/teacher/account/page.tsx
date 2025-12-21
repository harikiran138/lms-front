import TeacherAccountPage from '@/components/dashboards/teacher/account/TeacherAccountPage'
import { createClient } from '@/utils/supabase/server'

export default async function TeacherAccountPage2() {
    const supabase = createClient()
    const userData = await supabase.auth.getUser()

    const profileData: any = await (supabase
        .from('profiles') as any)
        .select('*')
        .eq('id', userData.data.user.id)
        .single()

    return (
        <TeacherAccountPage

            teacherData={

                {
                    name: profileData.data.full_name,
                    email: userData.data.user.email,
                    phone: userData.data.user.phone,
                    avatar: profileData.data.avatar_url,
                    // subject: profileData.data.subject,
                    // totalStudents: profileData.data.total_students,
                    // totalClasses: profileData.data.total_classes,
                    // rating: profileData.data.rating,
                    // upcomingClasses: profileData.data.upcoming_classes,
                    // recentActivity: profileData.data.recent_activity,
                }
            }
        />
    )
}
