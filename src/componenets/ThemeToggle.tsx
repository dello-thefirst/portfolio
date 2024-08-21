"use client";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setDarkMode(theme === "dark");
    }
  }, []);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (darkMode) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      className="cursor-pointer text-theme-color"
      onClick={() => setDarkMode(!darkMode)}
    >
      <i className="fa-light fa-sun-dust text-"></i>
    </div>
  );
};

export default ThemeToggle;
