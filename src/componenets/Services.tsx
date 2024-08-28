"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const DATA = {
    fullstack: {
      id: 1,
      delay: "0ms",
      icon: "fa-solid fa-code",
      title: "Fullstack Development",
      desc: "I create end-to-end solutions, handling both frontend and backend development with React, Next.js, Python, and PHP to deliver complete, efficient web and mobile applications.",
    },
    mobile: {
      id: 2,
      delay: "300ms",
      icon: "fa-regular fa-mobile",
      title: "Mobile App Development",
      desc: "I build cross-platform mobile applications using React Native, delivering smooth, responsive user experiences for both iOS and Android devices.",
    },
    graphic: {
      id: 3,
      delay: "500ms",
      icon: "fa-regular fa-pen-nib",
      title: "Graphic Design",
      desc: "I craft visually engaging designs, blending creativity with technical precision to produce compelling graphics that enhance user experiences and brand identity.",
    },
  };
  return (
    <div className={`w-full py-[2%] sm:py-[10%]`}>
      <p className="text-[20px] text-color-2 font-medium mb-8">
        Services I Offer<span className="text-color-1">.</span>
      </p>
      <div className="flex gap-5 sm:flex-col">
        <ServiceCard {...DATA.fullstack} />
        <ServiceCard {...DATA.mobile} />
        <ServiceCard {...DATA.graphic} />
      </div>
    </div>
  );
};

export default Services;
