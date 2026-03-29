"use client";

import { useEffect, useRef, useState } from "react";
import type { Section } from "@/data/hadiths";

interface SidebarProps {
  sections: Section[];
}

export default function Sidebar({ sections }: SidebarProps) {
  const [activeSlug, setActiveSlug] = useState<string>(sections[0]?.slug ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSlug(entry.target.id);
          break;
        }
      }
    };
    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-10% 0px -75% 0px",
      threshold: 0,
    });
    sections.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [sections]);

  const handleNavClick = (slug: string) => {
    setActiveSlug(slug);
    setMobileOpen(false);
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const NavItems = ({ onClose }: { onClose?: () => void }) => (
    <nav className="space-y-0.5">
      {sections.map((section, i) => {
        const isActive = activeSlug === section.slug;
        return (
          <button
            key={section.slug}
            onClick={() => { handleNavClick(section.slug); onClose?.(); }}
            className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 cursor-pointer group"
            style={{
              backgroundColor: isActive ? "var(--gold-surface)" : "transparent",
              color: isActive ? "var(--text)" : "var(--text-muted)",
              fontWeight: isActive ? "600" : "400",
            }}
          >
            <span
              className="shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold transition-colors"
              style={{
                backgroundColor: isActive ? "var(--gold)" : "var(--border)",
                color: isActive ? "#fff" : "var(--text-subtle)",
              }}
            >
              {i + 1}
            </span>
            <span className="leading-snug text-[0.82rem]">{section.title}</span>
          </button>
        );
      })}
    </nav>
  );

  const activeTitle = sections.find((s) => s.slug === activeSlug)?.title ?? "Contents";

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col w-56 shrink-0 sticky top-0 h-screen overflow-y-auto py-8 px-3 border-r"
        style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
      >
        <p
          className="text-xs font-bold uppercase tracking-[0.15em] px-3 mb-4"
          style={{ color: "var(--text-subtle)" }}
        >
          Contents
        </p>
        <NavItems />
      </aside>

      {/* Mobile sticky bar */}
      <div
        className="lg:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3 border-b"
        style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: "var(--gold)" }}
          />
          <span className="text-sm font-semibold truncate" style={{ color: "var(--text)" }}>
            {activeTitle}
          </span>
        </div>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="p-1.5 rounded-lg transition-colors"
          style={{ color: "var(--text-muted)" }}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex" onClick={() => setMobileOpen(false)}>
          <div
            className="w-72 h-full overflow-y-auto py-8 px-3 shadow-2xl border-r"
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <p
              className="text-xs font-bold uppercase tracking-[0.15em] px-3 mb-4"
              style={{ color: "var(--text-subtle)" }}
            >
              Contents
            </p>
            <NavItems onClose={() => setMobileOpen(false)} />
          </div>
          <div className="flex-1 bg-black/30 backdrop-blur-sm" />
        </div>
      )}
    </>
  );
}
