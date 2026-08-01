import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        width: "100%",
        padding: "30px 20px",
        textAlign: "center",
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(5px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        marginTop: "auto",
        zIndex: 5,
        position: "relative",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.95rem",
          color: "var(--text-main)",
          fontWeight: "500",
          marginBottom: "6px",
        }}
      >
        Made with <span style={{ color: "#FF69B4", animation: "heartBeat 1.5s infinite" }}>💛</span> for{" "}
        <span style={{ fontWeight: "700", color: "var(--text-main)" }}>Bindook</span>
      </p>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.8rem",
          color: "var(--text-muted)",
        }}
      >
        Designed especially for August 5th, {currentYear} ✨
      </p>
      <style>{`
        @keyframes heartBeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.1); }
          28% { transform: scale(1); }
          42% { transform: scale(1.1); }
          70% { transform: scale(1); }
        }
      `}</style>
    </footer>
  );
}
