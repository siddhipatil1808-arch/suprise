import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    day: "9th Standard 📚",
    title: "Our First Meeting 🤝",
    description:
      "Aapli first meeting 9th standard chya classes madhe zali. Tevha fakta ek normal introduction hota, pan konala mahit hota ki hi choti suruvat itka special bond madhe convert hoil. ❤️",
    emoji: "🌱"
  },
  {
    day: "Early Morning Walk 🌅",
    title: "Our First Photo 📸",
    description:
      "Aapla first photo early morning walk la jatana kadhla hota. Morning chi fresh hawa, mast vibes ani tya eka photone ek beautiful memory create keli ji aaj pan smile dete. ✨",
    emoji: "📸"
  },
  {
    day: "Unlimited Laughter 😂",
    title: "Our Funniest Moments 🤣",
    description:
      "Aaplya funny moments tar count pan nahi karta yenar! Ekmekanna random roast karna, vinakaran hasna, weird jokes, ani nonstop bakbak... hech moments aaj pan athavle ki automatically hasi yete. 😂💛",
    emoji: "🤣"
  },
  {
    day: "2nd May 💛",
    title: "One of My Favourite Days 🌸",
    description:
      "2nd May... Ha divas majhya sathi khup special aahe. Tya divshi mi purna divas tujhya sobat spend kela. Kahi extraordinary nahi hota, pan tu sobat aslyamule toh divas khup beautiful ani unforgettable banla. He nehmich majhya favourite memories madhla ek rahil. 🤍",
    emoji: "🤍"
  },
  {
    day: "5th August 🎂",
    title: "Happy Birthday, Bindook! 🎉",
    description:
      "Aajcha divas fakta tujha aahe! 🥹❤️ Wish karte ki tu nehmich happy rahavas, khup successful hovas ani tujhe sagle dreams complete hoave. Bappa tujhyavar nehmich krupa thevtil. Thank you for being a part of my life. Happy Birthday once again! 🎂✨",
    emoji: "🎉"
  }
];

export default function Memories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

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
          marginBottom: "10px"
        }}
      >
        ✨ Our Beautiful Memories 💛
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
          marginBottom: "50px"
        }}
      >
       Every memory with you is a page in a story I'll always cherish. Some moments made us laugh, some made us smile, but every single one became a beautiful part of our journey together. 💛.
      </motion.p>

      {/* Timeline Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px 0"
        }}
      >
        {/* Central Vertical Line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "4px",
            background: "linear-gradient(to bottom, var(--primary), var(--secondary))",
            transform: "translateX(-50%)",
            borderRadius: "2px",
            zIndex: 1
          }}
          className="timeline-line"
        />

        {/* Timeline Events */}
        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: "40px",
                position: "relative",
                zIndex: 2,
                flexDirection: isLeft ? "row" : "row-reverse"
              }}
              className="timeline-item"
            >
              {/* Card Container */}
              <div
                style={{
                  width: "45%",
                  textAlign: isLeft ? "right" : "left",
                  display: "flex",
                  justifyContent: isLeft ? "flex-end" : "flex-start"
                }}
                className="timeline-card-wrapper"
              >
                <div
                  style={{
                    padding: "24px",
                    maxWidth: "350px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                  }}
                  className="glass-card"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      color: "var(--primary)",
                      letterSpacing: "1px"
                    }}
                  >
                    {event.date}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.3rem",
                      color: "var(--text-main)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: isLeft ? "flex-end" : "flex-start",
                      gap: "6px"
                    }}
                  >
                    {event.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      color: "var(--text-muted)",
                      lineHeight: "1.5"
                    }}
                  >
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Timeline Center Node */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "white",
                  border: "4px solid var(--secondary)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  boxShadow: "var(--glass-shadow)",
                  zIndex: 3
                }}
              >
                {event.emoji}
              </div>

              {/* Spacer on the opposite side to balance the flexbox */}
              <div style={{ width: "45%" }} className="timeline-spacer" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Media queries injected for responsive vertical stacking */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-item {
            flex-direction: row-reverse !important;
            align-items: flex-start !important;
            margin-bottom: 30px !important;
          }
          .timeline-card-wrapper {
            width: calc(100% - 60px) !important;
            text-align: left !important;
            justify-content: flex-start !important;
          }
          .timeline-card-wrapper > div {
            max-width: 100% !important;
          }
          .timeline-card-wrapper h3 {
            justify-content: flex-start !important;
          }
          .timeline-spacer {
            display: none !important;
          }
          .timeline-item > div:nth-child(2) {
            margin-left: 2px !important;
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
    </div>
  );
}
