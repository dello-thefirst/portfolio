"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

const MouseTracker = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    document.body.style.background = `radial-gradient(circle at 50% 50%, ${
      theme === "dark" ? "#0f0222" : "transparent"
    } 0%, rgb(var(--bg-main)) 35%)`;
  }, [theme]);
  return <div></div>;
};

export default MouseTracker;
