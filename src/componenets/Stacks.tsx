"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import htmlLogo from "@/src/app/logos/html.png";
import cssLogo from "@/src/app/logos/css.png";
import jsLogo from "@/src/app/logos/javascript.png";
import phpLogo from "@/src/app/logos/php.png";
import reactLogo from "@/src/app/logos/react.png";
import nextjsLogo from "@/src/app/logos/nextjs.png";
import tailwindLogo from "@/src/app/logos/tailwind.png";
import jqueryLogo from "@/src/app/logos/jquery.png";
import sqlLogo from "@/src/app/logos/sql.png";
import { useInView } from "react-intersection-observer";

const Stacks = () => {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true });
  const stackRef = useRef(null);
  return (
    <div
      id="stackSection"
      ref={ref}
      className={`stack-container w-full transition-all duration-500 delay-0 h-auto flex py-[2%] sm:py-[10%] sm:flex-col ${
        inView ? "opacity-1 translate-y-0" : "opacity-0 translate-y-[100px]"
      }`}
    >
      <div className="left w-full" ref={stackRef}>
        <p className="text-[20px] text-color-2 font-medium mb-8">
          Tech Stack<span className="text-color-1">.</span>
        </p>
        <p className="text-[13px] text-color-3 font-medium mb-8">
          I specialize in building dynamic, responsive web applications using a
          variety of modern technologies. My core stack includes HTML, CSS,
          JavaScript and React for frontend development, with a strong focus on
          React and Next.js for creating seamless, high-performance user
          experiences. I also have experience in mobile app development using
          React Native, delivering cross-platform solutions. On the backend, I
          work with Python and PHP to develop robust server-side functionality.
        </p>
      </div>
      <div className="right w-full px-[8%] sm:px-0 sm:mt-5 ">
        <p className="text-[40px] sm:text-[25px] text-color-1 font-semibold text-center">
          My Stack<span className="text-color-2">.</span>
        </p>
        <div className="w-ful grid grid-cols-3 grid-rows-3 gap-8 sm:gap-3 p-3">
          <motion.div className="item w-full h-[130px] rounded-lg  bg-opacity-10 center-div">
            <Image className="w-full" src={htmlLogo} alt=""></Image>
          </motion.div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image className="w-full" src={cssLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image className="w-full" src={jsLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image className="w-full" src={phpLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image className="w-full" src={reactLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image className="w-full" src={nextjsLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image className="w-full" src={tailwindLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image className="w-full" src={jqueryLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10 center-div">
            <Image className="w-full" src={sqlLogo} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
