# Xencorp Solutions Technical SEO Checklist & Log

This checklist tracks completed SEO tasks and outlines suggested future enhancements to maximize crawlability, page performance, and organic search ranking.

---

## 1. Completed SEO Enhancements

| Area / Page | Enhancement Details | Status |
| :--- | :--- | :--- |
| **All Routes (`src/app/`)** | Configured server-side `Metadata` blocks on every route to output optimized titles, descriptions, and OpenGraph tags. | [x] Completed |
| **Services Detail (`[id]`)** | Implemented Next.js `generateMetadata` function to dynamically output metadata matching the service ID. | [x] Completed |
| **Homepage** | Expanded Services FAQ items list from 5 to 7. Adhered to semantic markup structure (single `h1` per page, hierarchical tags). | [x] Completed |
| **Product Pages** | Updated Orion, GRC, and Crypto Exchange pages. Added Platform Architecture blueprint `ImagePlaceholder`. Expanded FAQs to 6. | [x] Completed |
| **Industries Page** | Created `/industries` page with responsive grid layout, customized image placeholders, 6 compliance FAQs, and CTA. | [x] Completed |
| **Resources Page** | Created `/resources` page listing technical guides, whitepapers (Coming Soon), 6 advisory FAQs, and download CTA. | [x] Completed |
| **Case Studies** | Restructured overview to NDA-compliant Coming Soon. Configured automatic route redirect on `/case-studies/[slug]` to overview. | [x] Completed |
| **About Page** | Added Lahore HQ office blueprint, pillars diagram, and milestones flowchart image placeholders. Appended 6 FAQs and CTA. | [x] Completed |
| **Contact Page** | Added office map blueprint, 6 FAQs, and Company Profile download PDF CTA. Cleaned intake form handling. | [x] Completed |
| **Technical Configs** | Created `robots.txt` pointing to sitemap, `sitemap.xml` listing all 21 public endpoints, and `llms.txt` crawler guide in `public/`. | [x] Completed |

---

## 2. Technical SEO Auditing Guidelines

To ensure the website remains optimized during future developments, run these checks:

1. **Heading Hierarchy**: Ensure only **one** `<h1>` tag exists per page (usually in the Hero). All subordinate headings must follow nesting sequence (`<h2>` to `<h6>`).
2. **Responsive CSS**: Avoid fixed widths. Use styling tokens from `src/styles/theme.ts` (`T.fontLink`, `T.sans`, etc.) to maintain visual consistency.
3. **Alt Attributes**: Every image tag (`<img>`) must have a descriptive `alt` attribute utilizing target keywords logged in `docs/seo-keywords.md`.
4. **Link Accessibility**: Ensure all links (`<a>` or `<Link>`) have readable text, a valid `href` target, and unique `id` values for interactive elements.
5. **Dynamic Static Generation**: Ensure all dynamic paths that should be pre-rendered specify `generateStaticParams` to optimize page loads.

---

## 3. Recommended Future Content & SEO Enhancements

- [ ] **Dynamic Sitemap Sync**: Set up a build hook that automatically reads route files or CMS endpoints to generate `sitemap.xml` on deployment.
- [ ] **Structured Schema Markup**: Inject JSON-LD schema blocks (`application/ld+json`) on the About page (Organization schema) and Product pages (Product & FAQ schemas) to trigger rich snippet stars in search results.
- [ ] **Technical Whitepaper PDFs**: Author the PDF guides for "ERP Offline Sync" and "SOC 2 Readiness" and place them under the `public/assets/` folder to activate the download buttons.
- [ ] **Interactive Scoping Calculator**: Develop a React-based interactive budget estimation calculator on the Contact page, increasing session duration and user interactions.
- [ ] **Performance Auditing**: Run Google Lighthouse tests on production builds to verify high scores for Mobile Performance, LCP (Largest Contentful Paint), and CLS (Cumulative Layout Shift).
