<div align="center">

# 🚀 Solo Entrepreneur Curriculum

**One curriculum for startup solo founders — mindset → validation → MVP → launch → growth**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

*Tables · Step-by-step · No redundancy · Free*

</div>

---

<table>
<tr>
<td width="260px" valign="top">

### 📌 Navigate

| Jump to |
|---------|
| [↑ Top](#-solo-entrepreneur-curriculum) |
| [About](#-about) |
| [Categories](#-curriculum-categories) |
| [How to run](#-how-to-run) |
| [Routes](#-routes) |
| [Features](#-features--functions) |
| [Tech](#-tech) |
| [Docs](#-documentation) |
| [Sources](#-content-sources) |
| [Summary (how to do)](#-summary-how-to-do-from-video-transcripts) |
| [→ GitHub](#-repository) |

*Scroll this page up/down and use the links above to jump to any section.*

</td>
<td valign="top">

---

## 📖 About

A **Next.js** app that presents a curriculum of key ideas and concepts for **startup solo entrepreneurs**. Content is aligned with lean startup, customer development, and solo-founder best practices (Berkeley Startup Studio, Lean Startup, 2025 guides).

| Goal | What you get |
|------|----------------|
| **Explain** | Key concepts in one place, by category |
| **Present** | Table format: Concept \| Key idea \| Step-by-step \| Notes |
| **Follow** | List by category for easy step-by-step learning |
| **Collect** | All content without redundancy or omissions |

---

## 📂 Curriculum categories

*Follow in order 1 → 7 for the full path.*

| # | Category | Description |
|---|----------|-------------|
| 1️⃣ | **Founder Readiness & Mindset** | Purpose, failure reframing, design thinking, idea generation, entrepreneur mindset, founder development |
| 2️⃣ | **Opportunity Discovery & Validation** | Customer discovery, early adopters, validate-before-build, buyer motivation |
| 3️⃣ | **Business Model & Definition** | Business Model Canvas, Lean Canvas, value proposition, revenue streams |
| 4️⃣ | **MVP & Build–Measure–Learn** | MVP definition and types, B-M-L loop, hypothesis-driven experimentation |
| 5️⃣ | **Build & Launch** | Tech stack, infrastructure, legal, first customers |
| 6️⃣ | **Growth & Product–Market Fit** | PMF, iterate with data, retention, marketing, naming & branding |
| 7️⃣ | **Tools & Operations** | No-code, payments, auth, distribution, AI for operations |

---

## ▶️ How to run

```bash
npm install
npm run dev
```

Then open **http://localhost:3000**

<details>
<summary><strong>🔧 Build for production</strong></summary>

```bash
npm run build
npm start
```

</details>

---

## 🗺️ Routes

| Route | What you see |
|-------|----------------|
| **`/`** | Home — category list; start here and follow in order |
| **`/category/[id]`** | Single category — full concept table + step-by-step |
| **`/all`** | Full curriculum — all categories and concepts on one page |

---

## ✨ Features & functions

| Feature | Description |
|---------|-------------|
| **Category navigation** | Click any category card to open its table (Concept, Key idea, Steps, Notes) |
| **Full curriculum view** | One-page view of all 7 categories and every concept (no duplication) |
| **Step-by-step instructions** | Every concept has a clear action list you can follow in order |
| **Responsive layout** | Tables scroll horizontally on small screens; readable on mobile |
| **Static & fast** | No backend or login; curriculum lives in `src/data/curriculum.ts` |
| **Editable content** | Change or add concepts by editing one TypeScript file |

---

## 🛠 Tech

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Curriculum data:** `src/data/curriculum.ts` (easy to extend)

---

## 📚 Documentation

| Doc | Purpose |
|-----|---------|
| [**QUICKSTART**](docs/QUICKSTART.md) | Get running in under 2 minutes |
| [**TUTORIAL**](docs/TUTORIAL.md) | Step-by-step: using the app and following the curriculum |
| [**MANUAL**](docs/MANUAL.md) | Full user manual, editing content, troubleshooting |
| [**ADS**](docs/ADS.md) | Ad copy for Facebook, Instagram, Threads, Blogger, Naver, Tistory, WordPress, Newsletter, Email |
| [**VIDEO_TRANSCRIPT_SUMMARY**](docs/VIDEO_TRANSCRIPT_SUMMARY.md) | Full “How to do” summary from the Ralph Loop (랄프루프) video transcript |

---

## 📎 Content sources

Concepts are synthesized from:

- Berkeley Method of Entrepreneurship / Solopreneur programs
- Lean Startup (Eric Ries): Build–Measure–Learn, MVP
- Business Model Canvas (Osterwalder & Pigneur), Lean Canvas (Techstars)
- Customer Development (Steve Blank)
- Solo founder guides (2025–2026): validation, tech stack, distribution, AI

*No duplicate concepts; each idea appears once under the most relevant category.*

---

## 📹 Summary: How to do (from video transcripts)

*From the Ralph Loop (랄프루프) video: AI 코딩이 기대보다 안 되는 이유는 작업 방식이 채팅형이기 때문 → 반복 가능한 작업 시스템으로 바꾸는 방법.*

| Step | What to do |
|------|------------|
| 1 | **Good prompts as baseline:** Write clear **completion conditions** (more important than length). |
| 2 | **Repeat execution:** Run in loops; save results to **files and markdown history** (or tests). |
| 3 | **Trust file state:** Prefer file state over chat context as the result (context resets). |
| 4 | **Task size:** 20–60 min per task; commit or ping-pong at that unit. |
| 5 | **No tests?** e.g. 3 consecutive failures → redefine task, record reason, or give feedback. |
| 6 | **Cycle:** Plan once → build multiple times → check commit and test results; if wrong, Ctrl+C, adjust prompt/agent, restart. |

**In short:** Ralph Loop = 좋은 프롬프트 기준으로 반복 실행 → 결과를 파일·막기·히스토리에 남기고 테스트로 품질 강화. 사람은 코더에서 **운영자·품질 설계자**로; 완료 조건이 없으면 무한 반복만으로는 좋은 품질 나오지 않음. 도구: Awesome Agent, Ralph Claude Code, Codex how-to-ralph.  
→ Full summary: [docs/VIDEO_TRANSCRIPT_SUMMARY.md](docs/VIDEO_TRANSCRIPT_SUMMARY.md)

---

</td>
</tr>
</table>

---

<p align="right">
  <strong>
    <a href="https://github.com/henrynkoh/ai-ralphloop">→ Open on GitHub</a>
  </strong>
</p>
