"use client";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme && theme === "light") {
      setDarkMode(false);
    }
  }, []);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      if (darkMode) {
        localStorage.setItem("theme", "dark");
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");

        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, [darkMode]);
  return (
    <div className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
      <i className="fa-light fa-sun-dust text-"></i>
    </div>
  );
};

export default ThemeToggle;
