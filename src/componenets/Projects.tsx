import Image from "next/image";
import React from "react";
import blogCardImage from "@/src/assets/images/blog-card.png";
import businessCardImage from "@/src/assets/images/business-card.png";
import ecommerceCardImage from "@/src/assets/images/ecommerce-card.png";
import entertainmentCardImage from "@/src/assets/images/entertainment-card.png";
export function CardContainer() {
  return (
    <>
      <p className="text-center text-[40px] font-semibold mb-10 sm:text-[25px]">
        Services I Offer<span className="text-[var(--color-2)]">.</span>
      </p>
      <div className="card-container grid grid-cols-4 gap-3 gap-y-5 md:grid-cols-3 sm:grid-cols-2">
        <div className="card overflow-hidden rounded-lg bg-slate-50/10">
          <Image
            src={blogCardImage}
            alt=""
            className="h-[230px] sm:h-[120px] object-cover"
          ></Image>
          <div className="w-full p-5 sm:p4 pb-10">
            <p className="text-[20px] sm:text-[15px] mb-4">
              Blog Website Creation
            </p>
            <p className="desc text-[var(--color-3)] text-[12px] sm:text-[9px]">
              Bring your ideas to life online. I design and build user-friendly
              blog websites to help you share your voice with the world.
            </p>
          </div>
        </div>

        <div className="card overflow-hidden rounded-lg bg-slate-50/10">
          <Image
            src={businessCardImage}
            alt=""
            className="h-[230px] sm:h-[120px] object-cover"
          ></Image>
          <div className="w-full p-5 sm:p4 pb-10">
            <p className="text-[20px] sm:text-[15px] mb-4">
              Portfolio Website Creation
            </p>

            <p className="desc text-[var(--color-3)] text-[12px] sm:text-[9px]">
              Establish your online presence. I design and develop professional
              websites that showcase your brand and drive results.
            </p>
          </div>
        </div>

        <div className="card overflow-hidden rounded-lg bg-slate-50/10">
          <Image
            src={ecommerceCardImage}
            alt=""
            className="h-[230px] sm:h-[120px] object-cover"
          ></Image>
          <div className="w-full p-5 sm:p4 pb-10">
            <p className="text-[20px] sm:text-[15px] mb-4">
              E-Commerce Website Creation
            </p>
            <p className="desc text-[var(--color-3)] text-[12px] sm:text-[9px]">
              Grow your online store. I design and build user-friendly
              e-commerce websites to help you turn website visitors into
              customers. pen_spark tune share more_vert
            </p>
          </div>
        </div>

        <div className="card overflow-hidden rounded-lg bg-slate-50/10">
          <Image
            src={entertainmentCardImage}
            alt=""
            className="h-[230px] sm:h-[120px] object-cover"
          ></Image>
          <div className="w-full p-5 sm:p4 pb-10">
            <p className="text-[20px] sm:text-[15px] mb-4">
              Entertainment Website Creation
            </p>
            <p className="desc text-[var(--color-3)] text-[12px] sm:text-[9px]">
              Craft the perfect platform for your audience. I design and build
              engaging entertainment websites to connect fans with their
              passions.
            </p>
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
