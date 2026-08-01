import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/quiz", label: "Quiz" },
  { path: "/letter", label: "Letter" },
  { path: "/memories", label: "Memories" },
  { path: "/surprise", label: "Final Surprise" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px",
        background: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
        zIndex: 900,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        boxShadow: "0 4px 20px rgba(200, 162, 200, 0.08)",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        onClick={closeMenu}
        style={{
          textDecoration: "none",
          fontFamily: "var(--font-heading)",
          fontSize: "1.6rem",
          fontWeight: "700",
          color: "var(--text-main)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
      >
        <span>🎂</span>
        <span style={{ background: "linear-gradient(90deg, #FF69B4, #C8A2C8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Bindook
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "32px",
          alignItems: "center",
        }}
        className="desktop-menu"
      >
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                fontWeight: isActive ? "700" : "500",
                color: isActive ? "var(--text-main)" : "var(--text-muted)",
                position: "relative",
                padding: "8px 0",
                transition: "color 0.3s",
              })}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        borderRadius: "2px",
                        background: "linear-gradient(90deg, var(--primary), var(--secondary))",
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Hamburger Toggle (Mobile) */}
      <button
        onClick={toggleMenu}
        style={{
          background: "transparent",
          border: "none",
          color: "var(--text-main)",
          fontSize: "1.4rem",
          cursor: "pointer",
          display: "none",
          alignItems: "center",
        }}
        className="hamburger-btn"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              style={{
                position: "fixed",
                top: "70px",
                left: 0,
                width: "100%",
                height: "calc(100vh - 70px)",
                background: "black",
                zIndex: 898,
              }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              style={{
                position: "fixed",
                top: "70px",
                right: 0,
                width: "75%",
                maxWidth: "300px",
                height: "calc(100vh - 70px)",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                boxShadow: "-10px 0 30px rgba(0,0,0,0.1)",
                zIndex: 899,
                padding: "40px 24px",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      onClick={closeMenu}
                      style={({ isActive }) => ({
                        textDecoration: "none",
                        fontFamily: "var(--font-body)",
                        fontSize: "1.1rem",
                        fontWeight: isActive ? "700" : "500",
                        color: isActive ? "var(--text-main)" : "var(--text-muted)",
                        display: "block",
                        padding: "8px 0",
                      })}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Media queries using inline styles injected tag */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
