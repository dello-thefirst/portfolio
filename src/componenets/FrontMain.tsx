"use client";
import Image from "next/image";
import Portrait from "@/src/assets/images/main.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
export default function FrontMain() {
  return (
    <main className="w-full h-[100vh] sm:h-auto">
      <div className="w-full flex h-[70%] flex-row sm:h-auto sm:flex-col-reverse sm:mb-10">
        <div className="left w-full h-full sm:h-auto flex items-center">
          <div>
            <p className="text-[50px] text-[var(--color-1)] font-bold sm:text-[30px] sm:mb-[10px]">
              Dev<span className="text-[var(--color-2)]">.</span>
              <br></br> Victor Faruna
            </p>
            <p className="text-[13px] text-[var(--color-3)] font-medium">
              Fullstack{" "}
              <span className="text-[var(--color-2)] text-shadow-xl">
                web developer
              </span>{" "}
              in React, Next JS, JSON, jQuery, PHP and SQL. I bring a dynamic
              skill set to every project. With a passion for crafting seamless
              user experiences and robust backend systems, I thrive in both
              frontend and backend development environments.
            </p>
          </div>
        </div>
        <div className="right w-full h-full flex flex-col gap-5 items-center justify-center sm:mb-10">
          <div className="dhh w-[360px] h-[360px] bg-transparent rounded-full flex justify-center items-center p-1 sm:w-[200px] sm:h-[200px] drop-shadow-2xl relative">
            <div className="bg-[rebeccapurple] w-full h-full absolute z-[1] rounded-full"></div>
            <motion.div
              className="w-full h-full absolute z-[2]"
              initial={{
                transform: "translateZ(8px) translateY(-2px) translateX(-8px)",
              }}
              animate={{
                transform:
                  "translateZ(50px) translateY(-12px) translateX(-10px)",
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <Image
                unoptimized
                className="rounded-full w-full h-full object-cover bg-neutral-800"
                width={300}
                height={300}
                src={Portrait}
                alt=""
              />
            </motion.div>
          </div>
          <p className="text-[var(--color-2)] text-[12px] italic">
            Out of this world...
          </p>
          <p className="h-[40px] items-center socials text-center flex gap-10 text-[var(--color-3)] text-[20px] ">
            <Link href="">
              <i className="fa-brands fa-facebook-f transition duration-[0.1s] hover:text-blue-500"></i>
            </Link>
            <Link href="">
              <i className="fa-brands fa-x-twitter transition duration-[0.1s] hover:text-white"></i>
            </Link>
            <Link target="_blank" href="https://wa.me/+2349125165937/">
              <i className="fa-brands fa-whatsapp transition duration-[0.1s] hover:text-green-500 hover:text-shadow-lg "></i>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/victor-faruna-19a1b0238/"
            >
              <i className="fa-brands fa-linkedin-in transition duration-[0.3s] hover:text-blue-500"></i>
            </Link>
          </p>
        </div>
      </div>

      <div className="flex gap-[40px] sm:justify-between">
        <div className="flex flex-col text-[12px] font-semibold text-[var(--color-1)]">
          <p className="top text-[var(--color-2)]">Based In</p>
          <p className="bottom text-[16px]">Nigeria</p>
        </div>

        <div className="flex flex-col text-[12px] font-semibold text-[var(--color-1)]">
          <p className="top text-[var(--color-2)]">Experience</p>
          <p className="bottom text-[16px]">4+ years</p>
        </div>

        <div className="flex flex-col text-[12px] font-semibold text-[var(--color-1)]">
          <p className="top text-[var(--color-2)]">Fluent In</p>
          <p className="bottom text-[16px]">English</p>
        </div>
      </div>
    </main>
  );
}
