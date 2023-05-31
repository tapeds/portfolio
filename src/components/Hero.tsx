import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "./BackgroundCircles";
import NextImage from "./NextImage";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Hi, I'm Farrell Matthew Lim", "Frontend Web Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <NextImage src="/images/foto.png" alt="foto" width={150} height={150} />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-[#C4C4C4]">
          Teknik Informatika
        </h2>
        <h1 className="px-10 text-5xl font-semibold text-[#D4D4D4] lg:text-6xl">
          <span>{text}</span>
          <Cursor cursorColor="#0066CC" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button
              className="rounded-full border border-[#242424] px-6 py-2 text-xs uppercase tracking-widest text-[#C4C4C4] transition-all 
    hover:border-[#0066CC]/80 hover:text-[#0066CC]/80"
            >
              About
            </button>
          </Link>
          <Link href="#experience">
            <button
              className="rounded-full border border-[#242424] px-6 py-2 text-xs uppercase tracking-widest text-[#C4C4C4] transition-all 
    hover:border-[#0066CC]/80 hover:text-[#0066CC]/80"
            >
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button
              className="rounded-full border border-[#242424] px-6 py-2 text-xs uppercase tracking-widest text-[#C4C4C4] transition-all 
    hover:border-[#0066CC]/80 hover:text-[#0066CC]/80"
            >
              Skills
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
