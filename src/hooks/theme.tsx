"use client";
import { useEffect } from "react";

export function useTheme() {
  let theme;
  useEffect(() => {
    theme = localStorage.getItem("theme");
  }, []);
  return theme;
}
