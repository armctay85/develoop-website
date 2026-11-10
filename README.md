# Develoop

Public website for Develoop, a consultant-led design, delivery and development advisory practice.

The site is a marketing site: eight pages, plus one enquiry route. There is no account system and no payment flow. Domain and DNS settings are left as they are.

## Pages

- `/` Home
- `/services/` Engagements, deliverables and starting fees
- `/approach/` Method
- `/tools/` Estimate HQ, linked out to https://estimatehq.com.au
- `/about/` The practice
- `/contact/` Enquiry form
- `/privacy/`
- `/terms/` The legal name of the practice is stated only on this page

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

The enquiry route needs a Node server, so the project is not a static export.

## Local development

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run build
npm start
```

## Environment variables

The site builds and the form returns a success state with no environment variables set. In that case the route does not call Resend. It writes the enquiry to the server log and still tells the visitor the enquiry was received.

To email enquiries, set all three variables. If any one is missing or not a plausible address, the route treats mail as unconfigured.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key for Resend. Do not commit it. |
| `ENQUIRY_TO_EMAIL` | Inbox that receives enquiries. One address, or several separated by commas. |
| `ENQUIRY_FROM_EMAIL` | Sender on a domain verified in Resend. Format: `Develoop <notifications@your-verified-domain>` |

Copy `.env.example` to `.env.local` for local use. `.env.local` is gitignored.

The form also rejects a filled honeypot field (it shows success and does not send) and limits repeat posts from the same network. The limit is kept in memory on each server instance.

## Estimate HQ

Estimate HQ is a separate product at https://estimatehq.com.au. This site links to it. It is not rebuilt here.
