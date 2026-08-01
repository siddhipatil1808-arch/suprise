import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #FFF0F2 0%, #F6EAF7 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div
        style={{
          fontSize: "80px",
          marginBottom: "20px",
          display: "inline-block",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🎂
      </motion.div>

      <motion.h1
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "2.2rem",
          color: "var(--text-main)",
          textAlign: "center",
          marginBottom: "10px",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Bindook's Special Day ✨
      </motion.h1>

      <motion.p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1rem",
          color: "var(--text-muted)",
          textAlign: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Unwrapping a box of beautiful memories... 🎁💛
      </motion.p>

      {/* Pulsing loading dots */}
      <div style={{ display: "flex", gap: "8px", marginTop: "30px" }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "var(--primary)",
            }}
            animate={{
              scale: [0.6, 1, 0.6],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
