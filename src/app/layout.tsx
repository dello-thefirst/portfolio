import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/src/componenets/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio - Victor Faruna",
  description:
    "I am a seasoned fullstack web developer proficient in an array of technologies, including React, Next.js, JSON, jQuery, PHP, and SQL, I bring a dynamic skill set to every project. With a passion for crafting seamless user experiences and robust backend systems, I thrive in both frontend and backend development environments",
  icons: [
    { rel: "icon", url: "https://victorfaruna.vercel.app/0_0.webp" },
    {
      rel: "apple-touch-icon",
      url: "https://victorfaruna.vercel.app/0_0.webp",
    },
  ],
  category: "My Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://victorfaruna.vercel.app",
    title: "My Portfolio - Victor Faruna",
    description:
      "I am a seasoned fullstack web developer proficient in an array of technologies, including React, Next.js, JSON, jQuery, PHP, and SQL, I bring a dynamic skill set to every project. With a passion for crafting seamless user experiences and robust backend systems, I thrive in both frontend and backend development environments",
    images: [
      {
        url: "https://victorfaruna.vercel.app/0_0.webp",
        width: 1200,
        height: 630,
        alt: "My Portfolio - Victor Faruna",
      },
    ],
    siteName: "My Portfolio - Victor Faruna",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"
        />
      </head>
      <body className={`bg-main ${poppins.className}`}>
        <ThemeProvider defaultTheme="dark">
          <Header />
          {children}
        </ThemeProvider>
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
              document.getElementById("stack-nav-btn").addEventListener("click", function() {
                document.getElementById("stackSection").scrollIntoView({ behavior: 'smooth' });
                });
              `,
          }}
        ></script>
      </body>
    </html>
  );
}
