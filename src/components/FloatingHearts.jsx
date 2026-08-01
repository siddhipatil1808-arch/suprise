import React, { useEffect, useState } from "react";

const particleTypes = ["❤️", "✨", "🎈", "🌸", "💖", "⭐", "💮", "💛"];

export default function FloatingHearts() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate a fixed set of particles with random properties
    const newParticles = Array.from({ length: 30 }).map((_, index) => {
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      const size = Math.floor(Math.random() * 24) + 12; // 12px to 36px
      const left = Math.random() * 100; // 0% to 100%
      const duration = Math.random() * 12 + 10; // 10s to 22s
      const delay = Math.random() * -20; // negative delay so they start scattered immediately
      const opacity = Math.random() * 0.4 + 0.3; // 0.3 to 0.7 opacity

      return {
        id: index,
        type,
        style: {
          position: "absolute",
          bottom: "-50px",
          left: `${left}%`,
          fontSize: `${size}px`,
          animationName: "floatParticle",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDelay: `${delay}s`,
          opacity: opacity,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        },
      };
    });

    setParticles(newParticles);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Injecting keyframe styles dynamically */}
      <style>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
          }
          50% {
            transform: translateY(-50vh) scale(1.1) rotate(180deg);
          }
          100% {
            transform: translateY(-110vh) scale(1) rotate(360deg);
          }
        }
      `}</style>
      {particles.map((p) => (
        <span key={p.id} style={p.style}>
          {p.type}
        </span>
      ))}
    </div>
  );
}
