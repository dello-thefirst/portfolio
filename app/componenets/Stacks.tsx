import React from "react";
import htmlLogo from "@/app/logos/html.png";
import cssLogo from "@/app/logos/css.png";
import phpLogo from "@/app/logos/php.png";
import Image from "next/image";

const Stacks = () => {
  return (
    <div className="stack-container w-full h-auto flex py-[10%] sm:flex-col">
      <div className="left w-full">
        <p className="text-[15px] text-[var(--color-2)] font-medium mb-4">
          Fullstack web developer
        </p>
        <p className="text-[13px] text-[var(--color-3)] font-medium mb-4">
          in React, Next JS, JSON, jQuery, PHP and SQL. As a seasoned fullstack
          web developer proficient in an array of technologies, including React,
          Next.js, JSON, jQuery, PHP, and SQL, I bring a dynamic skill set to
          every project. With a passion for crafting seamless user experiences
          and robust backend systems, I thrive in both frontend and backend
          development environments.
        </p>
        <p className="text-[13px] text-[var(--color-3)] font-medium mb-4">
          In my portfolio, you&apos;ll find a diverse range of projects
          showcasing my proficiency in creating responsive and intuitive web
          applications. Leveraging the power of React and Next.js, I excel in
          building modern, scalable frontend interfaces that prioritize
          usability and performance. Whether it&apos;s crafting interactive user
          interfaces or implementing complex data-driven features, I always aim
          to exceed expectations.
        </p>
        <p className="text-[13px] text-[var(--color-3)] font-medium">
          My expertise extends to backend development, where I utilize PHP and
          SQL to architect secure and efficient server-side solutions. From
          designing relational databases to implementing RESTful APIs, I take
          pride in building robust backend systems that seamlessly integrate
          with frontend components.
        </p>
      </div>
      <div className="right w-full px-[8%] sm:px-0 sm:mt-5 ">
        <p className="text-[25px] text-[var(--color-3)] font-medium">Stack</p>
        <div className="w-ful grid grid-cols-4 sm:grid-cols-3 gap-[10px]">
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10 center-div">
            <Image src={htmlLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image src={cssLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            <Image src={phpLogo} alt=""></Image>
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            REACT
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            NEXT JS
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            TAILWIND
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10  center-div">
            JQUERY
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10 center-div">
            SQL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
