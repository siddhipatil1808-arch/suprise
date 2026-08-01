import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
        position: "relative",
        zIndex: 5,
        padding: "20px 0",
      }}
    >
      {/* Decorative Floating Balloons (Left and Right) */}
      <div style={{ position: "absolute", left: "-5vw", top: "50px", pointerEvents: "none" }} className="float-slow">
        <svg width="120" height="240" viewBox="0 0 100 200">
          <ellipse cx="50" cy="60" rx="35" ry="45" fill="var(--primary)" opacity="0.85" />
          <path d="M 50 105 L 50 180" stroke="rgba(0,0,0,0.15)" strokeWidth="2" fill="none" />
          <polygon points="46,105 54,105 50,98" fill="var(--primary)" />
        </svg>
      </div>
      <div style={{ position: "absolute", right: "-5vw", top: "150px", pointerEvents: "none" }} className="float-medium">
        <svg width="100" height="200" viewBox="0 0 100 200">
          <ellipse cx="50" cy="60" rx="30" ry="40" fill="var(--secondary)" opacity="0.85" />
          <path d="M 50 100 L 50 170" stroke="rgba(0,0,0,0.15)" strokeWidth="2" fill="none" />
          <polygon points="47,100 53,100 50,94" fill="var(--secondary)" />
        </svg>
      </div>

      {/* Main Greeting */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "3.2rem",
          fontWeight: "700",
          color: "var(--text-main)",
          lineHeight: "1.2",
          marginBottom: "10px",
          background: "linear-gradient(45deg, #FF69B4, #C8A2C8, #FFD700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Happy Birthday Bindook! 🎂🎉
      </motion.h1>

      {/* Sub-heading / welcome */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1.1rem",
          color: "var(--text-muted)",
          maxWidth: "600px",
          margin: "0 auto 20px auto",
          lineHeight: "1.6",
        }}
      >
        Welcome to your very own digital birthday package! Filled with memories, tests, notes, and a sweet surprise designed just for you. 🌸💛
      </motion.p>

      {/* SVG Birthday Cake (Interactive & Animated) */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        style={{
          width: "280px",
          margin: "20px 0",
          cursor: "pointer",
        }}
        whileHover={{ scale: 1.05 }}
      >
        <svg viewBox="0 0 300 300" width="100%" height="100%">
          {/* Cake Stand */}
          <ellipse cx="150" cy="250" rx="100" ry="12" fill="#E8D8E9" stroke="#C8A2C8" strokeWidth="2" />
          <rect x="140" y="250" width="20" height="25" fill="#C8A2C8" />
          <ellipse cx="150" cy="275" rx="50" ry="8" fill="#C8A2C8" />

          {/* Bottom Cake Layer */}
          <path d="M 60 190 A 90 20 0 0 0 240 190 L 240 240 A 90 20 0 0 1 60 240 Z" fill="var(--primary)" />
          <ellipse cx="150" cy="190" rx="90" ry="20" fill="#FFC0CB" />
          {/* Drips Bottom Layer */}
          <path d="M 60 190 Q 75 210 90 190 T 120 190 T 150 190 T 180 190 T 210 190 T 240 190" fill="none" stroke="#FF69B4" strokeWidth="6" strokeLinecap="round" />

          {/* Middle Cake Layer */}
          <path d="M 80 130 A 70 15 0 0 0 220 130 L 220 180 A 70 15 0 0 1 80 180 Z" fill="var(--secondary)" />
          <ellipse cx="150" cy="130" rx="70" ry="15" fill="#D2B4D2" />
          {/* Middle Layer Details */}
          <path d="M 80 130 Q 95 145 110 130 T 140 130 T 170 130 T 200 130 T 220 130" fill="none" stroke="#b58eb5" strokeWidth="5" strokeLinecap="round" />

          {/* Top Cake Layer */}
          <path d="M 100 80 A 50 12 0 0 0 200 80 L 200 120 A 50 12 0 0 1 100 120 Z" fill="#FFE4E1" />
          <ellipse cx="150" cy="80" rx="50" ry="12" fill="#FFF0F5" />
          {/* Frosting / Creams */}
          <circle cx="115" cy="80" r="7" fill="var(--accent)" />
          <circle cx="132" cy="83" r="7" fill="var(--primary)" />
          <circle cx="150" cy="84" r="7" fill="var(--secondary)" />
          <circle cx="168" cy="83" r="7" fill="var(--primary)" />
          <circle cx="185" cy="80" r="7" fill="var(--accent)" />

          {/* Candle */}
          <rect x="146" y="30" width="8" height="40" fill="#FFF" stroke="#C8A2C8" strokeWidth="1" rx="2" />
          {/* Candle stripes */}
          <path d="M 146 60 L 154 52 M 146 50 L 154 42 M 146 40 L 154 32" stroke="var(--primary)" strokeWidth="2" />
          {/* Wick */}
          <line x1="150" y1="30" x2="150" y2="22" stroke="#333" strokeWidth="2" />
          
          {/* Candle Flame */}
          <path d="M 150 22 C 145 15 145 5 150 0 C 155 5 155 15 150 22 Z" fill="var(--accent)" className="flicker" />
        </svg>
      </motion.div>
      <style>{`
        .flicker {
          animation: flameFlicker 1s infinite alternate ease-in-out;
          transform-origin: center bottom;
        }
        @keyframes flameFlicker {
          0% { transform: scale(1) rotate(-2deg); fill: #FFD700; filter: drop-shadow(0 0 3px #FFD700); }
          50% { transform: scale(1.1) rotate(3deg); fill: #FF8C00; filter: drop-shadow(0 0 6px #FF8C00); }
          100% { transform: scale(0.95) rotate(-1deg); fill: #FF4500; filter: drop-shadow(0 0 2px #FF4500); }
        }
      `}</style>

      {/* Countdown Timer */}
      <Countdown />

      {/* Navigation CTA Buttons */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginTop: "15px" }}>
        <button
          onClick={() => navigate("/quiz")}
          style={{
            padding: "14px 28px",
            fontSize: "1rem",
            fontWeight: "600",
            fontFamily: "var(--font-body)",
            background: "linear-gradient(45deg, var(--primary), var(--secondary))",
            color: "white",
            border: "none",
            borderRadius: "30px",
            outline: "none",
          }}
          className="btn-ripple"
        >
          Start Celebration 🎉
        </button>

        <button
          onClick={() => navigate("/memories")}
          style={{
            padding: "14px 28px",
            fontSize: "1rem",
            fontWeight: "600",
            fontFamily: "var(--font-body)",
            background: "var(--glass-bg)",
            color: "var(--text-main)",
            border: "1px solid var(--glass-border)",
            borderRadius: "30px",
            outline: "none",
          }}
          className="btn-ripple"
        >
          Explore Memories 📸
        </button>
      </div>
    </div>
  );
}
