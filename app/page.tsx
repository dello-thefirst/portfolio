import React from "react";
import FrontMain from "./componenets/FrontMain";
import Stacks from "./componenets/Stacks";
import Projects from "./componenets/Projects";

export default function Home() {
  return (
    <>
      <div className="global-conatiner w-full h-full px-[5%]">
        <FrontMain />
        <Stacks />
        <Projects />
      </div>
    </>
  );
}
