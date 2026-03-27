# Deploy to Vercel (Zero-Token Method)

## Option 1: Vercel CLI (Recommended)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login (opens browser - no token sharing)
vercel login

# 3. Deploy
vercel --prod
```

## Option 2: Git Integration
1. Push to GitHub
2. Import at https://vercel.com/new
3. Auto-deploys on push

## Option 3: Manual Upload
1. Zip this folder
2. Upload at https://vercel.com/new

## Domain Setup
After deploy, add custom domain:
```
vercel domains add develoop.com.au
```

Or in Vercel dashboard:
1. Go to Project Settings → Domains
2. Add `develoop.com.au`
3. Follow DNS instructions for Crazy Domains

## Environment Variables
None required for static site.

## Build Output
Static files in `dist/` folder (pre-built).
