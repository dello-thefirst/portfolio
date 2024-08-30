"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const MouseTracker = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const xPercent = Math.round((x / width) * 100);
      const yPercent = Math.round((y / height) * 100);

      document.body.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, ${
        theme === "dark" ? "#0f0222" : "lightgrey"
      } 0%, rgb(var(--bg-main)) 35%)`;

      // Dynamically set background gradient based on cursor position
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme]);
  return <div></div>;
};

export default MouseTracker;
