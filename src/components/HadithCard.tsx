import type { Hadith } from "@/data/hadiths";

const gradeConfig: Record<Hadith["grade"], { bg: string; text: string; border: string; label: string }> = {
  Sahih:        { bg: "var(--sahih-bg)",  text: "var(--sahih-text)",  border: "var(--sahih-border)",  label: "Sahih ✓" },
  "Hasan Sahih":{ bg: "var(--hasan-bg)", text: "var(--hasan-text)", border: "var(--hasan-border)", label: "Hasan Sahih" },
  Hasan:        { bg: "var(--hasan-bg)", text: "var(--hasan-text)", border: "var(--hasan-border)", label: "Hasan" },
  "Da'if":      { bg: "var(--daif-bg)",  text: "var(--daif-text)",  border: "var(--daif-border)",  label: "Da'if" },
};

export default function HadithCard({ hadith }: { hadith: Hadith }) {
  const grade = gradeConfig[hadith.grade];

  return (
    <article
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 0 0 0 transparent",
      }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ backgroundColor: "var(--gold-mid)" }} />

      {/* Header row */}
      <div className="flex items-start justify-between gap-4 px-6 pt-5 pb-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-1" style={{ color: "var(--text-subtle)" }}>
            {hadith.collection}
          </p>
          <h3 className="font-semibold leading-snug" style={{ color: "var(--text)", fontSize: "1rem" }}>
            {hadith.narrator}
          </h3>
        </div>

        <div className="flex items-center gap-2 shrink-0 pt-1">
          {hadith.hadithNumber && (
            <span
              className="text-xs font-mono px-2.5 py-1 rounded-lg"
              style={{ backgroundColor: "var(--gold-surface)", color: "var(--gold)", border: "1px solid var(--gold-border)", fontWeight: 600 }}
            >
              #{hadith.hadithNumber}
            </span>
          )}
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-lg"
            style={{ backgroundColor: grade.bg, color: grade.text, border: `1px solid ${grade.border}` }}
          >
            {grade.label}
          </span>
        </div>
      </div>

      {/* Hadith text */}
      <div className="px-6 pb-4">
        <p
          className="leading-8"
          style={{ color: "var(--text)", fontSize: "1.05rem", fontStyle: "normal" }}
        >
          <span style={{ color: "var(--text-subtle)", fontSize: "1.4rem", lineHeight: 1 }}>&ldquo;</span>
          {hadith.englishText}
          <span style={{ color: "var(--text-subtle)", fontSize: "1.4rem", lineHeight: 1 }}>&rdquo;</span>
        </p>
      </div>

      {/* Reference */}
      <div className="px-6 pb-4">
        <p
          className="font-mono text-xs leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {hadith.reference}
        </p>
      </div>

      {/* Commentary */}
      <div
        className="mx-6 mb-5 px-4 py-3 rounded-xl text-sm leading-relaxed"
        style={{
          backgroundColor: "var(--surface-muted)",
          borderLeft: "3px solid var(--gold-mid)",
          color: "var(--text-muted)",
        }}
      >
        {hadith.commentary}
      </div>
    </article>
  );
}
