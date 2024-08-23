"use client";
import Header from "@/src/componenets/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <body className={`bg-main  ${poppins.className}`}>
        <Header />
        {children}
      </body>
    </>
  );
}
