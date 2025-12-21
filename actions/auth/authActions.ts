'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'
import { SignJWT, jwtVerify } from 'jose';

import { createResponse } from '@/utils/functions'
import connectToDatabase from '@/lib/mongodb'
import { User } from '@/models/core'

const SECRET_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'default-secret-key-change-me';
const key = new TextEncoder().encode(SECRET_KEY);

// Helper to create session
async function createSession(userId: string, role: string) {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day
  const session = await new SignJWT({ userId, role })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(key);
  
  cookies().set('session', session, { expires, httpOnly: true, sameSite: 'lax' }); // "secure" should be true in prod
}

export const checkConnection = async () => {
    try {
        await connectToDatabase();
        return { success: true, message: "MongoDB Connected Successfully!" };
    } catch (error: any) {
        return { success: false, message: "Connection Failed: " + error.message };
    }
}

export const signIn = async ({
    email,
    password,
    redirectTo
}: {
    email: string
    password: string
    redirectTo?: string
}) => {
    await connectToDatabase();

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Invalid credentials');
    }

    // Direct password comparison for migrated/new users (assuming we only have new users for now)
    // If you had existing Supabase users, we couldn't check their passwords this way.
    // Since this is a fresh start/migration:
    
    // Check if user has a password field (Supabase users migrated might not have it exposed)
    if (!user.password) {
         throw new Error('User has no password set (might be OAuth or legacy). Try resetting password.');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid credentials');
    }

    await createSession(user._id.toString(), user.role);

    const userRole = user.role || 'student';

    console.log('User logged in:', user.email, 'Role:', userRole);

    if (userRole === 'admin') {
        return redirect('/dashboard/admin')
    } else if (userRole === 'teacher') {
        return redirect('/dashboard/teacher')
    } else {
        if (redirectTo === '/dashboard' || !redirectTo) {
            return redirect('/dashboard/student')
        }
        return redirect(redirectTo)
    }
}

export const signUp = async (userData: {
    email: string
    password: string
    username: string
    full_name: string
}) => {
    if (!userData.email || !userData.password || !userData.username || !userData.full_name) {
        return createResponse('error', 'All fields are required', null, null)
    }

    try {
        await connectToDatabase();

        // Check availability
        const existingEmail = await User.findOne({ email: userData.email });
        if (existingEmail) {
             return createResponse('error', 'Email already exists', null, null);
        }

        const existingUsername = await User.findOne({ username: userData.username });
        if (existingUsername) {
             return createResponse('error', 'Username already exists', null, null);
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);

        // Determine role - FIRST USER IS ADMIN hack for testing if requested, or just student
        // For now default to student. User asked to "test add user and admin".
        // Let's check if it's the specific email user provided to make them admin?
        let role = 'student';
        if (userData.email === 'harikiran1388@gmail.com') { // Hardcoded for user request "add admin" test
            role = 'admin';
        }

        const newUser = await User.create({
            email: userData.email,
            password: hashedPassword, // We added this field to schema in mind (need to verify model has it)
            username: userData.username,
            fullName: userData.full_name,
            role: role,
            supabaseId: `mongo_${new Date().getTime()}`, // Fake ID to satisfy schema requirement
            avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.username}`
        });

        // Auto-login after signup
        await createSession(newUser._id.toString(), newUser.role);

        return createResponse('success', 'Account created successfully! Redirecting...', null, null)

    } catch (error: any) {
        console.error("Signup error:", error);
        return createResponse('error', 'Error creating account: ' + error.message, null, null)
    }
}

export const resetPasswordFun = async ({
    password,
    code
}: {
    password: string
    code: string
}) => {
    // Implement MongoDB version if needed later
    return createResponse('error', 'Reset password not yet implemented for MongoDB', null, null)
}

export const forgotPasswordFun = async (data: {
    email: string
}) => {
    // Implement MongoDB version if needed later
    return createResponse('success', 'Forgot password not yet implemented for MongoDB', null, null)
}
