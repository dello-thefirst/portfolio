import React from "react";

const Stacks = () => {
  return (
    <div className="stack-container w-full h-auto flex py-[10%] sm:flex-col">
      <div className="left w-full">
        <p className="text-[15px] text-[var(--color-2)] font-medium mb-4">
          Fullstack web developer
        </p>
        <p className="text-[13px] text-[var(--color-3)] font-medium mb-4">
          in React, Next JS, JSON, jQuery, PHP and SQL Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quo fugiat soluta dolore minima sed
          amet voluptates a repudiandae excepturi iure, obcaecati optio
          quibusdam aut dicta, nemo dolorum dolor deleniti corrupti?
        </p>
        <p className="text-[13px] text-[var(--color-3)] font-medium mb-4">
          amet consectetur adipisicing elit. Quo fugiat soluta dolore minima sed
          amet voluptates a repudiandae excepturi iure, obcaecati optio
          quibusdam aut dicta, nemo dolorum dolor deleniti corrupti?
        </p>
        <p className="text-[13px] text-[var(--color-3)] font-medium">
          amet consectetur adipisicing elit. Quo fugiat soluta dolore minima sed
          amet voluptates a repudiandae excepturi iure, obcaecati optio
          quibusdam aut dicta, nemo dolorum dolor deleniti corrupti?
        </p>
      </div>
      <div className="right w-full px-[8%] sm:px-0 sm:mt-5 ">
        <p className="text-[25px] text-[var(--color-3)] font-medium">Stack</p>
        <div className="w-ful grid grid-cols-4 gap-[10px]">
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10 bg-gray-100 center-div">
            HTML
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10 bg-gray-100 center-div">
            CSS
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10 bg-gray-100 center-div">
            PHP
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10 bg-gray-100 center-div">
            REACT
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10 bg-gray-100 center-div">
            NEXT JS
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10 bg-gray-100 center-div">
            TAILWIND
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10 bg-gray-100 center-div">
            JQUERY
          </div>
          <div className="item w-full h-[130px] rounded-lg  bg-opacity-10 bg-gray-100 center-div">
            SQL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
