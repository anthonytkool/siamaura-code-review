# Siam Aura

![Siam Aura](./public/images/siam-aura-preview.png)

Thai Sacred Arts, Heritage Stories & Trusted Cultural Concierge

## About

Siam Aura is an online store specializing in authentic Thai amulets and sacred arts, presented in a luxury shopping experience inspired by high-end fashion houses.

## Tech Stack

- **Framework:** Next.js 15
- **Database:** Supabase (PostgreSQL) + Prisma
- **Authentication:** Clerk
- **Payment:** Stripe
- **Image Upload:** Uploadthing
- **Email:** Resend
- **Styling:** TailwindCSS + ShadCN UI
- **Deployment:** Vercel

## Features

- E-Commerce
- Journal & Heritage Stories
- Sacred Arts Collection
- Private Cultural Tours
- Concierge Services

## Environment Variables

Create a `.env` file with the following:

```env
# App
NEXT_PUBLIC_APP_NAME=
NEXT_PUBLIC_APP_DESCRIPTION=
NEXT_PUBLIC_SERVER_URL=

# Database
DATABASE_URL=
DIRECT_URL=

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Payment
PAYMENT_METHODS=
DEFAULT_PAYMENT_METHOD=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Uploadthing
UPLOADTHING_TOKEN=
UPLOADTHING_SECRET=
UPLOADTHING_APPID=

# Email
RESEND_API_KEY=
SENDER_EMAIL=
```

## Getting Started

```bash
npm install
npm run dev
```

## Live

[www.siamaura.org](https://www.siamaura.org)

## License

MIT
