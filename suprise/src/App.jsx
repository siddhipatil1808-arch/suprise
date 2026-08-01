import React, { useState, useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

// Style imports
import "./styles/global.css";

// Layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingHearts from "./components/FloatingHearts";
import Loader from "./components/Loader";

// Routes component
import AppRoutes from "./routes";

// Separate routing-dependent content to listen to path changes for transitions
function MainLayout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 2.5 seconds to build anticipation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          {/* Global Ambient Background Particles */}
          <FloatingHearts />

          {/* Sticky Header */}
          <Navbar />

          {/* Toast notifications provider container */}
          <Toaster position="top-center" reverseOrder={false} />

          {/* Animated Page Transitions wrapper */}
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ flex: 1 }}
            >
              <AppRoutes />
            </motion.div>
          </AnimatePresence>
          {/* Shared footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
