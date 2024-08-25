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
      className={`w-[30px] h-[30px] center-div rounded-md bg-color-2/20 cursor-pointer text-color-1 text-[16px]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <i
        className={`fa-light ${theme === "dark" ? "fa-moon" : "fa-sun-bright"}`}
      ></i>
    </div>
  );
};

export default ThemeToggle;
