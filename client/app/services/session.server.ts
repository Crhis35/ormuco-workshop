import { createCookieSessionStorage } from '@remix-run/node'; // or "@remix-run/cloudflare"

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: '__ormuco-project-session',

      // all of these are optional
      domain: undefined,
      // process.env.NODE_ENV === 'production'
      //   ? 'remix-social-rosy.vercel.app'
      //   : undefined,
      expires: new Date(Date.now() + 60_000000),
      httpOnly: true,
      maxAge: 60_000000,
      path: '/',
      sameSite: 'lax',
      secrets: ['s3cret1'],
      secure: process.env.NODE_ENV === 'production',
    },
  });

export { getSession, commitSession, destroySession };
