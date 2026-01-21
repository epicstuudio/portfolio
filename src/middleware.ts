import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const COOKIE_NAME = 'case-study-auth';
const PROTECTED_PATHS = ['/case-studies'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if this path should be protected
    const isProtectedPath = PROTECTED_PATHS.some(path => pathname.startsWith(path));

    if (!isProtectedPath) {
        return NextResponse.next();
    }

    // Check for auth cookie
    const authCookie = request.cookies.get(COOKIE_NAME);

    if (!authCookie?.value) {
        // No cookie - redirect to password page
        const passwordUrl = new URL('/password', request.url);
        passwordUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(passwordUrl);
    }

    // Validate cookie format (basic check)
    try {
        const decoded = Buffer.from(authCookie.value, 'base64').toString();
        if (!decoded.startsWith('authenticated:')) {
            throw new Error('Invalid token format');
        }
    } catch {
        // Invalid cookie - redirect to password page
        const passwordUrl = new URL('/password', request.url);
        passwordUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(passwordUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/case-studies/:path*'],
};
