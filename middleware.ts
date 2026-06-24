import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhooks(.*)',
  '/api/ping',
  '/product(.*)',
  '/search(.*)',
  '/cart',
  '/contact',
  '/collection-policy',
  '/journal(.*)',
  '/about',
  '/tours(.*)',
  '/robots.txt',
  '/sitemap.xml',
  '/api/contact',
  '/unauthorized',
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  const response = NextResponse.next();
  if (!req.cookies.get('sessionCartId')) {
    response.cookies.set('sessionCartId', crypto.randomUUID(), {
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    });
  }

  return response;
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
