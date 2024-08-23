"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`cursor-pointer text-theme-color text-[18px]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <i
        className={`fa-light ${theme === "dark" ? "fa-moon" : "fa-sun-bright"}`}
      ></i>
    </div>
  );
};

export default ThemeToggle;
