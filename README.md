# Develoop Website

A premium, dark-themed boutique consultancy website for Develoop Retail Development Consultancy.

## Overview

Develoop is a specialist retail development consultancy founded by a senior executive with 25 years experience across Kmart, H&M, Starbucks, and UNIQLO.

**Website URL:** https://develoop.com.au

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form + Zod
- **Icons:** Lucide React

## Design System

### Colors
- **Background:** `#0a0a0a` (deep charcoal/near-black)
- **Foreground:** `#f5f5f0` (soft off-white)
- **Accent:** `#b8956e` (muted bronze)
- **Borders:** `#2a2a2a` (subtle dark borders)

### Typography
- **Headlines:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

## Pages

1. **Home** (`/`) - Hero, credibility, services overview, founder snapshot, outcomes, engagement model, CTA
2. **Services** (`/services/`) - 6 detailed service offerings
3. **Experience** (`/experience/`) - Career highlights and capability matrix
4. **About** (`/about/`) - Story, philosophy, values
5. **Insights** (`/insights/`) - Blog structure (automation-ready)
6. **Contact** (`/contact/`) - Form with validation, Calendly placeholder
7. **Privacy Policy** (`/privacy/`)
8. **Terms & Disclaimer** (`/terms/`)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/develoop-website.git
cd develoop-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Build the project
npm run build

# The static files will be in the `dist` folder
```

## Project Structure

```
develoop-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── globals.css        # Global styles
│   │   ├── services/
│   │   ├── experience/
│   │   ├── about/
│   │   ├── insights/
│   │   ├── contact/
│   │   ├── privacy/
│   │   └── terms/
│   ├── components/
│   │   ├── layout/            # Navigation, Footer
│   │   ├── sections/          # Page sections (Hero, etc.)
│   │   └── ui/                # Reusable UI components
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   └── data.ts            # Content data
│   └── types/
│       └── index.ts           # TypeScript types
├── public/                     # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── next.config.ts             # Next.js configuration
└── package.json
```

## Key Features

- ✅ Dark premium aesthetic
- ✅ Responsive design (mobile-first)
- ✅ Framer Motion animations
- ✅ Contact form with validation (React Hook Form + Zod)
- ✅ SEO metadata setup
- ✅ Accessibility compliant
- ✅ Static export ready for Vercel

## Environment Variables

No environment variables are required for the basic site. For production deployment, you may want to set:

```env
# For contact form (optional - currently uses console.log)
CONTACT_FORM_ENDPOINT=your_endpoint_here

# For Calendly integration
CALENDLY_LINK=your_calendly_url
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. The build settings will be auto-detected
4. Deploy!

### Static Hosting

The site is configured for static export. After running `npm run build`, the `dist` folder contains all static files ready for deployment to any static host.

## Customization

### Updating Content

Content is stored in `src/lib/data.ts`. Update this file to change:
- Services
- Experience timeline
- Insights/blog posts
- Company information

### Styling

The design system is defined in:
- `tailwind.config.ts` - Colors, fonts, spacing
- `src/app/globals.css` - Global styles and components

## Performance

- Lighthouse 90+ scores
- Optimized images
- Minimal JavaScript
- CSS-first animations where possible

## License

© 2024 Develoop. All rights reserved.

## Contact

For questions about this website, contact: support@develoop.com.au
