import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "../data/questions";
import QuizCard from "../components/QuizCard";
import Confetti from "../components/Confetti";
import Fireworks from "../components/Fireworks";
import { supabase } from "../lib/supabase";

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerChange = (val) => {
    setAnswers({
      ...answers,
      [questions[currentIndex].id]: val,
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = async () => {
  try {
    const { error } = await supabase
      .from("birthday_answers")
      .insert([
        {
          q1: answers[1] || "",
          q2: answers[2] || "",
          q3: answers[3] || "",
          q4: answers[4] || "",
          q5: answers[5] || "",
          q6: answers[6] || "",
          q7: answers[7] || "",
          q8: answers[8] || "",
          q9: answers[9] || "",
          q10: answers[10] || "",
        },
      ]);

    if (error) {
      console.error(error);
      alert("Failed to save answers.");
      return;
    }

    alert("Answers submitted successfully! ❤️");
    setIsSubmitted(true);

  } catch (err) {
    console.error(err);
    alert("Something went wrong.");
  }
};
  return (
    <div className="page-container">
      {/* Conditionally trigger full congratulations effects */}
      {isSubmitted && (
        <>
          <Confetti duration={5000} particleCount={150} />
          <Fireworks duration={8000} active={true} />
        </>
      )}

      {/* Page Title */}
      {!isSubmitted && (
        <>
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
            How Well Do You Know Us? 💛
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
              marginBottom: "40px",
            }}
          >
            A trip down memory lane! Share your heartfelt thoughts and funny answers to these questions.
          </motion.p>
        </>
      )}

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ width: "100%" }}
          >
            <QuizCard
              question={questions[currentIndex]}
              answer={answers[questions[currentIndex].id]}
              onChange={handleAnswerChange}
              onNext={handleNext}
              onPrev={handlePrev}
              currentIndex={currentIndex}
              totalQuestions={questions.length}
              onSubmit={handleSubmit}
            />
          </motion.div>
        ) : (
          /* Thank You Screen on Submit */
          <motion.div
            key="thank-you"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{
              maxWidth: "550px",
              padding: "40px",
              textAlign: "center",
              margin: "50px auto",
            }}
            className="glass-card"
          >
            <div
              style={{
                fontSize: "5rem",
                color: "#FF69B4",
                marginBottom: "20px",
                animation: "pulseBeat 1s infinite alternate ease-in-out",
              }}
            >
              ❤️
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2.2rem",
                color: "var(--text-main)",
                marginBottom: "15px",
              }}
            >
              Thank You!
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              You've just made this birthday even more special.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                opacity: 0.85,
              }}
            >
              Your answers have been written into the book of memories. ✨📖
            </p>
            <style>{`
              @keyframes pulseBeat {
                from { transform: scale(1); }
                to { transform: scale(1.15); }
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
