import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTER_TEXT =
  "Happiest birthday Bindook 🎂🎈 Bappa will bless u, be happy 🙏✨ See idk know tu mla miss karto ki ny but i miss u a lot 💛 and i wish kadhi tri aapn adhi sarkh bolu 🥺 and kadhi mhaji help havi ashel tr im there for uuuu 💫🤍";

export default function LetterCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "450px",
        position: "relative",
        margin: "20px auto 40px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* Sealed Envelope state */
          <motion.div
            key="envelope"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setIsOpen(true)}
            style={{
              width: "100%",
              maxWidth: "480px",
              height: "300px",
              background: "#FCE4EC",
              borderRadius: "12px",
              border: "2px solid #F8BBD0",
              boxShadow: "0 10px 30px rgba(74, 59, 78, 0.15)",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Triangular folds pattern inside the envelope background */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage:
                  "linear-gradient(225deg, transparent 50%, #FFF 50%), linear-gradient(135deg, transparent 50%, #FFF 50%)",
                backgroundSize: "50% 100%",
                backgroundPosition: "top left, top right",
                backgroundRepeat: "no-repeat",
                opacity: 0.4,
                zIndex: 1,
              }}
            />

            {/* Envelope Heart Seal */}
            <motion.div
              style={{
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                style={{
                  fontSize: "3.5rem",
                  color: "#FF69B4",
                  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
                }}
              >
                💝
              </div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "var(--text-main)",
                }}
              >
                Click to Open Letter
              </span>
            </motion.div>
          </motion.div>
        ) : (
          /* Opened Letter Card state */
          <motion.div
            key="letter"
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            style={{
              width: "100%",
              maxWidth: "500px",
              background: "#FFFDF0", // warm paper texture
              padding: "40px 30px",
              borderRadius: "15px",
              border: "1px solid #E6D2B5",
              boxShadow: "0 15px 40px rgba(74, 59, 78, 0.12)",
              position: "relative",
              minHeight: "360px",
              display: "flex",
              flexDirection: "column",
              backgroundImage: "radial-gradient(#E8D5C4 1px, transparent 1px)", // small dot pattern
              backgroundSize: "24px 24px",
            }}
          >
            {/* Red Lines of lined letter paper (subtle margin) */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "40px",
                width: "2px",
                height: "100%",
                backgroundColor: "rgba(255, 182, 193, 0.5)",
              }}
            />

            {/* Letter Header */}
            <h2
              style={{
                fontFamily: "var(--font-letter)",
                fontSize: "2rem",
                fontWeight: "700",
                color: "#E05A47",
                marginBottom: "24px",
                alignSelf: "flex-end",
                paddingRight: "10px",
              }}
            >
              Dear Bindook,
            </h2>

            {/* Handwritten content */}
            <p
              style={{
                fontFamily: "var(--font-letter)",
                fontSize: "1.65rem",
                color: "#3F3020",
                lineHeight: "1.7",
                textAlign: "left",
                textIndent: "40px",
                marginBottom: "30px",
                wordSpacing: "3px",
              }}
            >
              {LETTER_TEXT}
            </p>

            {/* Signature */}
            <p
              style={{
                fontFamily: "var(--font-letter)",
                fontSize: "1.8rem",
                fontWeight: "700",
                color: "#E05A47",
                alignSelf: "flex-end",
                marginTop: "auto",
                paddingRight: "20px",
              }}
            >
              With Love 💖
            </p>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "12px",
                right: "16px",
                background: "transparent",
                border: "none",
                fontSize: "0.95rem",
                fontFamily: "var(--font-body)",
                color: "var(--text-muted)",
                cursor: "pointer",
                padding: "4px 8px",
                borderRadius: "10px",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "rgba(0,0,0,0.05)")}
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
