import React from "react";
import { motion } from "framer-motion";

export default function GalleryCard({ image, onOpen }) {
  return (
    <motion.div
      onClick={() => onOpen(image)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{
        cursor: "pointer",
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        height: "260px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        border: "1px solid var(--glass-border)",
        boxShadow: "var(--glass-shadow)",
      }}
      className="glass-card"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 12px 30px rgba(200, 162, 200, 0.25)",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${image.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s ease",
        }}
        className="card-image"
      />

      {/* Hover Info Overlay */}
      <div
        style={{
          zIndex: 2,
          padding: "16px",
          background: "linear-gradient(to top, rgba(74, 59, 78, 0.95) 0%, rgba(74, 59, 78, 0.3) 70%, transparent 100%)",
          color: "white",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.15rem",
            fontWeight: "600",
            color: "var(--primary)",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          {image.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8rem",
            opacity: 0.9,
            color: "#FFF",
            lineHeight: "1.3",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {image.caption}
        </p>
      </div>

      <style>{`
        /* Hover zoom effect on inner image */
        .glass-card:hover .card-image {
          transform: scale(1.08);
        }
      `}</style>
    </motion.div>
  );
}
