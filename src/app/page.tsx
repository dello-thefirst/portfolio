import React from "react";
import FrontMain from "../componenets/FrontMain";
import Stacks from "../componenets/Stacks";
import Projects from "../componenets/Projects";
import Services from "../componenets/Services";

export default function Home() {
  return (
    <>
      <div className="global-conatiner w-full h-full px-[5%] sm:px-[8%]">
        <FrontMain />
        <Services />
        <Stacks />
        <Projects />
      </div>
    </>
  );
}
