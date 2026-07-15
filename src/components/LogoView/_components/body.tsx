"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./logo";
import Weather from "./weather";

export default function Body() {
  const timer = 15; // seconds
  const [showLogo, setShowLogo] = useState(true);

  // Toggle between true/false every X seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo((prev) => !prev);
    }, timer * 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    // Added perspective here to make the 3D rotation look realistic
    <div
      className="flex grow justify-center items-center overflow-hidden"
      style={{ perspective: 1000 }}
    >
      <AnimatePresence mode="wait">
        {showLogo ? (
          <motion.div
            key="logo"
            initial={{ opacity: 0, rotateY: -90 }} // Starts rotated sideways
            animate={{ opacity: 1, rotateY: 0 }} // Rotates to flat
            exit={{ opacity: 0, rotateY: 90 }} // Rotates away sideways
            transition={{ duration: 0.5 }}
          >
            <Logo />
          </motion.div>
        ) : (
          <motion.div
            key="weather"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.5 }}
          >
            <Weather />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
