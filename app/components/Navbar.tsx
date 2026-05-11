"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Skills", target: "skills" },
  { label: "Certifications", target: "certifications" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    NAV_ITEMS.forEach(({ target }) => {
      const el = document.getElementById(target);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        <span className="navbar__left">Portfolio, 2026</span>
        <div className="navbar__links">
          {NAV_ITEMS.map(({ label, target }) => (
            <button
              key={target}
              className={`navbar__link ${
                activeSection === target ? "navbar__link--active" : ""
              }`}
              onClick={() => scrollTo(target)}
              aria-label={`Navigate to ${label} section`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="navbar__right">Islamabad</span>
      </div>
    </nav>
  );
}
