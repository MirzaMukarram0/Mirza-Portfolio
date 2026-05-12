"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["experience", "projects", "skills", "certifications"];

export default function RunningFooter() {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const observers = SECTIONS.map((id, i) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActivePage(i + 1);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <footer className="running-footer" aria-hidden="true">
      <span className="label-text">Mirza Mukarram · Portfolio 2026</span>
      {activePage > 0 && (
        <span className="label-text">
          Page {activePage} of {SECTIONS.length}
        </span>
      )}
      <span className="label-text">Islamabad, Pakistan</span>
    </footer>
  );
}
