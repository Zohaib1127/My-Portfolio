import { useEffect, useState } from "react";

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] || "");

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { 
          rootMargin: "-30% 0px -50% 0px", 
          threshold: 0.1 
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [JSON.stringify(sectionIds)]); // Ensures array value comparison rather than reference check

  return active;
}