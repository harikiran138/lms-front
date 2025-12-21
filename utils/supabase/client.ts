import { createBrowserClient } from '@supabase/ssr'
import { Database } from './supabase'

// MOCK CLIENT FOR MIGRATION
const createMockClient = () => {
    console.warn('⚠️ Using Mock Supabase Client (Migration Mode)')
    const mockReturn = {
        data: null,
        error: null,
        count: 0
    }
    
    // Recursive proxy to handle chained calls (supabase.from().select().eq()...)
    const handler: ProxyHandler<any> = {
        get(target, prop) {
            if (prop === 'then') return undefined; // Let it be awaitable if needed (mostly explicitly awaited)
            
            // Mock auth specifically
            if (prop === 'auth') {
                return {
                    getUser: async () => ({ data: { user: null }, error: null }),
                    getSession: async () => ({ data: { session: null }, error: null }),
                    signInWithPassword: async () => ({ data: {}, error: null }),
                    signOut: async () => ({ error: null }),
                    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
                }
            }
            
            // Return a function that returns the proxy again for chaining
            return (...args: any[]) => new Proxy(() => Promise.resolve(mockReturn), handler)
        },
        apply(target, thisArg, argumentsList) {
             // If called as a function (e.g. .select()), return promise resolving to mock data
             return Promise.resolve(mockReturn)
        }
    }

    return new Proxy(() => {}, handler) as unknown as ReturnType<typeof createBrowserClient<Database>>
}

export const createClient = () => {
    // Return mock if using placeholder or missing keys
    if (process.env.NEXT_PUBLIC_SUPABASE_URL?.includes('placeholder')) {
        return createMockClient()
    }

    return createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
}
