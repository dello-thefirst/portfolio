"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.35,
    triggerOnce: true,
    delay: 0,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.35,
    triggerOnce: true,
    delay: 10,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.35,
    triggerOnce: true,
    delay: 30,
  });
  return (
    <div className={`w-full py-[2%] sm:py-[10%]`}>
      <p className="text-[20px] text-color-2 font-medium mb-8">
        Services I Offer<span className="text-color-1">.</span>
      </p>
      <div className="flex gap-5 sm:flex-col">
        <div
          ref={ref1}
          className={`w-full h-auto transition-all duration-500 delay-0 rounded-2xl border-2 border-color-1/[0.09] bg-color-1/[0.02] p-4 flex flex-col gap-4 overflow-hidden ${
            inView1
              ? "opacity-1 translate-y-0"
              : "opacity-0 translate-y-[100px]"
          }`}
        >
          <i className="text-[50px] text-color-2 fa-solid fa-code"></i>
          <p className="text-color-1 font-semibold">Fullstack Development</p>

          <p className="text-color-3 text-[12px] text">
            I create end-to-end solutions, handling both frontend and backend
            development with React, Next.js, Python, and PHP to deliver
            complete, efficient web and mobile applications.
          </p>
        </div>
        <div
          ref={ref2}
          className={`w-full h-auto transition-all duration-500 delay-75 rounded-2xl border-2 border-color-1/[0.09] bg-color-1/[0.02] p-4 flex flex-col gap-4 overflow-hidden ${
            inView2
              ? "opacity-1 translate-y-0"
              : "opacity-0 translate-y-[100px]"
          }`}
        >
          <i className="text-[50px] text-color-2 fa-regular fa-mobile"></i>
          <p className="text-color-1 font-semibold">Mobile App Development</p>

          <p className="text-color-3 text-[12px]">
            I build cross-platform mobile applications using React Native,
            delivering smooth, responsive user experiences for both iOS and
            Android devices.
          </p>
        </div>
        <div
          ref={ref3}
          className={`w-full h-auto transition-all duration-500 delay-100 rounded-2xl border-2 border-color-1/[0.09] bg-color-1/[0.02] p-4 flex flex-col gap-4 overflow-hidden ${
            inView3
              ? "opacity-1 translate-y-0"
              : "opacity-0 translate-y-[100px]"
          }`}
        >
          <i className="text-[50px] text-color-2 fa-regular fa-pen-nib"></i>
          <p className="text-color-1 font-semibold">Graphic Design</p>

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
