"use client";
import Header from "@/src/componenets/Header";
import { Poppins } from "next/font/google";
import { useEffect } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});
export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);
  return (
    <>
      <html lang="en" className={poppins.className} data-theme="">
        <script
          dangerouslySetInnerHTML={{
            __html: `
          const savedTheme = localStorage.getItem('theme');
          if(savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
          }else {
            document.documentElement.setAttribute('data-theme', 'dark')
            localStorage.setItem("theme", "dark")
          }
          `,
          }}
        ></script>
        <head>
          <link
            rel="stylesheet"
            href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
          />
        </head>
        <body className={`bg-main  ${poppins.className}`}>
          <Header />
          {children}
        </body>
      </html>
    </>
  );
}
