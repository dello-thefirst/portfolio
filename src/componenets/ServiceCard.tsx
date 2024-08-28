"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const ServiceCard = (props: {
  id: number;
  delay?: string;
  icon: string;
  title: string;
  desc: string;
}) => {
  const { ref: ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`w-full h-auto transition-all duration-500 rounded-sm shadow-xl bborder-color-1/[0.15] bg-color-1/[0.009] p-4 flex flex-col gap-4 overflow-hidden ${
        inView
          ? `opacity-1 translate-y-0 ${
              props.id == 2 ? "delay-75" : props.id == 3 ? "delay-100" : ""
            }`
          : `opacity-0 translate-y-[100px] `
      }`}
    >
      <i className={`text-[50px] text-color-2 ${props.icon}`}></i>
      <p className="text-color-1 font-semibold">
        {props.title}
        <span className="text-color-2">.</span>
      </p>
      <p className="text-color-3 text-[12px] text">{props.desc}</p>
    </div>
  );
};

export default ServiceCard;
