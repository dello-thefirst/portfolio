import Image from "next/image";
import React from "react";
import blogCardImage from "@/app/assets/images/blog-card.png";
import businessCardImage from "@/app/assets/images/business-card.png";
import ecommerceCardImage from "@/app/assets/images/ecommerce-card.png";
import entertainmentCardImage from "@/app/assets/images/entertainment-card.png";
export function CardContainer() {
  return (
    <>
      <p className="text-center text-[40px] font-bold mb-5 sm:text-[30px]">
        Services I Offer...
      </p>
      <div className="card-container grid grid-cols-4 gap-3 sm:grid-cols-2">
        <div className="card overflow-hidden rounded-lg bg-slate-50/10">
          <Image
            src={blogCardImage}
            alt=""
            className="h-[170px] sm:h-[120px] object-cover"
          ></Image>
          <div className="w-full p-2 pb-10">
            <p>Blog Website</p>
          </div>
        </div>

        <div className="card overflow-hidden rounded-lg bg-slate-50/10">
          <Image
            src={businessCardImage}
            alt=""
            className="h-[170px] sm:h-[120px] object-cover"
          ></Image>
          <div className="w-full p-2 pb-10">
            <p>Business Website</p>
          </div>
        </div>

        <div className="card overflow-hidden rounded-lg bg-slate-50/10">
          <Image
            src={ecommerceCardImage}
            alt=""
            className="h-[170px] sm:h-[120px] object-cover"
          ></Image>
          <div className="w-full p-2 pb-10">
            <p>E-Commerce Website</p>
          </div>
        </div>

        <div className="card overflow-hidden rounded-lg bg-slate-50/10">
          <Image
            src={entertainmentCardImage}
            alt=""
            className="h-[170px] sm:h-[120px] object-cover"
          ></Image>
          <div className="w-full p-2 pb-10">
            <p>Entertainment Website</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <div className="projects-container w-full h-auto flex gap-2 text-white pb-5">
      <div className="inner w-full">
        <CardContainer />
      </div>
    </div>
  );
}

export default Projects;
