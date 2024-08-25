"use client";
import React from "react";
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
  const { ref, inView, entry } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`stack-container w-full h-auto flex py-[2%] sm:py-[10%] sm:flex-col ${
        inView ? "revealTrans" : "hiddenTrans"
      }`}
    >
      <div className="left w-full">
        <p className="text-[15px] text-color-2 font-medium mb-8">
          Fullstack web developer
        </p>
        <p className="text-[13px] text-color-3 font-medium mb-8">
          in React, Next JS, JSON, jQuery, PHP and SQL. As a seasoned fullstack
          web developer proficient in an array of technologies, including React,
          Next.js, JSON, jQuery, PHP, and SQL, I bring a dynamic skill set to
          every project. With a passion for crafting seamless user experiences
          and robust backend systems, I thrive in both frontend and backend
          development environments.
        </p>
        <p className="text-[13px] text-color-3 font-medium mb-8">
          In my portfolio, you&apos;ll find a diverse range of projects
          showcasing my proficiency in creating responsive and intuitive web
          applications. Leveraging the power of React and Next.js, I excel in
          building modern, scalable frontend interfaces that prioritize
          usability and performance. Whether it&apos;s crafting interactive user
          interfaces or implementing complex data-driven features, I always aim
          to exceed expectations.
        </p>
        <p className="text-[13px] text-color-3 font-medium">
          My expertise extends to backend development, where I utilize PHP and
          SQL to architect secure and efficient server-side solutions. From
          designing relational databases to implementing RESTful APIs, I take
          pride in building robust backend systems that seamlessly integrate
          with frontend components.
        </p>
      </div>
      <div className="right w-full px-[8%] sm:px-0 sm:mt-5 ">
        <p className="text-[40px] sm:text-[25px] text-white font-semibold text-center">
          My Stack<span className="text-color-2">.</span>
        </p>
        <div className="w-ful grid grid-cols-3 gap-8 sm:gap-3 p-3">
          <motion.div className="item w-full h-[130px] rounded-lg  bg-opacity-10 center-div">
            <Image src={htmlLogo} alt=""></Image>
          </motion.div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image src={cssLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image src={jsLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image src={phpLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image src={reactLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image src={nextjsLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image src={tailwindLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image src={jqueryLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10 center-div">
            <Image src={sqlLogo} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
