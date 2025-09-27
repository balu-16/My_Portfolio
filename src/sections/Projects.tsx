"use client";

import disImage from "../../public/images/projects/dis.png";
import mailAlert from "../../public/images/projects/mailAlert.png";
import intruderVision from "../../public/images/projects/intruderVision.png";
import games from "../../public/images/projects/games.png";
import kinoVibes from "../../public/images/projects/kinoVibes.png";
import aircursor from "../../public/images/projects/kinoVibes.png";
import handWaveUnlock from "../../public/images/projects/handwave_unlock.png";
import cableBillingSystem from "../../public/images/projects/cableBillingSystem.png";

import ArrowRightIcon from "../../public/icons/arrow-up-right.svg";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import { Card } from "@/components/Card";
import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  {
    name: "Intruder Vision",
    description:
      "An AI-powered security system that detects unauthorized access attempts on Windows systems. Features include capturing intruder's photo via webcam, sending email alerts with photos, and SMS notifications via Twilio for real-time security monitoring.",
    image: intruderVision,
    link: "https://intruder-vision.onrender.com/",
    repo: "https://github.com/balu-16/Intruder_Vision.git",
    tech: ["Python", "OpenCV", "Twilio", "SMTPlib", "WMI"],
    isTopProject: true,
    isAIML: true,
    isMern: true,
    isJava: false,
  },
  {
    name: "MailAlert",
    description:
      "A Python-based email scanning tool that connects to your Gmail inbox and alerts you when an email contains a specific keyword. Features include real-time alerts, IST time conversion, and efficient email monitoring.",
    image: mailAlert,
    link: "https://mailalert.onrender.com/",
    repo: "https://github.com/balu-16/MailAlert.git",
    tech: [
      "Python",
      "Gmail API",
      "Pytz",
      "Email Monitoring"
    ],
    isTopProject: true,
    isAIML: false,
    isMern: true,
    isJava: false,
  },
  {
    name: "HandWave Unlock",
    description:
      "A gesture-based system unlock tool built using MediaPipe and OpenCV. It detects specific hand gestures through a webcam feed and unlocks access without the need for physical contact. Includes a simple frontend with HTML, CSS, and JS integrated via Flask.",
    image: handWaveUnlock,
    link: "https://handwave-unlock.onrender.com",
    repo: "https://github.com/balu-16/HandWave_Unlock.git",
    tech: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Flask",
      "HTML/CSS/JS"
    ],
    isTopProject: true,
    isAIML: true,
    isMern: true,
    isJava: false,
  },
  {
    name: "AirCursor",
    description:
      "An AI-powered virtual mouse system that uses hand gestures to control the cursor in real-time. Built with OpenCV and MediaPipe, it tracks finger movements and maps them to screen coordinates for hands-free navigation.",
    image: aircursor,
    link: "https://github.com/balu-16/AirCursor.git",
    repo: "https://github.com/balu-16/AirCursor.git",
    tech: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Hand Tracking",
      "Computer Vision"
    ],
    isTopProject: true,
    isAIML: true,
    isMern: false,
    isJava: false,
  },
  {
    name: "KinoVibes Movie Streaming Platform",
    description:
      "A powerful movie streaming and downloading platform offering a vast collection of films across various genres. Features include seamless streaming, fast downloads, user-friendly interface, and secure authentication system.",
    image: kinoVibes,
    link: "https://kino-vibes-movie-streaming-platform-git-main-balu-16s-projects.vercel.app",
    repo: "https://github.com/balu-16/KinoVibes-Movie-Streaming-Platform-.git",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "MongoDB"
    ],
    isTopProject: true,
    isAIML: false,
    isMern: true,
    isJava: false,
  },
  {
    name: "Disease Prediction Using Machine Learning",
    description:
      "A machine learning-based disease prediction system that analyzes patient data to provide early diagnosis and actionable health insights.",
    image: disImage,
    repo: "https://github.com/gautham8325/Disease-prediction-from-symptoms",
    link: "https://github.com/gautham8325/Disease-prediction-from-symptoms",
    tech: ["Python Libraries", "Machine Learning Algorithms", "tensorflow", "pytorch"],
    isTopProject: false,
    isAIML: true,
    isMern: false,
    isJava: false,
  },
  {
    name: "GameVerse",
    description:
      "A fun and interactive gaming platform featuring multiple classic games including Rock Paper Scissors, Guess the Number, and Tic-Tac-Toe. Play against the computer or another player with a simple yet engaging design.",
    image: games,
    link: "https://game-verse-rose-nine.vercel.app",
    repo: "https://github.com/balu-16/GameVerse.git",
    tech: ["JavaScript", "HTML", "CSS"],
    isTopProject: false,
    isAIML: false,
    isMern: true,
    isJava: false,
  },
  {
    name: "Cable Billing System",
    description:
      "A real-time cable billing web application built to assist local cable operators. It verifies set-top box numbers, allows users to pay via a generated QR code, and notifies the operator through email upon successful payment. Includes a 'Contact Us' section for support.",
    image: cableBillingSystem, // replace with the actual imported image variable
    link: "https://your-cable-system-demo-link.com/", // replace with actual live demo link if available
    repo: "https://github.com/balu-16/Cable-billing-System.git",
    tech: [
      "Python",
      "Flask",
      "SQLite",
      "Email API",
      "QR Code Generator"
    ],
    isTopProject: true,
    isAIML: false,
    isMern: true,
    isJava: false
  },
];

export function ProjectsSection() {
  const tabs = [
    {
      title: "Top Projects",
      value: "top-projects",
      content: (
        <ScrollArea className="w-full overflow-y-auto relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">
            Top Projects
          </p>
          <ProjectList chosenStack="top-projects" />
        </ScrollArea>
      ),
    },
    {
      title: "AIML Projects",
      value: "aiml",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">AIML</p>
          <ProjectList chosenStack="aiml" />
        </ScrollArea>
      ),
    },
    {
      title: "MERN Stack & HTML/CSS",
      value: "mern",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">MERN Stack</p>
          <ProjectList chosenStack="mern" />
        </ScrollArea>
      ),
    },
    {
      title: "Java Projects",
      value: "java",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">Java</p>
          <ProjectList chosenStack="java" />
        </ScrollArea>
      ),
    },
    {
      title: "All Projects",
      value: "all-projects",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">
            All Projects
          </p>
          <ProjectList chosenStack="all-projects" />
        </ScrollArea>
      ),
    },
  ];

  return (
    <div className=" h-full my-40">
      <div className="container mb-12">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h1>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
      </div>
      <div
        className="h-screen md:h-[60rem] [perspective:1000px] relative flex flex-col  mx-auto  items-center justify-center w-screen md:w-3/4 "
        id="projects"
      >
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const ProjectList = ({ chosenStack }: { chosenStack: string }) => {
  const filteredProjects = projects.filter((project) => {
    if (chosenStack === "aiml") return project.isAIML;
    if (chosenStack === "top-projects") return project.isTopProject;
    if (chosenStack === "mern") return project.isMern;
    if (chosenStack === "java") return project.isJava;
    return true;
  });

  return (
    <div>
      <div className="flex flex-col gap-20 mt-0 md:mt-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (

            <Card
              key={index}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20  last-of-type:mb-36 md:sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl">
                    {project.name}
                  </h3>
                  <hr className="border-white/5 border-t-2 mt-4" />
                  <p className="text-white/60 mt-4 text-sm md:text-base ">
                    {project.description}
                  </p>
                  <ul className="text-white/50 mt-4 flex flex-wrap gap-4 flex-row">
                    {project.tech.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-white/10 p-2 rounded-lg text-white/50 text-small md:text-base"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-row gap-4 items-center justify-start my-8">
                    <Link
                      href={project.link}
                      className="w-2/3 md:w-2/5"
                      target="_blank"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/80   transition-all duration-300">
                        <span>View Live Site</span>
                        <ArrowRightIcon className="size-4 " />
                      </button>
                    </Link>

                    <Link href={project.repo} target="_blank">
                      <button className="bg-black p-2 rounded-full cursor-pointer">
                        <IconBrandGithub className="size-8" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute  lg:h-full lg:w-auto lg:max-w-none rounded-t-lg md:rounded-tl-lg"
                  />
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p>No projects found for the selected filter.</p>
        )}
      </div>
    </div>
  );
};
