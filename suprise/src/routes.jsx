import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Letter from "./pages/Letter";
import Memories from "./pages/Memories";
import Surprise from "./pages/Surprise";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="/surprise" element={<Surprise />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
