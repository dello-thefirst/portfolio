import Image from "next/image";
import Portrait from "./Portrait.webp";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-full h-full px-[10%]">
        <div className="w-full flex h-[70%] flex-row sm:h-auto sm:flex-col-reverse sm:mb-10">
          <div className="left w-full h-full flex items-center">
            <div>
              <p className="text-[50px] text-[var(--color-1)] font-bold sm:text-[30px] sm:mb-[10px]">
                Dev,<br></br> Victor Faruna
              </p>
              <p className="text-[13px] text-[var(--color-3)] font-medium">
                Fullstack{" "}
                <span className="text-[var(--color-2)] text-shadow-xl">
                  web developer
                </span>{" "}
                in React, Next JS, JSON, jQuery, PHP and SQL Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quo fugiat soluta dolore
                minima sed amet voluptates a repudiandae excepturi iure,
                obcaecati optio quibusdam aut dicta, nemo dolorum dolor deleniti
                corrupti?
              </p>
            </div>
          </div>
          <div className="right w-full h-full flex flex-col gap-5 items-center justify-center sm:mb-10">
            <div
              className="dhh w-96 h-96 bg-transparent rounded-full overflow-hidden flex justify-center items-center p-1 sm:w-[200px] sm:h-[200px]"
              style={{
                boxShadow:
                  "0px 0px 100px 5px var(--color-4), 0 0 0 3px var(--color-5)",
              }}
            >
              <Image
                className="rounded-full h-full object-cover"
                src={Portrait}
                alt=""
              ></Image>
            </div>
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
    </>
  );
}
