# KuPi Beach Bar

Mobile-first, single-page landing site for KuPi Beach Bar — built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Images

Place photos in `public/images/`:

| File | Description |
|------|-------------|
| `logo.png` | KuPi logo |
| `kupiBB1.jpg` | Türkiz faház (hero center) |
| `kupiBB2.jpg` | Csirkés és halas tányér |
| `kupiBB3.jpg` | Terasz gyerekekkel |
| `kupiBB4.jpg` | Külső nézet, pergola |
| `kupiBB5.jpg` | Terasz tóval |
| `kupiBB7.jpg` | Sliders + rizs |
| `kupiBB8.jpg` | Burger briós zsemlével |
| `kupiBB9.jpg` | Türkiz faház, kék ég |

Original assets are also kept in `assets/` for reference.

## Using with v0

1. Push this repo to GitHub.
2. Go to [v0.app](https://v0.app) → **+** → **Import from GitHub**.
3. Select the repository (v0 creates a Vercel project if needed).
4. In the chat sidebar → **Git** → confirm branch connection.
5. Optionally paste `uploads/kupi_mobile_design_prompt.md` into v0 **Instructions** to preserve scrapbook design rules.
6. Use **Publish** → **Open PR** to merge v0 changes back to `main`.

## Project structure

- `app/` — Next.js App Router pages and global styles
- `components/` — Section components (nav, hero, menu, reviews, etc.)
- `lib/site-content.ts` — Hungarian copy and content data
- `public/images/` — Static images served at `/images/...`
