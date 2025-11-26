// hooks/useHeroTracker.ts
import { useEffect, useRef, useState } from "react";

export default function useHeroTracker() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [isHeroVisible, setHeroVisible] = useState(true);
  const [heroBottomY, setHeroBottomY] = useState<number>(0);

  useEffect(() => {
    if (!heroRef.current) return;

    const el = heroRef.current;

    // IntersectionObserver to detect hero visibility
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // when ~20% of hero is visible consider it "in view"
    );

    obs.observe(el);

    // measure hero bottom in page coordinates
    function measure() {
      const rect = el.getBoundingClientRect();
      setHeroBottomY(window.scrollY + rect.bottom); // absolute Y of hero bottom
    }

    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    return () => {
      obs.disconnect();
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  return { heroRef, isHeroVisible, heroBottomY };
}
