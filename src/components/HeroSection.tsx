export default function HeroSection() {
  return (
    <header
      className="relative px-6 pt-20 pb-16 text-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0b1f12 0%, #0d2818 60%, #142a1c 100%)" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(180,83,9,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto">
        {/* Arabic title */}
        <p
          className="rtl mb-2 font-bold"
          dir="rtl"
          style={{ fontSize: "2.8rem", color: "#d97706", lineHeight: "1.6" }}
        >
          رَفْعُ الْيَدَيْن
        </p>

        {/* English title */}
        <h1
          className="font-bold tracking-tight mb-1"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#f5f5f4" }}
        >
          Raf&apos; al-Yadain
        </h1>

        {/* Subtitle */}
        <p style={{ color: "#a8a29e", fontSize: "1.05rem" }} className="mb-8">
          Raising the Hands in Prayer — A Comprehensive Hadith Reference
        </p>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(to right, transparent, #d97706)" }} />
          <span style={{ color: "#d97706", fontSize: "1.1rem" }}>❧</span>
          <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(to left, transparent, #d97706)" }} />
        </div>

        {/* Intro text */}
        <p
          className="leading-8 max-w-xl mx-auto mb-10"
          style={{ color: "#d6d3d1", fontSize: "0.95rem" }}
        >
          Narrated by{" "}
          <span style={{ color: "#fcd34d", fontWeight: 600 }}>more than 50 Companions</span>{" "}
          and recorded across every major Hadith collection — Sahih al-Bukhari, Sahih Muslim,
          the four Sunan, Muwatta Imam Malik, and Musnad Ahmad.
        </p>

        {/* Stats */}
        <div
          className="inline-grid grid-cols-4 rounded-2xl overflow-hidden border"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {[
            { value: "50+", label: "Companions" },
            { value: "14", label: "Hadiths" },
            { value: "9", label: "Sections" },
            { value: "4", label: "Non-Abrogation Proofs" },
          ].map((s) => (
            <div
              key={s.label}
              className="px-5 py-4 border-r last:border-r-0"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <p className="font-bold text-xl" style={{ color: "#d97706" }}>
                {s.value}
              </p>
              <p className="text-xs mt-0.5 leading-tight" style={{ color: "#78716c" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
