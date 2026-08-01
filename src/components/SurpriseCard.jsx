import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "./Confetti";
import Fireworks from "./Fireworks";
import toast from "react-hot-toast";

export default function SurpriseCard() {
  // Candle states: true = lit, false = blown out
  const [candles, setCandles] = useState([true, true, true]);
  const [wishMade, setWishMade] = useState(false);
  const [triggerConfetti, setTriggerConfetti] = useState(false);

  const blowCandle = (index) => {
    if (!candles[index]) return; // already blown out
    
    const nextCandles = [...candles];
    nextCandles[index] = false;
    setCandles(nextCandles);
    
    toast("Pufff! Flame blown out! 💨", {
      icon: "🎈",
      duration: 1500,
      style: {
        background: "var(--glass-bg)",
        color: "var(--text-main)",
      }
    });
  };

  // Check if all candles are blown out
  const allBlownOut = candles.every((c) => !c);

  useEffect(() => {
    if (allBlownOut && !wishMade) {
      setWishMade(true);
      setTriggerConfetti(true);
      toast.success("💫 Make a wish, Bindook! Happy Birthday!", {
        duration: 6000,
        icon: "🌟",
      });
    }
  }, [allBlownOut, wishMade]);

  const resetCandles = () => {
    setCandles([true, true, true]);
    setWishMade(false);
    setTriggerConfetti(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {/* Conditionally trigger Celebratory Effects */}
      {triggerConfetti && (
        <>
          <Confetti duration={5000} particleCount={150} />
          <Fireworks duration={10000} active={true} />
        </>
      )}

      <div
        style={{
          padding: "30px",
          width: "100%",
          textAlign: "center",
          position: "relative",
        }}
        className="glass-card"
      >
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.8rem",
            color: "var(--text-main)",
            marginBottom: "10px",
          }}
        >
          {wishMade ? "✨ Happy Birthday, Bindook! ✨" : "🕯️ Blow out the candles!"}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            marginBottom: "30px",
          }}
        >
          {wishMade
            ? "Your wishes have been sent to the stars. 🌌💫"
            : "Click on each candle flame to blow it out and make your secret wish."}
        </p>

        {/* Large Interactive SVG Cake */}
        <div style={{ width: "300px", margin: "0 auto 30px auto" }}>
          <svg viewBox="0 0 300 300" width="100%" height="100%">
            {/* Cake Stand */}
            <ellipse cx="150" cy="250" rx="110" ry="12" fill="#E8D8E9" stroke="#C8A2C8" strokeWidth="2" />
            <rect x="140" y="250" width="20" height="25" fill="#C8A2C8" />
            <ellipse cx="150" cy="275" rx="55" ry="8" fill="#C8A2C8" />

            {/* Bottom Layer */}
            <path d="M 50 180 A 100 22 0 0 0 250 180 L 250 240 A 100 22 0 0 1 50 240 Z" fill="var(--primary)" />
            <ellipse cx="150" cy="180" rx="100" ry="22" fill="#FFC0CB" />
            {/* Drips */}
            <path d="M 50 180 Q 65 200 80 180 T 110 180 T 140 180 T 170 180 T 200 180 T 230 180 T 250 180" fill="none" stroke="#FF69B4" strokeWidth="6" strokeLinecap="round" />

            {/* Top Layer */}
            <path d="M 80 110 A 70 16 0 0 0 220 110 L 220 170 A 70 16 0 0 1 80 170 Z" fill="var(--secondary)" />
            <ellipse cx="150" cy="110" rx="70" ry="16" fill="#D2B4D2" />
            {/* Drips Top */}
            <path d="M 80 110 Q 95 128 110 110 T 140 110 T 170 110 T 200 110 T 220 110" fill="none" stroke="#b58eb5" strokeWidth="5" strokeLinecap="round" />

            {/* Strawberries / Creams on Top */}
            <circle cx="95" cy="108" r="8" fill="var(--accent)" />
            <circle cx="122" cy="113" r="8" fill="var(--primary)" />
            <circle cx="150" cy="115" r="8" fill="var(--secondary)" />
            <circle cx="178" cy="113" r="8" fill="var(--primary)" />
            <circle cx="205" cy="108" r="8" fill="var(--accent)" />

            {/* Three Candles */}
            {/* Candle 1 (Left) */}
            <g>
              <rect x="110" y="60" width="8" height="40" fill="#E0F7FA" stroke="#B2EBF2" strokeWidth="1" rx="2" />
              {candles[0] ? (
                <path
                  d="M 114 52 C 110 45 110 35 114 30 C 118 35 118 45 114 52 Z"
                  fill="var(--accent)"
                  className="flicker"
                  onClick={() => blowCandle(0)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <text x="110" y="50" fontSize="12" fill="#777" opacity="0.6">💨</text>
              )}
            </g>

            {/* Candle 2 (Center) */}
            <g>
              <rect x="146" y="50" width="8" height="50" fill="#FFF9C4" stroke="#FFF59D" strokeWidth="1" rx="2" />
              {candles[1] ? (
                <path
                  d="M 150 42 C 146 35 146 25 150 20 C 154 35 154 25 150 42 Z"
                  fill="var(--accent)"
                  className="flicker"
                  onClick={() => blowCandle(1)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <text x="146" y="40" fontSize="12" fill="#777" opacity="0.6">💨</text>
              )}
            </g>

            {/* Candle 3 (Right) */}
            <g>
              <rect x="182" y="60" width="8" height="40" fill="#F1F8E9" stroke="#DCEDC8" strokeWidth="1" rx="2" />
              {candles[2] ? (
                <path
                  d="M 186 52 C 182 45 182 35 186 30 C 190 45 190 35 186 52 Z"
                  fill="var(--accent)"
                  className="flicker"
                  onClick={() => blowCandle(2)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <text x="182" y="50" fontSize="12" fill="#777" opacity="0.6">💨</text>
              )}
            </g>
          </svg>
        </div>

        {/* Reset Button or Congratulations */}
        <AnimatePresence>
          {wishMade && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{ marginTop: "10px" }}
            >
              <button
                onClick={resetCandles}
                style={{
                  padding: "12px 24px",
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  background: "rgba(255, 255, 255, 0.3)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "25px",
                  color: "var(--text-main)",
                  cursor: "pointer",
                }}
                className="btn-ripple"
              >
                Light candles again 🕯️
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
