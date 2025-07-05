import { getSessionCookie } from 'better-auth/cookies';
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_ROUTES = ['/'];
const AUTH_ROUTES = ['/sign-in', '/sign-up'];
const API_ROUTES = ['/api'];

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const sessionCookie = getSessionCookie(request);
	const isAuthenticated = !!sessionCookie;

	const isApiRoute = API_ROUTES.some((route) => pathname.startsWith(route));
	if (isApiRoute) {
		return NextResponse.next();
	}

	const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
	if (isPublicRoute) {
		return NextResponse.next();
	}

	const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));
	if (isAuthRoute) {
		if (isAuthenticated) {
			return NextResponse.redirect(new URL('/', request.url));
		}
		return NextResponse.next();
	}

	if (!isAuthenticated) {
		return NextResponse.redirect(new URL('/sign-in', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
	],
};
