"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeInSection({
  children,
  delay = 0,
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("fade-section--visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { 
        threshold: 0, 
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="fade-section">
      {children}
    </div>
  );
}
