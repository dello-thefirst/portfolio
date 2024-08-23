"use client";
import Header from "@/src/componenets/Header";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});
export default function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  return (
    <>
      <body className={`bg-main ${theme} ${poppins.className}`}>
        <Header />
        {children}
      </body>
    </>
  );
}
