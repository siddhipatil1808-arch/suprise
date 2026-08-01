import React from "react";
import Hero from "../components/Hero";
import Confetti from "../components/Confetti";

export default function Home() {
  return (
    <div className="page-container">
      {/* Launch welcome confetti on home page load */}
      <Confetti duration={3000} particleCount={80} spread={60} />
      <Hero />
    </div>
  );
}
