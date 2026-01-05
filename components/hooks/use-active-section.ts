"use client";

import { useEffect, useState } from "react";

interface ActiveSectionOptions {
  rootMargin?: string;
  threshold?: number | number[];
}

export function useActiveSection(
  sectionIds: string[],
  options: ActiveSectionOptions = {},
) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: options.rootMargin ?? "-30% 0px -60% 0px",
        threshold: options.threshold ?? 0.1,
      },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, options.rootMargin, options.threshold]);

  return activeId;
}
