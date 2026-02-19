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
    </main>
  );
}
