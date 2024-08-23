"use client";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const handleThemeToggle = () => {
    if (typeof window !== undefined) {
      const theme = localStorage.getItem("theme");
      if (theme === "light") {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
      }
    }
  };

  //   useEffect(() => {
  //     const theme = localStorage.getItem("theme");
  //     if (darkMode) {
  //       document.body.classList.replace("light", "dark");
  //       localStorage.setItem("theme", "dark");
  //     } else {
  //       document.body.classList.replace("dark", "light");
  //       localStorage.setItem("theme", "light");
  //     }
  //   }, [darkMode]);
  return (
    <div
      className="cursor-pointer text-theme-color"
      onClick={() => handleThemeToggle()}
    >
      <i className="fa-light fa-sun-dust text-"></i>
    </div>
  );
};

export default ThemeToggle;
