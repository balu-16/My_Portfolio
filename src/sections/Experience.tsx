"use client";

import { EvervaultCard } from "@/components/ui/evervault-card";
import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandPhp,
  IconBrandPython,
  IconGitPullRequest,
  IconTerminal2,
  IconBrandHtml5,
  IconBrandCss3,
  IconGrain,
  IconSql,
} from "@tabler/icons-react";

export const Experience = () => {
  const skills = [
    { name: "C", logo: <IconTerminal2 className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "C++", logo: <IconTerminal2 className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "Python", logo: <IconBrandPython className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "PHP", logo: <IconBrandPhp className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "TypeScript", logo: <IconBrandTypescript className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "JavaScript", logo: <IconBrandJavascript className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "React", logo: <IconBrandReact className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "Tailwind CSS", logo: <IconBrandTailwind className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "Node.js", logo: <IconBrandNodejs className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "MongoDB", logo: <IconBrandMongodb className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "Express.js", logo: <IconGrain className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "SQL", logo: <IconSql className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "Git & GitHub", logo: <IconGitPullRequest className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "HTML", logo: <IconBrandHtml5 className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "CSS", logo: <IconBrandCss3 className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
    { name: "MERN Stack", logo: <IconBrandReact className="size-14 md:size-20 lg:size-24" stroke={1.25} /> },
  ];

  const experience = [
    {
      title: "Web Developer Intern, AddWise Tech Innovations",
      date: "May 2025 – July 2025",
      description: `
      Engineered a digital certification management suite for 100+ learners across 10+ institutes, including OTP authentication, Supabase integration, and dynamically generated QR-coded PDFs.
      Deployed asynchronous mail workflows and serverless certificate distribution through Vercel functions, with end-to-end delivery within 5 seconds and full audit traceability.`,
    },
    {
      title: "Software Developer Intern, NighaTech Global",
      date: "August 2025 – April 2026",
      description: `
      Architected claverIt, a unified personal-business ecosystem supporting four operational modes with trust-priority caller identification and consent-gated contact intelligence.
      Orchestrated role-based user-business chat, appointment booking, and calendar reminders with event-driven notifications through OneSignal.`,
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 flex flex-col items-center justify-center py-16 md:py-24"
    >
      <h1 className="mt-6 text-center font-cursive text-3xl md:text-5xl">
        Skills
      </h1>
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mt-4 mb-8 max-w-md mx-auto">
        A small list of cool things I use to construct my projects.
      </p>

      <div className="grid w-[92%] grid-cols-2 gap-px sm:w-4/5 md:w-3/4 md:grid-cols-3 lg:grid-cols-6">
        {skills.map((item) => (
          <div
            className="min-w-0 border border-white/20 p-2 sm:p-3 md:p-4"
            key={item.name}
          >
            <EvervaultCard text={item.name} icon={item.logo} />
          </div>
        ))}
      </div>

      <h1 className="mt-16 text-center font-cursive text-3xl md:text-5xl">Experience</h1>
      <div className="mx-auto mt-8 w-[92%] space-y-8 sm:w-4/5 md:w-3/4">
        {experience.map((item, index) => (
          <div
            key={index}
            className="transform rounded-lg bg-gray-800 p-6 shadow-lg transition-transform duration-300 motion-safe:hover:scale-105 motion-safe:hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white">{item.title}</h2>
            <p className="text-white/60 mt-2">{item.date}</p>
            <p className="text-white/70 mt-4 whitespace-pre-line">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
