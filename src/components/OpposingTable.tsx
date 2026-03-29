import type { OpposingRow } from "@/data/hadiths";

export default function OpposingTable({ rows }: { rows: OpposingRow[] }) {
  return (
    <div className="space-y-5">
      {/* Ibn Hajar conclusion callout */}
      <div
        className="rounded-2xl px-6 py-5 border"
        style={{
          backgroundColor: "var(--forest-surface)",
          borderColor: "var(--forest-border)",
        }}
      >
        <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--forest-mid)" }}>
          Conclusion of Hadith Scholars
        </p>
        <p className="text-sm leading-relaxed italic" style={{ color: "var(--text)" }}>
          &ldquo;Once it is proven that these narrations against Raf&apos; al-Yadain are inauthentic,
          the narrations affirming it remain strong with no authentic opposing evidence.&rdquo;
        </p>
        <p className="font-mono text-xs mt-2" style={{ color: "var(--text-muted)" }}>
          — Ibn Hajar al-Asqalani, Talkhis al-Habir, 1/221-223
        </p>
      </div>

      {/* Table */}
      <div
        className="rounded-2xl overflow-hidden border"
        style={{ borderColor: "var(--border)", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ backgroundColor: "var(--forest)" }}>
                {["Narrator / Narration", "Source", "Scholars Who Graded It Weak"].map((col) => (
                  <th key={col} className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider" style={{ color: "#f0fdf4" }}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.source}
                  className="border-t transition-colors"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: i % 2 === 0 ? "var(--surface)" : "var(--surface-muted)",
                  }}
                >
                  <td className="px-5 py-4 font-medium align-top" style={{ color: "var(--text)" }}>
                    <div className="flex items-start gap-2">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{ backgroundColor: "var(--daif-text)" }}
                      />
                      {row.narrator}
                    </div>
                  </td>
                  <td className="px-5 py-4 font-mono text-xs align-top whitespace-nowrap" style={{ color: "var(--text-muted)" }}>
                    {row.source}
                  </td>
                  <td className="px-5 py-4 leading-relaxed align-top" style={{ color: "var(--text)" }}>
                    {row.scholarsWhoWeakenedIt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
