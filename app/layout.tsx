import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./componenets/Header";
import Head from "next/head";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio - Victor Faruna",
  description:
    "As a seasoned fullstack web developer proficient in an array of technologies, including React, Next.js, JSON, jQuery, PHP, and SQL, I bring a dynamic skill set to every project. With a passion for crafting seamless user experiences and robust backend systems, I thrive in both frontend and backend development environments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <Head>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
        />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
