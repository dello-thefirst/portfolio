import React from "react";
import FrontMain from "./componenets/FrontMain";
import Stacks from "./componenets/Stacks";

export default function Home() {
  return (
    <>
      <div className="global-conatiner w-full h-full px-[10%]">
        <FrontMain />
        <Stacks />
      </div>
    </>
  );
}
