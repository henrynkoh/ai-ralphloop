import Link from "next/link";
import { curriculum } from "@/data/curriculum";

/**
 * Full curriculum: all categories and concepts in one place,
 * no redundancy, for easy follow-up and reference.
 */
export default function AllCurriculumPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm font-medium text-amber-700 hover:underline"
        >
          ← Categories
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-stone-900">
          Full curriculum (all content)
        </h1>
        <p className="mt-1 text-stone-600">
          All key concepts by category, with step-by-step instructions. No
          redundancy; use for reference or linear follow-through.
        </p>
      </div>

      <div className="space-y-12">
        {curriculum.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <div className="mb-4 flex items-baseline gap-2">
              <span className="text-xs font-medium text-amber-700">
                Category {cat.order}
              </span>
              <h2 className="text-xl font-semibold text-stone-900">
                {cat.title}
              </h2>
              <Link
                href={`/category/${cat.id}`}
                className="text-xs font-medium text-amber-700 hover:underline"
              >
                View table
              </Link>
            </div>
            <p className="mb-4 text-sm text-stone-600">{cat.description}</p>

            <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <th className="px-4 py-3 font-semibold text-stone-900 w-[18%]">
                      Concept
                    </th>
                    <th className="px-4 py-3 font-semibold text-stone-900 w-[28%]">
                      Key idea
                    </th>
                    <th className="px-4 py-3 font-semibold text-stone-900 w-[38%]">
                      Step-by-step instructions
                    </th>
                    <th className="px-4 py-3 font-semibold text-stone-900 w-[16%]">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cat.concepts.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-stone-100 last:border-b-0 hover:bg-amber-50/30"
                    >
                      <td className="px-4 py-3 font-medium text-stone-800 align-top">
                        {row.concept}
                      </td>
                      <td className="px-4 py-3 text-stone-700 align-top">
                        {row.keyIdea}
                      </td>
                      <td className="px-4 py-3 text-stone-700 align-top">
                        <ol className="list-decimal list-inside space-y-1">
                          {row.steps.map((step, j) => (
                            <li key={j}>{step}</li>
                          ))}
                        </ol>
                      </td>
                      <td className="px-4 py-3 text-stone-500 text-xs align-top">
                        {row.notes ?? "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 rounded-xl border border-stone-200 bg-stone-50 p-6" id="summary-how-to-do">
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
      </section>
    </main>
  );
}
