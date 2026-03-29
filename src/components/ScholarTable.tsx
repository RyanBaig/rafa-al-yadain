import type { ScholarRow } from "@/data/hadiths";

export default function ScholarTable({ scholars }: { scholars: ScholarRow[] }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border"
      style={{ borderColor: "var(--border)", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ backgroundColor: "var(--forest)" }}>
              {["Scholar", "Period", "Position / Statement"].map((col) => (
                <th key={col} className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider" style={{ color: "#f0fdf4" }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scholars.map((row, i) => (
              <tr
                key={row.scholar}
                className="border-t transition-colors"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: i % 2 === 0 ? "var(--surface)" : "var(--surface-muted)",
                }}
              >
                <td
                  className="px-5 py-4 font-semibold align-top whitespace-nowrap"
                  style={{ color: "var(--forest-mid)" }}
                >
                  {row.scholar}
                </td>
                <td
                  className="px-5 py-4 font-mono text-xs align-top whitespace-nowrap"
                  style={{ color: "var(--text-muted)" }}
                >
                  {row.dates}
                </td>
                <td
                  className="px-5 py-4 leading-relaxed align-top"
                  style={{ color: "var(--text)" }}
                >
                  {row.statement}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
