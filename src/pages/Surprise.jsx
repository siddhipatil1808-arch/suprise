import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SurpriseCard from "../components/SurpriseCard";
import Confetti from "../components/Confetti";
import Fireworks from "../components/Fireworks";

export default function Surprise() {
  const navigate = useNavigate();

  return (
    <div className="page-container" style={{ overflow: "hidden" }}>
      {/* Heavy initial celebration on entering the final page */}
      <Confetti duration={4000} particleCount={120} spread={80} />
      <Fireworks duration={6000} active={true} />

      {/* Page Title */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "2.8rem",
          fontWeight: "700",
          color: "var(--text-main)",
          textAlign: "center",
          marginBottom: "10px",
          background: "linear-gradient(45deg, #FFD700, #FF69B4, #C8A2C8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        🎉 Happy Birthday Again, Bindook! 🎉
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1.05rem",
          color: "var(--text-muted)",
          textAlign: "center",
          maxWidth: "500px",
          marginBottom: "30px",
        }}
      >
        You've reached the final surprise box. Blow out the candles and make a beautiful wish for the year ahead! 💫🙏
      </motion.p>

      {/* Interactive Birthday Cake */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        style={{ width: "100%", marginBottom: "40px" }}
      >
        <SurpriseCard />
      </motion.div>

      {/* Navigate back Home */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ zIndex: 10, position: "relative" }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "14px 32px",
            fontSize: "1.05rem",
            fontWeight: "600",
            fontFamily: "var(--font-body)",
            background: "linear-gradient(45deg, var(--secondary), var(--primary))",
            color: "white",
            border: "none",
            borderRadius: "30px",
            boxShadow: "0 6px 20px rgba(200, 162, 200, 0.3)",
          }}
          className="btn-ripple"
        >
          Celebrate Again 🔄
        </button>
      </motion.div>
    </div>
  );
}
