import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          padding: "40px",
          textAlign: "center",
          maxWidth: "480px",
          margin: "50px auto",
        }}
        className="glass-card"
      >
        <span style={{ fontSize: "5rem", display: "block", marginBottom: "20px" }}>🕵️‍♀️</span>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "2rem",
            color: "var(--text-main)",
            marginBottom: "10px",
          }}
        >
          Lost in Celebration?
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            lineHeight: "1.5",
            marginBottom: "30px",
          }}
        >
          We couldn't find this specific page. Let's go back to the home page to continue celebrating Bindook's birthday!
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 24px",
            fontSize: "0.95rem",
            fontWeight: "600",
            fontFamily: "var(--font-body)",
            background: "linear-gradient(45deg, var(--primary), var(--secondary))",
            color: "white",
            border: "none",
            borderRadius: "25px",
          }}
          className="btn-ripple"
        >
          Back to Home 🏠
        </button>
      </motion.div>
    </div>
  );
}
