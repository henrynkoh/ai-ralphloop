# User Manual — Solo Entrepreneur Curriculum

Complete reference for the Solo Entrepreneur Curriculum app: features, pages, and usage.

---

## 1. Overview

The app is a **static Next.js site** that displays a curriculum for startup solo entrepreneurs. Content is stored in code (`src/data/curriculum.ts`) and rendered as tables with step-by-step instructions. There is no login, database, or backend.

---

## 2. Pages and routes

| Route | Purpose |
|-------|---------|
| `/` | **Home.** Lists all 7 categories as cards; “How to use” section at bottom. |
| `/category/[id]` | **Category page.** One table for that category: Concept, Key idea, Step-by-step, Notes. Link back to home and to Full curriculum. |
| `/all` | **Full curriculum.** All categories and concepts on one page, same table format. No duplicate content. |

### Category IDs (for `/category/[id]`)

- `founder-readiness`
- `opportunity-validation`
- `business-model`
- `mvp-build-measure-learn`
- `build-launch`
- `growth-pmf`
- `tools-operations`

---

## 3. Features

### 3.1 Home page

- **Category cards:** Title, short description, concept count. Click to open that category’s table.
- **How to use:** Numbered list recommending order (1 → 7) and link to Full curriculum.
- **Header:** App title; links to “Categories” (home) and “Full curriculum” (`/all`).

### 3.2 Category page

- **Breadcrumb:** “← All categories” back to home; “Category N” label.
- **Title and description:** Category name and one-sentence description.
- **Table:** Four columns — Concept | Key idea | Step-by-step instructions | Notes. One row per concept.
- **Footer link:** “View full curriculum” to `/all`.

### 3.3 Full curriculum (`/all`)

- **Sections:** One per category, in order 1–7.
- **Per section:** Category title, description, “View table” link to that category page, then the same 4-column table for all concepts in that category.
- **Use case:** Read or search everything in one place; no redundancy.

---

## 4. Editing content

All curriculum content is in **`src/data/curriculum.ts`**.

- **Add a concept:** Add an object to the `concepts` array of the right category with `concept`, `keyIdea`, `steps` (array of strings), and optional `notes`.
- **Edit a category:** Change `title`, `description`, or `concepts` in the category object.
- **Add a category:** Append a new object to the `curriculum` array with `id`, `title`, `description`, `order`, and `concepts`. Use a new route ID (e.g. `my-new-category`); Next.js will need a rebuild so the new `/category/my-new-category` page is generated.

After editing, run `npm run build` (or keep `npm run dev` running) to see changes.

---

## 5. Technical details

- **Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS.
- **Data:** No API or database; curriculum is imported from `@/data/curriculum`.
- **Build:** Static; category pages are pre-rendered via `generateStaticParams` in `src/app/category/[id]/page.tsx`.
- **Deploy:** Build with `npm run build` and run `npm start`, or deploy the project to Vercel/Netlify as a static/Node app.

---

## 6. Keyboard and accessibility

- All main actions are **links** (no custom JS required). Use Tab to move, Enter to open.
- Tables use `<table>`, `<th>`, `<tbody>`, and semantic headings for structure.
- For small screens, tables scroll horizontally where needed.

---

## 7. Troubleshooting

| Issue | What to do |
|-------|------------|
| Blank or wrong content | Confirm edits in `src/data/curriculum.ts` and restart dev server or rebuild. |
| Category link 404 | Check that the category `id` in the data matches the URL (e.g. `founder-readiness`). Rebuild after adding new categories. |
| Port in use | Use another port: `PORT=3001 npm run dev`. |
| Build fails | Run `npm install` and `npm run build`; fix any TypeScript or lint errors reported. |

---

## Summary: How to do (from video transcripts)

*From the Ralph Loop video: 반복 가능한 프로세스 품질로 업그레이드.*

- **In short:** Good prompts → repeat execution → file/markdown history (or tests) → process quality. Trust file state over context; 20–60 min tasks; clear completion conditions; no end condition = no good quality.
- **Steps:** (1) Write completion conditions, (2) Run in loops, save to files, (3) Commit at task unit, check commit and test each cycle, (4) If wrong direction: stop, adjust prompt/agent, restart.
- **Remember:** Operator/quality designer role; tools: Awesome Agent, Ralph Claude Code, Codex how-to-ralph. Full summary: [VIDEO_TRANSCRIPT_SUMMARY.md](./VIDEO_TRANSCRIPT_SUMMARY.md).

---

**See also:** [README.md](../README.md) (project overview), [QUICKSTART.md](./QUICKSTART.md) (run in 2 min), [TUTORIAL.md](./TUTORIAL.md) (learning path).
