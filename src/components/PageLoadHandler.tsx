"use client";

import { useEffect } from "react";

/**
 * Handles the initial page loading animation logic.
 * This component is client-side only and should be used once in the main page layout.
 */
const PageLoadHandler = () => {
  useEffect(() => {
    // Initial page loading animation
    document.body.classList.add("overflow-hidden");

    const timer = setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return null; // This component does not render anything
};

export default PageLoadHandler;
