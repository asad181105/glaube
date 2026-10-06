# Glaube Exotics

Premium multi-page website for Glaube Exotics — luxury automotive concierge for sourcing, imports, customization and exceptional vehicles.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Project URL (`https://qzsuqsgfuyrnupnsrgaw.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Project Settings → API → anon public |
| `SUPABASE_SERVICE_ROLE_KEY` | Project Settings → API → service_role (server only, never commit) |
| `ADMIN_PASSWORD` | Password for `/admin` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp digits with country code |

## Connect Supabase

1. Open [Supabase SQL Editor](https://supabase.com/dashboard/project/qzsuqsgfuyrnupnsrgaw/sql).
2. Paste and run `supabase/schema.sql`.
3. Put the anon and service_role keys in `.env.local`.
4. Restart `npm run dev`.
5. Sign in at `/admin` and click **Sync catalog to Supabase**.

Admin: `/admin` (set `ADMIN_PASSWORD` in `.env.local`).

Public forms insert into `inquiries`, `sourcing_requests`, `custom_build_requests` and `vehicle_requests`. Inventory reads from `vehicles` / `vehicle_images` when the database has rows, otherwise the local catalog.

## Deploy

See [DEPLOY.md](./DEPLOY.md). Import the GitHub repo in Vercel, add the env vars from `.env.example`, then deploy.
