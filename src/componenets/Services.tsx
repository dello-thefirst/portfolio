"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`w-full py-[2%] sm:py-[10%] ${
        inView ? "revealTrans" : "hiddenTrans"
      }`}
    >
      <p className="text-[20px] text-color-2 font-medium mb-8">
        Services I Offer<span className="text-color-1">.</span>
      </p>
      <div className="flex gap-5 sm:flex-col">
        <div
          className={`w-full h-auto rounded-lg bg-color-1/[0.02] p-4 flex flex-col gap-4 overflow-hidden shadow-lg`}
        >
          <i className="text-[50px] text-color-2 fa-solid fa-code"></i>
          <p className="text-color-1">Fullstack Development</p>

          <p className="text-color-3 text-[12px] text">
            I create end-to-end solutions, handling both frontend and backend
            development with React, Next.js, Python, and PHP to deliver
            complete, efficient web and mobile applications.
          </p>
        </div>
        <div
          className={`w-full h-auto rounded-lg bg-color-1/[0.02] p-4 flex flex-col gap-4 overflow-hidden shadow-lg`}
        >
          <i className="text-[50px] text-color-2 fa-regular fa-mobile"></i>
          <p className="text-color-1">Mobile App Development</p>

          <p className="text-color-3 text-[12px]">
            I build cross-platform mobile applications using React Native,
            delivering smooth, responsive user experiences for both iOS and
            Android devices.
          </p>
        </div>
        <div
          className={`w-full h-auto rounded-lg bg-color-1/[0.02] p-4 flex flex-col gap-4 overflow-hidden shadow-lg`}
        >
          <i className="text-[50px] text-color-2 fa-regular fa-pen-nib"></i>
          <p className="text-color-1">Graphic Design</p>

          <p className="text-color-3 text-[12px]">
            I craft visually engaging designs, blending creativity with
            technical precision to produce compelling graphics that enhance user
            experiences and brand identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
