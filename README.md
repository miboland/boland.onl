# boland.onl

My personal website and portfolio.

## Overview

- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://boland.onl/dashboard), newsletter subscription, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
- `pages/dashboard` - [Personal dashboard](https://boland.onl/dashboard) containing various metrics.
- `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/miboland/boland.onl.git
$ cd boland.onl
$ yarn
$ yarn dev
```

Create a `.env.local` file similar to `.env`.

```
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
UNSPLASH_ACCESS_KEY=
GOOGLE_ENCRYPTION_KEY=
GOOGLE_ENCRYPTION_IV=
BUTTONDOWN_API_KEY=
NEXT_PUBLIC_FATHOM_SITE_ID=
```

## Built Using

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com)
- [MDX](https://github.com/mdx-js/mdx)
- [Chakra UI](https://chakra-ui.com/)
