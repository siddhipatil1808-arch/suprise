import React from "react";
import { motion } from "framer-motion";
import LetterCard from "../components/LetterCard";

export default function Letter() {
  return (
    <div className="page-container">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "2.8rem",
          color: "var(--text-main)",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        💌 A Heartfelt Note 💌
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1rem",
          color: "var(--text-muted)",
          textAlign: "center",
          maxWidth: "500px",
          marginBottom: "30px",
        }}
      >
        For some people, words are the best gifts. Click the envelope below to reveal a special note written just for you.
      </motion.p>

      {/* Foldable Letter Card */}
      <LetterCard />
    </div>
  );
}
