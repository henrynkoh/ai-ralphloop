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
    </main>
  );
}
