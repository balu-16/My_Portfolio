"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

const tabId = (value: string) => `project-tab-${value}`;
const panelId = (value: string) => `project-panel-${value}`;

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [activeValue, setActiveValue] = useState(propTabs[0]?.value);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const [hovering, setHovering] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const active =
    propTabs.find((tab) => tab.value === activeValue) ?? propTabs[0];

  if (!active) return null;

  const moveSelectedTabToTop = (index: number) => {
    const newTabs = [...propTabs];
    const [selectedTab] = newTabs.splice(index, 1);
    newTabs.unshift(selectedTab);
    setTabs(newTabs);
    setActiveValue(selectedTab.value);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const navigationKeys = [
      "ArrowRight",
      "ArrowDown",
      "ArrowLeft",
      "ArrowUp",
      "Home",
      "End",
    ];
    if (!navigationKeys.includes(event.key)) return;

    event.preventDefault();
    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? propTabs.length - 1
          : (index +
              (["ArrowLeft", "ArrowUp"].includes(event.key) ? -1 : 1) +
              propTabs.length) %
            propTabs.length;

    moveSelectedTabToTop(nextIndex);
    document.getElementById(tabId(propTabs[nextIndex].value))?.focus();
  };

  return (
    <>
      <div
        role="tablist"
        aria-label="Project categories"
        aria-orientation="horizontal"
        className={cn(
          "relative flex w-full max-w-full flex-wrap items-center justify-center gap-1 overflow-x-auto px-3 [perspective:1000px] no-visible-scrollbar sm:justify-start sm:px-8 md:justify-center md:px-0",
          containerClassName
        )}
      >
        {propTabs.map((tab, index) => {
          const isActive = active.value === tab.value;
          return (
            <button
              key={tab.value}
              id={tabId(tab.value)}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId(tab.value)}
              tabIndex={isActive ? 0 : -1}
              onClick={() => moveSelectedTabToTop(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={cn(
                "focus-ring relative rounded-full px-3 py-2 text-sm md:px-4 md:text-base",
                tabClassName
              )}
              style={{ transformStyle: "preserve-3d" }}
            >
              {isActive && (
                <motion.div
                  layoutId={prefersReducedMotion ? undefined : "clickedbutton"}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { type: "spring", bounce: 0.3, duration: 0.6 }
                  }
                  className={cn(
                    "absolute inset-0 rounded-full bg-purple-700 dark:bg-zinc-800",
                    activeTabClassName
                  )}
                />
              )}
              <span className="relative block text-left text-white">
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        hovering={hovering}
        reducedMotion={prefersReducedMotion ?? false}
        className={cn("mt-10 md:mt-16", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  active,
  hovering,
  reducedMotion,
}: {
  className?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
  reducedMotion: boolean;
}) => {
  return (
    <div className="relative grid w-full">
      {tabs.map((tab, index) => {
        const isActive = tab.value === active.value;
        return (
          <motion.div
            key={tab.value}
            layoutId={reducedMotion ? undefined : tab.value}
            role="tabpanel"
            id={panelId(tab.value)}
            aria-labelledby={tabId(tab.value)}
            aria-hidden={!isActive}
            inert={!isActive ? true : undefined}
            initial={false}
            animate={{
              y: reducedMotion || !isActive ? 0 : [0, 40, 0],
            }}
            transition={reducedMotion ? { duration: 0 } : undefined}
            style={{
              scale: 1 - index * 0.1,
              top: hovering && !isActive ? index * -50 : 0,
              zIndex: -index,
              opacity: index < 3 ? 1 - index * 0.1 : 0,
            }}
            className={cn(
              "col-start-1 row-start-1 w-full",
              isActive
                ? "relative"
                : "pointer-events-none absolute left-0 top-0",
              className
            )}
          >
            {tab.content}
          </motion.div>
        );
      })}
    </div>
  );
};
