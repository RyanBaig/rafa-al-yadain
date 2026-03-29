import type { ReferenceRow } from "@/data/hadiths";

const gradeConfig: Record<ReferenceRow["grade"], { bg: string; text: string; border: string }> = {
  Sahih:         { bg: "var(--sahih-bg)",  text: "var(--sahih-text)",  border: "var(--sahih-border)" },
  "Hasan Sahih": { bg: "var(--hasan-bg)", text: "var(--hasan-text)", border: "var(--hasan-border)" },
  Hasan:         { bg: "var(--hasan-bg)", text: "var(--hasan-text)", border: "var(--hasan-border)" },
  "Da'if":       { bg: "var(--daif-bg)",  text: "var(--daif-text)",  border: "var(--daif-border)" },
};

export default function ReferenceTable({ rows }: { rows: ReferenceRow[] }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border"
      style={{ borderColor: "var(--border)", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ backgroundColor: "var(--forest)" }}>
              {["#", "Narrator", "Collection", "Hadith No.", "Grade"].map((col) => (
                <th
                  key={col}
                  className="text-left px-4 py-3.5 font-semibold text-xs uppercase tracking-wider"
                  style={{ color: "#f0fdf4" }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const g = gradeConfig[row.grade];
              return (
                <tr
                  key={`${row.id}-${row.collection}`}
                  className="border-t transition-colors"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: i % 2 === 0 ? "var(--surface)" : "var(--surface-muted)",
                  }}
                >
                  <td className="px-4 py-3 font-mono text-xs align-middle" style={{ color: "var(--text-subtle)" }}>
                    {row.id}
                  </td>
                  <td className="px-4 py-3 font-medium align-middle" style={{ color: "var(--text)" }}>
                    {row.narrator}
                  </td>
                  <td className="px-4 py-3 align-middle whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
                    {row.collection}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs align-middle" style={{ color: "var(--text-muted)" }}>
                    {row.hadithNo}
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg"
                      style={{ backgroundColor: g.bg, color: g.text, border: `1px solid ${g.border}` }}
                    >
                      {row.grade}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
