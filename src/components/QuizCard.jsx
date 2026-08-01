import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa";

export default function QuizCard({
  question,
  answer,
  onChange,
  onNext,
  onPrev,
  currentIndex,
  totalQuestions,
  onSubmit,
}) {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalQuestions - 1;

  // Calculate progress percentage (0 to 100)
  const progressPercent = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {/* Progress Bar */}
      <div
        style={{
          width: "100%",
          height: "8px",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: "4px",
          marginBottom: "30px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.3 }}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, var(--primary), var(--secondary))",
            borderRadius: "4px",
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="glass-card"
        >
          {/* Question Indicator */}
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              marginBottom: "16px",
            }}
          >
            Question {currentIndex + 1} of {totalQuestions}
          </div>

          {/* Emoji and Question Text */}
          <div
            style={{
              fontSize: "3.5rem",
              marginBottom: "15px",
            }}
          >
            {question.emoji}
          </div>

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              color: "var(--text-main)",
              textAlign: "center",
              marginBottom: "24px",
              lineHeight: "1.4",
            }}
          >
            {question.question}
          </h2>

          {/* Answer Textarea */}
          <textarea
            value={answer || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={question.placeholder}
            rows={5}
            style={{
              width: "100%",
              padding: "16px",
              fontSize: "1rem",
              fontFamily: "var(--font-body)",
              color: "var(--text-main)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              border: "1px solid var(--glass-border)",
              borderRadius: "15px",
              outline: "none",
              resize: "none",
              boxShadow: "inset 0 2px 10px rgba(200, 162, 200, 0.05)",
              transition: "all 0.3s",
              marginBottom: "30px",
            }}
            onFocus={(e) => {
              e.target.style.border = "1px solid var(--primary)";
              e.target.style.boxShadow = "inset 0 2px 10px rgba(200, 162, 200, 0.05), 0 0 10px rgba(255, 182, 193, 0.3)";
            }}
            onBlur={(e) => {
              e.target.style.border = "1px solid var(--glass-border)";
              e.target.style.boxShadow = "inset 0 2px 10px rgba(200, 162, 200, 0.05)";
            }}
          />

          {/* Navigation Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "20px",
            }}
          >
            {/* Prev Button */}
            <button
              onClick={onPrev}
              disabled={isFirst}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 20px",
                fontSize: "0.95rem",
                fontWeight: "600",
                fontFamily: "var(--font-body)",
                background: "rgba(255, 255, 255, 0.3)",
                color: isFirst ? "rgba(0,0,0,0.2)" : "var(--text-main)",
                border: "1px solid var(--glass-border)",
                borderRadius: "25px",
                cursor: isFirst ? "not-allowed" : "pointer",
                transition: "all 0.3s",
                visibility: isFirst ? "hidden" : "visible",
              }}
              className="btn-ripple"
            >
              <FaChevronLeft size={12} /> Back
            </button>

            {/* Next or Submit Button */}
            {isLast ? (
              <button
                onClick={onSubmit}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  fontFamily: "var(--font-body)",
                  background: "linear-gradient(45deg, var(--primary), var(--secondary))",
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(255, 182, 193, 0.4)",
                }}
                className="btn-ripple"
              >
                Submit Answers <FaHeart size={12} />
              </button>
            ) : (
              <button
                onClick={onNext}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  fontFamily: "var(--font-body)",
                  background: "var(--secondary)",
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  cursor: "pointer",
                }}
                className="btn-ripple"
              >
                Next <FaChevronRight size={12} />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
