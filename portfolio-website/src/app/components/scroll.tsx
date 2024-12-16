"use client";

import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled more than 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100 z-10" : "opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
