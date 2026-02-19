import Link from "next/link";
import { curriculum } from "@/data/curriculum";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-stone-900 tracking-tight">
          Solo Entrepreneur Curriculum
        </h1>
        <p className="mt-2 text-stone-600 max-w-2xl">
          Key ideas and concepts for startup solo entrepreneurs, in table form
          and step-by-step. Follow by category for easy, ordered learning.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {curriculum.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            className="group block rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-amber-300 hover:shadow-md"
          >
            <span className="text-xs font-medium text-amber-700">
              Category {cat.order}
            </span>
            <h2 className="mt-1 text-lg font-semibold text-stone-900 group-hover:text-amber-800">
              {cat.title}
            </h2>
            <p className="mt-2 text-sm text-stone-600 line-clamp-2">
              {cat.description}
            </p>
            <p className="mt-3 text-sm font-medium text-amber-700 group-hover:underline">
              {cat.concepts.length} concepts →
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-stone-200 bg-amber-50/50 p-6">
        <h2 className="text-lg font-semibold text-stone-900">
          How to use this curriculum
        </h2>
        <ul className="mt-3 list-inside list-decimal space-y-2 text-sm text-stone-700">
          <li>Start with <strong>Founder Readiness & Mindset</strong> (Category 1).</li>
          <li>Move through categories in order; each builds on the previous.</li>
          <li>For each concept, follow the step-by-step instructions in the table.</li>
          <li>Use the <Link href="/all" className="font-medium text-amber-800 underline hover:no-underline">Full curriculum</Link> page to see all content in one place.</li>
        </ul>
      </div>

      <div className="mt-10 rounded-xl border border-stone-200 bg-stone-50 p-6" id="summary-how-to-do">
        <h2 className="text-lg font-semibold text-stone-900">
          Summary: How to do (from video transcripts)
        </h2>
        <p className="mt-2 text-sm text-stone-600">
          From the Ralph Loop (랄프루프) video: AI 코딩이 기대보다 안 되는 이유는 작업 방식이 채팅형이기 때문 → 반복 가능한 작업 시스템으로 바꾸는 방법.
        </p>
        <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-stone-700">
          <li><strong>Good prompts as baseline:</strong> Write clear completion conditions (more important than length).</li>
          <li><strong>Repeat execution:</strong> Run in loops; save results to files and markdown history (or tests).</li>
          <li><strong>Trust file state:</strong> Prefer file state over chat context as the result (context resets).</li>
          <li><strong>Task size:</strong> 20–60 min per task; commit or ping-pong at that unit.</li>
          <li><strong>No tests?</strong> e.g. 3 consecutive failures → redefine task, record reason, or give feedback.</li>
          <li><strong>Cycle:</strong> Plan once → build multiple times → check commit and test results; if wrong, Ctrl+C, adjust prompt/agent, restart.</li>
        </ol>
        <p className="mt-4 text-sm text-stone-600 italic">
          In short: Ralph Loop = 좋은 프롬프트 기준으로 반복 실행 → 결과를 파일·막기·히스토리에 남기고 테스트로 품질 강화. 사람은 코더에서 운영자·품질 설계자로; 완료 조건이 없으면 무한 반복만으로는 좋은 품질 나오지 않음. 도구: Awesome Agent, Ralph Claude Code, Codex how-to-ralph.
        </p>
      </div>
    </main>
  );
}
