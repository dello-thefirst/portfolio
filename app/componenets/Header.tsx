"use client";
import React, { useState } from "react";
import Link from "next/link";
interface PageProps {
  page?: string;
}
export default function Header() {
  return (
    <header className="w-full h-[100px] flex items-center px-[5%] justify-between">
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
            <li className="font-medium">Projects</li>
          </Link>
        </ul>
      </nav>

      <button
        className="btn w-[120px] h-[40px] rounded-lg bg-[var(--color-2)] text-[12px] font-medium text-white"
        onClick={() => window.location.assign("https://wa.me/2349125165937")}
      >
        Contact Me
      </button>
    </header>
  );
}
