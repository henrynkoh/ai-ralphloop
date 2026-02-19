# Summary: How to do (from video transcripts)

*Based on the Ralph Loop (랄프루프) methodology video: AI 코딩이 기대보다 안 되는 이유는 모델이 멍청해서가 아니라 작업 방식이 아직 채팅형이기 때문.*

---

## What is Ralph Loop?

**One-line:** Good prompts as baseline → repeat execution → save results to files and markdown history (or tests) → improve via **repeatable process quality**, not just model response quality.

- **Not** a specific tool name; it’s a **methodology**.
- AI is a **repeatable work system**, not a chat partner.
- Upgrade by **workflow/process quality**, not by hoping the model answers better.

---

## Why the name Ralph Wiggum?

- From the Simpsons character: not a perfect genius; quirky and makes mistakes.
- Message: **Don’t expect perfection from the start** — improve by iterating and learning from mistakes (Ralph Loop = “Ralph” + loop).

---

## Why use Ralph Loop?

| Benefit | Meaning |
|--------|--------|
| **Context-reset resistance** | Trust **file state** as the result, not chat context (context can change with token overflow or task change). |
| **Task separation** | Break big goals into **task-sized units**; process in loops. |
| **Quality upgrade** | Verification (test, lint, build) improves; **workflow quality** matters more than raw model performance. |

---

## How to do (practical)

1. **Prompts:** **Completion conditions** matter more than prompt length. Write clear “done” criteria.
2. **Task size:** **20–60 min** per task (e.g. 30 or 60 min); use that unit for ping-pong or **commit**.
3. **No tests?** Define a rule, e.g. **3 consecutive failures** → redefine task, record reason, or give feedback.
4. **Trust file state** over chat context when judging results.
5. **Tools:** Awesome Agent (built-in Ralph Loop skill), Frank’s Ralph Claude Code (Claude Code), Codex: how-to-ralph repo — pick one and set up.
6. **Recommended cycle:** Plan once → build multiple times → check **commit and test results** each cycle. If direction is wrong, **Ctrl+C**, adjust prompt/agent, then restart.

---

## Role change

- You move from **coder** to **operator / quality designer**.
- Design prompts and loops so that **repeated runs** produce better quality; you don’t disappear, you design the process.

---

## Misconceptions

- **“Just loop forever and it’ll be perfect”** — No. Without a **clear end condition**, infinite loop won’t yield good quality. Good prompts are required to amplify quality.
- **“Context is enough”** — Prefer **file state** as the source of truth; context can change.

---

## In short (from video)

- **Ralph Loop:** Good prompt → repeat execution → file/markdown history (or tests) → improve by **process quality**.
- **Do:** Clear completion conditions; 20–60 min task units; commit/test cycle; trust file state; use one of the Ralph tools (Awesome Agent, Ralph Claude Code, how-to-ralph).
- **Remember:** You’re the operator/quality designer; design the loop so iteration improves the result.
