import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'case-study-auth';
const COOKIE_MAX_AGE = 60 * 60 * 24; // 24 hours in seconds

export async function POST(request: Request) {
    try {
        const { password } = await request.json();
        const correctPassword = process.env.CASE_STUDY_PASSWORD;

        if (!correctPassword) {
            console.error('CASE_STUDY_PASSWORD environment variable not set');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        if (password === correctPassword) {
            // Create a simple auth token (timestamp-based for basic validation)
            const token = Buffer.from(`authenticated:${Date.now()}`).toString('base64');

            // Set httpOnly cookie
            const cookieStore = await cookies();
            cookieStore.set(COOKIE_NAME, token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: COOKIE_MAX_AGE,
                path: '/',
            });

            return NextResponse.json({ success: true });
        }

        return NextResponse.json(
            { error: 'Incorrect password' },
            { status: 401 }
        );
    } catch {
        return NextResponse.json(
            { error: 'Invalid request' },
            { status: 400 }
        );
    }
}
