import { verifySession } from '@/lib/session'
import { Tables } from './supabase'

export async function getServerUserRole () {
    const session = await verifySession()
    
    if (session?.role) {
        return session.role as Tables<'user_roles'>['role']
    }
    return undefined
}
