import type { Section } from "@/data/hadiths";
import HadithCard from "./HadithCard";
import ProofCard from "./ProofCard";
import ScholarTable from "./ScholarTable";
import PositionsTable from "./PositionsTable";
import ReferenceTable from "./ReferenceTable";
import OpposingTable from "./OpposingTable";

const sectionNumbers: Record<string, number> = {
  "sahih-bukhari": 1,
  "sahih-muslim": 2,
  "four-sunan": 3,
  "muwatta-musnad": 4,
  "scholarly-consensus": 5,
  "authenticated-positions": 6,
  "opposing-narrations": 7,
  "hadith-reference": 8,
  "proofs-non-abrogation": 9,
};

export default function SectionBlock({ section }: { section: Section }) {
  const num = sectionNumbers[section.slug];

  return (
    <section id={section.slug} className="scroll-mt-6">
      {/* Section header */}
      <div className="flex items-start gap-4 mb-7">
        <div
          className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white mt-0.5"
          style={{ backgroundColor: "var(--forest-mid)" }}
        >
          {num}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-3">
            <h2
              className="font-bold tracking-tight"
              style={{ color: "var(--text)", fontSize: "1.3rem" }}
            >
              {section.title}
            </h2>
            {section.arabicTitle && (
              <span
                className="rtl font-semibold"
                dir="rtl"
                style={{ color: "var(--gold)", fontSize: "1.15rem", lineHeight: "1.8" }}
              >
                {section.arabicTitle}
              </span>
            )}
          </div>
          {section.description && (
            <p className="mt-1.5 text-sm leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
              {section.description}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      {section.type === "hadiths" && section.hadiths && (
        <div className="space-y-5">
          {section.hadiths.map((h) => <HadithCard key={h.id} hadith={h} />)}
        </div>
      )}

      {section.type === "proofs" && section.proofs && (
        <div className="space-y-6">
          {section.proofs.map((p) => <ProofCard key={p.id} proof={p} />)}
        </div>
      )}

      {section.type === "scholars" && section.scholars && (
        <ScholarTable scholars={section.scholars} />
      )}

      {section.type === "positions" && section.positions && (
        <PositionsTable positions={section.positions} />
      )}

      {section.type === "reference" && section.referenceTable && (
        <ReferenceTable rows={section.referenceTable} />
      )}

      {section.type === "opposing" && section.opposingNarrations && (
        <OpposingTable rows={section.opposingNarrations} />
      )}
    </section>
  );
}
