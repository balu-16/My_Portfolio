"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({
  text,
  icon,
  className,
}: {
  text?: string;
  icon?: React.ReactNode;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    if (!prefersReducedMotion) {
      setRandomString(generateRandomString(1500));
    }
  }, [prefersReducedMotion]);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;

    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    setRandomString(generateRandomString(1500));
  }

  return (
    <div
      className={cn(
        "relative flex aspect-square h-full w-full items-center justify-center bg-transparent p-0.5",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        tabIndex={text ? 0 : undefined}
        role={text ? "img" : undefined}
        aria-label={text}
        className="group/skill-card relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
          reducedMotion={prefersReducedMotion ?? false}
        />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center text-4xl font-bold text-white">
            <div className="flex flex-col items-center justify-center">
              {icon && (
                <span aria-hidden="true" className="transition-opacity duration-300">
                  {icon}
                </span>
              )}
              {text && (
                <span className="font-cursive text-base font-light transition-opacity duration-300 sm:text-lg md:text-2xl md:opacity-0 md:group-hover/skill-card:opacity-100 md:group-focus/skill-card:opacity-100">
                  {text}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CardPattern({
  mouseX,
  mouseY,
  randomString,
  reducedMotion,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  randomString: string;
  reducedMotion: boolean;
}) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/skill-card:opacity-50" />
      {!reducedMotion && (
        <>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-700 opacity-0 backdrop-blur-xl transition duration-500 group-hover/skill-card:opacity-100"
            style={style}
          />
          <motion.div
            className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/skill-card:opacity-100"
            style={style}
          >
            <p className="absolute inset-x-0 h-full break-words whitespace-pre-wrap text-xs font-mono font-bold text-white transition duration-500">
              {randomString}
            </p>
          </motion.div>
        </>
      )}
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
