import type { PositionRow } from "@/data/hadiths";

export default function PositionsTable({ positions }: { positions: PositionRow[] }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border"
      style={{ borderColor: "var(--border)", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ backgroundColor: "var(--forest)" }}>
              {["#", "Position in Prayer", "Arabic Term", "Key Sources"].map((col) => (
                <th key={col} className="text-left px-5 py-3.5 font-semibold text-xs uppercase tracking-wider" style={{ color: "#f0fdf4" }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {positions.map((row, i) => (
              <tr
                key={row.number}
                className="border-t transition-colors"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: i % 2 === 0 ? "var(--surface)" : "var(--surface-muted)",
                }}
              >
                <td className="px-5 py-4 align-top">
                  <span
                    className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold text-white"
                    style={{ backgroundColor: "var(--gold)" }}
                  >
                    {row.number}
                  </span>
                </td>
                <td className="px-5 py-4 font-medium align-top" style={{ color: "var(--text)" }}>
                  {row.position}
                </td>
                <td
                  className="rtl px-5 py-4 align-top"
                  dir="rtl"
                  style={{ color: "var(--forest-mid)", fontSize: "1rem", lineHeight: "2.2" }}
                >
                  {row.arabicTerm}
                </td>
                <td
                  className="px-5 py-4 font-mono text-xs align-top leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {row.sources}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
