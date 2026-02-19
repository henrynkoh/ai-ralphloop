import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, getCategoryIds } from "@/data/curriculum";

export async function generateStaticParams() {
  return getCategoryIds().map((id) => ({ id }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = getCategory(id);
  if (!category) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm font-medium text-amber-700 hover:underline"
        >
          ← All categories
        </Link>
        <span className="text-xs font-medium text-amber-700 ml-2">
          Category {category.order}
        </span>
        <h1 className="mt-2 text-2xl font-bold text-stone-900">
          {category.title}
        </h1>
        <p className="mt-1 text-stone-600">{category.description}</p>
      </div>

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
            {category.concepts.map((row, i) => (
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

      <div className="mt-8 flex gap-4">
        <Link
          href="/all"
          className="text-sm font-medium text-amber-700 hover:underline"
        >
          View full curriculum
        </Link>
      </div>
    </main>
  );
}
