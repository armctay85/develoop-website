# Deploy

This site deploys as a Next.js application. The enquiry form needs the server runtime, so do not publish it as a static export.

Domain and DNS are already configured. Do not change them as part of a routine deploy.

## Vercel

Push the repository. The existing project builds with `npm run build`.

Set these environment variables on the host when mail should send:

- `RESEND_API_KEY`
- `ENQUIRY_TO_EMAIL`
- `ENQUIRY_FROM_EMAIL`

If they are unset, the form still shows success and the enquiry is written to the server log. See the README.
