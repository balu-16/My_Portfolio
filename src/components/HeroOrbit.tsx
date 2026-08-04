"use client";

import { useReducedMotion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration,
  spinDuration,
  shouldSpin = false,
}: {
  children: React.ReactNode;
  size: number;
  rotation: number;
  orbitDuration?: string;
  shouldOrbit?: boolean;
  spinDuration?: string;
  shouldSpin?: boolean;
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className={twMerge(
          "[animation-duration:30s]",
          shouldOrbit && !prefersReducedMotion && "animate-spin"
        )}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className={twMerge(
            shouldSpin && !prefersReducedMotion ? "animate-spin" : ""
          )}
          style={{ animationDuration: spinDuration }}
        >
          <div
            className="flex items-start justify-start"
            style={{
              height: `${size}px`,
              width: `${size}px`,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <div className="inline-flex">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
