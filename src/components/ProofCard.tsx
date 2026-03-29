import type { Proof } from "@/data/hadiths";

const gradeConfig = {
  Sahih:         { bg: "var(--sahih-bg)",  text: "var(--sahih-text)",  border: "var(--sahih-border)" },
  "Hasan Sahih": { bg: "var(--hasan-bg)", text: "var(--hasan-text)", border: "var(--hasan-border)" },
  Hasan:         { bg: "var(--hasan-bg)", text: "var(--hasan-text)", border: "var(--hasan-border)" },
  "Da'if":       { bg: "var(--daif-bg)",  text: "var(--daif-text)",  border: "var(--daif-border)" },
};

export default function ProofCard({ proof }: { proof: Proof }) {
  return (
    <article
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      {/* Header — clean, not heavy */}
      <div
        className="flex items-center gap-4 px-6 py-4 border-b"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-muted)" }}
      >
        <div
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
          style={{ backgroundColor: "var(--gold)" }}
        >
          {proof.id}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--gold)" }}>
            Proof #{proof.id}
          </p>
          <h3 className="font-semibold leading-snug" style={{ color: "var(--text)", fontSize: "0.975rem" }}>
            {proof.title}
          </h3>
        </div>
      </div>

      <div className="px-6 pt-5 pb-6 space-y-5">
        {/* Context note */}
        <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-muted)" }}>
          {proof.context}
        </p>

        {/* Urdu narration */}
        {proof.urduText && (
          <div
            className="rtl px-5 py-4 rounded-xl border"
            dir="rtl"
            style={{
              backgroundColor: "var(--gold-surface)",
              borderColor: "var(--gold-border)",
              color: "var(--text)",
              fontSize: "1.05rem",
            }}
          >
            {proof.urduText}
          </div>
        )}

        {/* English narration */}
        {proof.englishText && (
          <p className="leading-8" style={{ color: "var(--text)", fontSize: "1.02rem" }}>
            <span style={{ color: "var(--text-subtle)", fontSize: "1.3rem" }}>&ldquo;</span>
            {proof.englishText}
            <span style={{ color: "var(--text-subtle)", fontSize: "1.3rem" }}>&rdquo;</span>
          </p>
        )}

        {/* References + grade */}
        <div className="flex flex-wrap items-center gap-2">
          {proof.references.map((ref) => (
            <span
              key={ref}
              className="text-xs font-mono px-3 py-1 rounded-lg font-semibold"
              style={{
                backgroundColor: "var(--gold-surface)",
                color: "var(--gold)",
                border: "1px solid var(--gold-border)",
              }}
            >
              {ref}
            </span>
          ))}
          {proof.grade && (() => {
            const g = gradeConfig[proof.grade];
            return (
              <span
                className="text-xs font-semibold px-3 py-1 rounded-lg"
                style={{ backgroundColor: g.bg, color: g.text, border: `1px solid ${g.border}` }}
              >
                {proof.grade}
              </span>
            );
          })()}
        </div>

        {/* Opposing hadith */}
        {proof.opposingHadith && (() => {
          const g = gradeConfig[proof.opposingHadith.grade];
          return (
            <div
              className="rounded-xl overflow-hidden border"
              style={{ borderColor: "var(--daif-border)" }}
            >
              <div
                className="flex items-center justify-between px-4 py-2.5 border-b"
                style={{ backgroundColor: "var(--daif-bg)", borderColor: "var(--daif-border)" }}
              >
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--daif-text)" }}>
                  Opposing Hadith (Cited by Opponents)
                </span>
                <span
                  className="text-xs font-semibold px-2.5 py-0.5 rounded-lg"
                  style={{ backgroundColor: g.bg, color: g.text, border: `1px solid ${g.border}` }}
                >
                  {proof.opposingHadith.grade}
                </span>
              </div>
              <div className="px-4 py-4 space-y-2.5" style={{ backgroundColor: "#fffafa" }}>
                <p className="text-sm italic leading-relaxed" style={{ color: "var(--text)" }}>
                  &ldquo;{proof.opposingHadith.text}&rdquo;
                </p>
                <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                  {proof.opposingHadith.reference}
                </p>
                <div
                  className="pt-2 mt-2 border-t text-sm leading-relaxed"
                  style={{ borderColor: "var(--daif-border)", color: "var(--text)" }}
                >
                  <span className="font-semibold" style={{ color: "var(--daif-text)" }}>
                    Scholarly Refutation:{" "}
                  </span>
                  {proof.opposingHadith.refutation}
                </div>
              </div>
            </div>
          );
        })()}

        {/* Conclusion */}
        <div
          className="rounded-xl px-5 py-4 border"
          style={{
            backgroundColor: "var(--forest-surface)",
            borderColor: "var(--forest-border)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--forest-mid)" }}>
            Conclusion
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
            {proof.result}
          </p>
        </div>
      </div>
    </article>
  );
}
