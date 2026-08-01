import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Confetti({ duration = 3000, particleCount = 100, spread = 70 }) {
  useEffect(() => {
    // Fire immediate burst
    confetti({
      particleCount,
      spread,
      origin: { y: 0.6 },
      colors: ["#FFB6C1", "#C8A2C8", "#FFD700", "#FF69B4", "#87CEFA"],
    });

    // Run active celebration for 'duration'
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#FFB6C1", "#C8A2C8", "#FFD700"],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#FFB6C1", "#C8A2C8", "#FFD700"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    if (duration > 0) {
      frame();
    }
  }, [duration, particleCount, spread]);

  return null;
}
