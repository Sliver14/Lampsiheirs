// hooks/useScrollDirection.ts
import { useEffect, useState } from "react";

export default function useScrollDirection(throttleMs = 50) {
  const [direction, setDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      setTimeout(() => {
        const y = window.scrollY;
        if (y > lastY) setDirection("down");
        else if (y < lastY) setDirection("up");
        lastY = y;
        ticking = false;
      }, throttleMs);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [throttleMs]);

  return direction;
}
