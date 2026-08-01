import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Fireworks({ active = true, duration = 8000 }) {
  useEffect(() => {
    if (!active) return;

    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, animate a bit higher than they would normally look
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: randomInRange(0.2, 0.4) },
        colors: ["#FFD700", "#FFB6C1", "#FF69B4"],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: randomInRange(0.2, 0.4) },
        colors: ["#C8A2C8", "#87CEFA", "#FFD700"],
      });
    }, 450);

    return () => clearInterval(interval);
  }, [active, duration]);

  return null;
}
