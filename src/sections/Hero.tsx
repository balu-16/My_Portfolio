import Image from "next/image";
import memojiImage from "../../public/images/memoji-computer.png";
import grainImage from "../../public/images/grain.jpg";
import StarIcon from "../../public/icons/star.svg";
import SparkleIcon from "../../public/icons/sparkle.svg";

import { ArrowDown } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="scroll-mt-24 py-32 md:py-40 lg:py-52 relative z-0 overflow-x-clip select-text"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className=" size-[720px] hero-ring" />
        <div className=" size-[920px] hero-ring" />
        <div className=" size-[1120px] hero-ring" />
        <div className=" size-[1320px] hero-ring" />

        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon aria-hidden="true" className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon aria-hidden="true" className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div aria-hidden="true" className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180}>
          <SparkleIcon aria-hidden="true" className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="60s">
          <StarIcon aria-hidden="true" className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="50s">
          <StarIcon aria-hidden="true" className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div aria-hidden="true" className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon aria-hidden="true" className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div aria-hidden="true" className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="40s">
          <StarIcon aria-hidden="true" className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center ">
          <Image
            src={memojiImage}
            alt="person peeking from behind laptop"
            className="size-[100px] rounded-full"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div aria-hidden="true" className="relative size-2.5 rounded-full bg-green-500">
              <div className="absolute inset-0 rounded-full bg-green-500 animate-ping-large"></div>
            </div>
            <div>Available for new projects</div>
          </div>
        </div>
        <div className=" mx-auto">
          <h1 className="font-cursive md:text-8xl text-5xl text-center mt-8 tracking-wide">
            Hi. I&apos;m Balarakesh!
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-center text-white/60 md:text-lg">
            I am a passionate programmer and full-stack web developer, dedicated to creating scalable, high-performance web applications that bring ideas to life.
          </p>
        </div>

        <div className="flex items-center justify-center flex-col md:flex-row mt-8 gap-4 relative z-10">
          <Link href="#projects" className="focus-ring rounded-full">
            <HoverBorderGradient
              as="span"
              containerClassName="rounded-full"
              className="bg-white text-black flex items-center space-x-2"
            >
              <span>Explore My Work</span>

              <ArrowDown aria-hidden="true" className="size-4" />
            </HoverBorderGradient>
          </Link>
          <Link
            href="/resume.pdf"
            download="resume.pdf"
            className="focus-ring z-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-12 font-medium text-slate-400 transition-colors hover:cursor-pointer"
          >
              My Resume
          </Link>
        </div>
      </div>
    </div>
  );
};
