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
      className="cursor-pointer text-theme-color"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <i className="fa-regular fa-sun-dust text-"></i>
    </div>
  );
};

export default ThemeToggle;
