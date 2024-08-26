"use client";
import React, { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
interface PageProps {
  page?: string;
}
export default function Header() {
  return (
    <header className="w-full h-[100px] flex items-center px-[5%] justify-between">
      <div className="logo text-color-2 text-[22px] font-semibold font-sans">
        <Link href={`/`}>
          <span className="text-color-1">Dev</span> Victor
        </Link>
      </div>
      <nav className="sm:hidden">
        <ul className="flex gap-10 text-color-3 text-[12px]">
          <Link href="">
            <li className="font-medium">Home</li>
          </Link>
          <Link href="" id="stack-nav-btn">
            <li className="font-medium">About</li>
          </Link>
          <Link href="">
            <li className="font-medium">Projects</li>
          </Link>
        </ul>
      </nav>
      <div className="right flex gap-3 items-center">
        <ThemeToggle />
        <button
          className="btn w-[120px] h-[30px] rounded-lg bg-color-2 text-[11px] font-medium text-white"
          onClick={() => window.location.assign("https://wa.me/2349125165937")}
        >
          Contact Me &nbsp; <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </header>
  );
}
