import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./componenets/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

let appTheme = "dark";
const toggleTheme = () => {
  if (appTheme == "light") {
    appTheme = "dark";
  } else {
    appTheme = "light";
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
        ></link>

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-thin.css"
        ></link>

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-solid.css"
        ></link>

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-regular.css"
        ></link>

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/sharp-light.css"
        ></link>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
