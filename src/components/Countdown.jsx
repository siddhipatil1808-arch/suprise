import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isBirthday: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      
      // Target: August 5th
      let targetDate = new Date(`August 5, ${currentYear} 00:00:00`);
      
      // If it's already past August 5th of this year, target next year's August 5th
      if (now > targetDate) {
        // Wait, check if today is August 5th. If today is August 5th, show birthday text!
        const isAugust5th = now.getMonth() === 7 && now.getDate() === 5; // 7 = August (0-indexed)
        if (isAugust5th) {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isBirthday: true });
          return;
        }
        targetDate = new Date(`August 5, ${currentYear + 1} 00:00:00`);
      }

      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isBirthday: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds, isBirthday: false });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  if (timeLeft.isBirthday) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "2.5rem",
          color: "var(--accent)",
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(10px)",
          padding: "20px 40px",
          borderRadius: "20px",
          border: "2px dashed var(--primary)",
          textAlign: "center",
          boxShadow: "var(--glass-shadow)",
          margin: "30px 0"
        }}
      >
        🎉 The celebration is TODAY! 🎂✨
      </motion.div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "30px 0",
        position: "relative",
        zIndex: 5
      }}
    >
      {timeBlocks.map((block, idx) => (
        <motion.div
          key={block.label}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: idx * 0.1, type: "spring", stiffness: 120 }}
          style={{
            minWidth: "90px",
            padding: "16px",
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "16px",
            boxShadow: "var(--glass-shadow)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "var(--text-main)",
              lineHeight: "1",
              marginBottom: "8px"
            }}
          >
            {block.value.toString().padStart(2, "0")}
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "var(--text-muted)"
            }}
          >
            {block.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
