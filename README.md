# Chandon Kumar Portfolio

Modern React + Vite portfolio showcasing Chandon Kumar’s expertise as a Frontend, React, Next.js, MERN Stack, and JavaScript Developer. The project ships with technical SEO, structured data, performance optimizations, and marketing-ready content.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## SEO & Performance Highlights

- Preconfigured `<title>`, meta description, canonical tag, Open Graph, Twitter cards, and keyword meta.
- JSON-LD graph for `Person`, `WebSite`, and `CreativeWork`.
- Sitemap (`public/sitemap.xml`) and robots.txt (`public/robots.txt`) with your canonical domain (`https://chandonkumar.com`). Update if you deploy elsewhere.
- Locally hosted and optimized WebP assets served from `public/images`.
- Lazy loading and descriptive alt text applied to all images.
- `HelmetProvider` for per-page metadata plus responsive, semantic heading structure.

## Backlink Action Plan

Strengthen authority by placing the portfolio URL (use the canonical domain) in:

1. **LinkedIn bio** – Edit your profile “Contact Info” and “Featured” sections to add the site plus a post announcing the launch.
2. **GitHub profile** – Update the profile “Website” field and pin a repository README linking back with anchor text like “Hire Frontend Developer”.
3. **Behance / Dribbble** – Publish a case study for a highlighted project and reference the live portfolio URL in the project description.
4. **About.me** – Create a card that mirrors the homepage hero copy and includes a CTA button pointing to the portfolio.
5. **Facebook / Instagram bio** – Replace the single bio link with Linktree or add the site directly; pin a reel/story walking through the portfolio.
6. **Reddit communities** – Share select write-ups (e.g., r/webdev, r/reactjs) focusing on lessons learned; include the link only where self-promotion is allowed and after adding value.

Track clicks in Google Analytics/UTM parameters where possible.

## Post-Launch Checklist

- Submit the sitemap URL inside Google Search Console and request indexing of the homepage after every major update.
- Upload a high-resolution social preview to match the `og:image` URL or adjust the meta tag to point to your hosted asset.
- If hosting behind a CDN (Vercel, Netlify, Cloudflare), enable brotli/gzip compression and long-lived caching headers for `assets/` and `images/`.
- Monitor Lighthouse audits for SEO, Performance, and Best Practices (target 95+). Address any CLS or unused JavaScript warnings surfaced.

Happy launching! 🚀
