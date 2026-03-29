import { sections } from "@/data/hadiths";
import HeroSection from "@/components/HeroSection";
import SectionBlock from "@/components/SectionBlock";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <HeroSection />

      <div className="flex flex-1 flex-col lg:flex-row">
        <Sidebar sections={sections} />

        <main className="flex-1 min-w-0 px-5 sm:px-8 py-10 space-y-16">
          {sections.map((section) => (
            <SectionBlock key={section.id} section={section} />
          ))}

          {/* Footer */}
          <footer className="border-t pt-8 pb-4 text-xs leading-relaxed" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
            <p className="mb-2">
              This document compiles narrations from the six canonical Hadith collections (Kutub
              al-Sittah) and other major sources. Authenticity gradings are based on the unanimous
              or majority opinion of classical Hadith scholars including Imam al-Bukhari, Imam
              Muslim, Imam Ahmad, Imam al-Shafi&apos;i, Ibn Hajar al-Asqalani, Imam al-Nawawi,
              al-Hafidh al-Dhahabi, and others.
            </p>
            <p
              className="rtl text-sm"
              dir="rtl"
              style={{ color: "var(--gold-mid)", lineHeight: "2.2" }}
            >
              وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
