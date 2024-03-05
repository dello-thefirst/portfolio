"use client";
import React, { useState } from "react";
import Link from "next/link";
import ContactMe from "./ContactMe";
interface PageProps {
  page?: string;
}
export default function Header() {
  const [appTheme, setAppTheme] = useState("dark");
  return (
    <header className="w-full h-[100px] flex items-center px-[10%] justify-between">
      <div className="logo text-[var(--color-2)] text-[22px] font-semibold font-sans">
        <Link href={`/`}>
          <span className="text-[var(--color-1)]">Dev</span> Victor
        </Link>
      </div>
      <nav className="sm:hidden">
        <ul className="flex gap-10 text-[var(--color-3)] text-[12px]">
          <Link href="">
            <li className="font-medium">Home</li>
          </Link>
          <Link href="">
            <li className="font-medium">About</li>
          </Link>
          <Link href="">
            <li className="font-medium">Contact Me</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
