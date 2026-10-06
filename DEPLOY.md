# Deploy on Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com/new) → **Import** the repo (Framework: Next.js, leave build settings default).
3. Add these **Environment Variables** (Production + Preview):

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Your live URL, e.g. `https://glaubeexotics.com` or `https://your-project.vercel.app` |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://qzsuqsgfuyrnupnsrgaw.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API → `anon` `public` |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API → `service_role` (keep secret) |
| `ADMIN_PASSWORD` | Strong password for `/admin` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Optional, digits with country code |

4. Deploy. After the first live URL is known, set `NEXT_PUBLIC_SITE_URL` to that URL and **Redeploy**.
5. Open `/admin` → **Sync catalog to Supabase** (SQL schema must already be applied).

Do not commit `.env.local`. `SUPABASE_SERVICE_ROLE_KEY` is server-only.
