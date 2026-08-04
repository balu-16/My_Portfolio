"use client";

import disImage from "../../public/images/projects/dis.png";
import mailAlert from "../../public/images/projects/mailAlert.png";
import intruderVision from "../../public/images/projects/intruderVision.png";
import games from "../../public/images/projects/games.png";
import kinoVibes from "../../public/images/projects/kinoVibes.png";
import aircursor from "../../public/images/projects/kinoVibes.png";
import handWaveUnlock from "../../public/images/projects/handwave_unlock.png";
import cableBillingSystem from "../../public/images/projects/cableBillingSystem.png";
import qubitChat from "../../public/images/projects/qubitchat.png";
import apadhbandhav from "../../public/images/projects/apadhbandhav.png";
import ArrowRightIcon from "../../public/icons/arrow-up-right.svg";

import { Tabs } from "@/components/ui/tabs";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import { Card } from "@/components/Card";

type Project = {
  name: string;
  description: string;
  image: StaticImageData;
  liveLink?: string;
  repo: string;
  tech: string[];
  isTopProject: boolean;
  isAIML: boolean;
  isWeb: boolean;
};

const projects: Project[] = [
  {
    name: "QubitChat",
    description:
      "An AI-powered document intelligence system for PDFs and images that generates embeddings with Gemini API and ChromaDB. It combines classical similarity search with a Qiskit-simulated Grover's Algorithm retrieval pipeline, with an automatic fallback for datasets up to 210 vectors.",
    image: qubitChat,
    repo: "https://github.com/balu-16/IDP_Project.git",
    tech: ["React", "TypeScript", "FastAPI", "Gemini API", "ChromaDB", "Qiskit"],
    isTopProject: true,
    isAIML: true,
    isWeb: false,
  },
  {
    name: "Apadhbandhav",
    description:
      "An IoT-based accident detection and emergency response system supporting normal users, police, hospitals, admins, and super admins. It automates crash alerts through SMS and voice calls, expanding the responder search radius from 5 km to 40 km until help is found.",
    image: apadhbandhav,
    liveLink: "http://apadhbandhav.com/",
    repo: "https://github.com/balu-16/apadhbandhav_complete.git",
    tech: ["React", "TypeScript", "NestJS", "MongoDB", "Redis", "IoT"],
    isTopProject: true,
    isAIML: false,
    isWeb: true,
  },
  {
    name: "Intruder Vision",
    description:
      "An AI-powered security system that detects unauthorized access attempts on Windows systems. Features include capturing an intruder's photo via webcam, sending email alerts with photos, and SMS notifications via Twilio for real-time security monitoring.",
    image: intruderVision,
    liveLink: "https://intruder-vision.onrender.com/",
    repo: "https://github.com/balu-16/Intruder_Vision.git",
    tech: ["Python", "OpenCV", "Twilio", "smtplib", "WMI"],
    isTopProject: true,
    isAIML: true,
    isWeb: false,
  },
  {
    name: "MailAlert",
    description:
      "A Python-based email scanning tool that connects to your Gmail inbox and alerts you when an email contains a specific keyword. Features include real-time alerts, IST time conversion, and efficient email monitoring.",
    image: mailAlert,
    liveLink: "https://mailalert.onrender.com/",
    repo: "https://github.com/balu-16/MailAlert.git",
    tech: ["Python", "Gmail API", "Pytz", "Email Monitoring"],
    isTopProject: true,
    isAIML: false,
    isWeb: false,
  },
  {
    name: "HandWave Unlock",
    description:
      "A gesture-based system unlock tool built using MediaPipe and OpenCV. It detects specific hand gestures through a webcam feed and unlocks access without the need for physical contact. Includes a simple frontend with HTML, CSS, and JavaScript integrated via Flask.",
    image: handWaveUnlock,
    liveLink: "https://handwave-unlock.onrender.com",
    repo: "https://github.com/balu-16/HandWave_Unlock.git",
    tech: ["Python", "OpenCV", "MediaPipe", "Flask", "HTML/CSS/JS"],
    isTopProject: true,
    isAIML: true,
    isWeb: false,
  },
  {
    name: "AirCursor",
    description:
      "An AI-powered virtual mouse system that uses hand gestures to control the cursor in real time. Built with OpenCV and MediaPipe, it tracks finger movements and maps them to screen coordinates for hands-free navigation.",
    image: aircursor,
    repo: "https://github.com/balu-16/AirCursor.git",
    tech: ["Python", "OpenCV", "MediaPipe", "Hand Tracking", "Computer Vision"],
    isTopProject: true,
    isAIML: true,
    isWeb: false,
  },
  {
    name: "KinoVibes Movie Streaming Platform",
    description:
      "A movie streaming and downloading platform offering a collection of films across various genres. Features include seamless streaming, fast downloads, a user-friendly interface, and secure authentication.",
    image: kinoVibes,
    liveLink:
      "https://kino-vibes-movie-streaming-platform-git-main-balu-16s-projects.vercel.app",
    repo: "https://github.com/balu-16/KinoVibes-Movie-Streaming-Platform-.git",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    isTopProject: true,
    isAIML: false,
    isWeb: true,
  },
  {
    name: "Disease Prediction Using Machine Learning",
    description:
      "A machine learning-based disease prediction system that analyzes patient data to provide early diagnosis and actionable health insights.",
    image: disImage,
    repo: "https://github.com/gautham8325/Disease-prediction-from-symptoms",
    tech: ["Python", "scikit-learn", "TensorFlow", "PyTorch"],
    isTopProject: false,
    isAIML: true,
    isWeb: false,
  },
  {
    name: "GameVerse",
    description:
      "A fun and interactive gaming platform featuring multiple classic games including Rock Paper Scissors, Guess the Number, and Tic-Tac-Toe. Play against the computer or another player with a simple yet engaging design.",
    image: games,
    liveLink: "https://game-verse-rose-nine.vercel.app",
    repo: "https://github.com/balu-16/GameVerse.git",
    tech: ["JavaScript", "HTML", "CSS"],
    isTopProject: false,
    isAIML: false,
    isWeb: true,
  },
  {
    name: "Cable Billing System",
    description:
      "A real-time cable billing web application built to assist local cable operators. It verifies set-top box numbers, allows users to pay via a generated QR code, and notifies the operator through email upon successful payment.",
    image: cableBillingSystem,
    repo: "https://github.com/balu-16/Cable-billing-System.git",
    tech: ["Python", "Flask", "SQLite", "Email API", "QR Code Generator"],
    isTopProject: true,
    isAIML: false,
    isWeb: true,
  },
];

const ProjectPanel = ({
  title,
  chosenStack,
}: {
  title: string;
  chosenStack: string;
}) => (
  <div className="w-full rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900">
    <p className="mt-6 text-center font-cursive text-2xl">{title}</p>
    <ProjectList chosenStack={chosenStack} />
  </div>
);

export function ProjectsSection() {
  const tabs = [
    {
      title: "Top Projects",
      value: "top-projects",
      content: <ProjectPanel title="Top Projects" chosenStack="top-projects" />,
    },
    {
      title: "AIML Projects",
      value: "aiml",
      content: <ProjectPanel title="AIML" chosenStack="aiml" />,
    },
    {
      title: "Web Stack",
      value: "web",
      content: <ProjectPanel title="Web Stack" chosenStack="web" />,
    },
    {
      title: "All Projects",
      value: "all-projects",
      content: <ProjectPanel title="All Projects" chosenStack="all-projects" />,
    },
  ];

  return (
    <section className="h-auto py-20 md:py-28">
      <div className="container mb-10 md:mb-12">
        <div className="flex justify-center">
          <p className="text-center font-semibold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h1 className="mt-6 text-center font-cursive text-3xl md:text-5xl">
          Featured Projects
        </h1>
        <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg">
          See how I transformed concepts into engaging digital experiences.
        </p>
      </div>
      <div
        id="projects"
        className="relative mx-auto flex h-auto min-h-[42rem] w-full flex-col items-center justify-start px-3 [perspective:1000px] scroll-mt-24 sm:min-h-[48rem] sm:px-6 md:min-h-[60rem] md:w-3/4 md:px-0"
      >
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
}

const ProjectList = ({ chosenStack }: { chosenStack: string }) => {
  const filteredProjects = projects.filter((project) => {
    if (chosenStack === "aiml") return project.isAIML;
    if (chosenStack === "top-projects") return project.isTopProject;
    if (chosenStack === "web") return project.isWeb;
    return true;
  });

  return (
    <div>
      <div className="mt-0 flex flex-col gap-20 md:mt-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Card
              key={project.name}
              className="last-of-type:mb-24 px-4 pt-6 pb-0 sm:px-6 sm:pt-8 md:sticky md:last-of-type:mb-36 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              style={{ top: `calc(64px + ${index * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div>
                  <h3 className="mt-2 font-serif text-2xl md:text-4xl">
                    {project.name}
                  </h3>
                  <hr className="mt-4 border-t-2 border-white/5" />
                  <p className="mt-4 text-sm text-white/60 md:text-base">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-row flex-wrap gap-2 text-white/50 sm:gap-4">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-lg bg-white/10 p-2 text-xs text-white/70 md:text-base"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="my-8 flex flex-row items-center justify-start gap-4">
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex h-12 w-2/3 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white font-semibold text-gray-950 transition-all duration-300 hover:bg-white/80 md:w-2/5"
                      >
                        <span>View Live Site</span>
                        <ArrowRightIcon aria-hidden="true" className="size-4" />
                      </Link>
                    )}
                    <Link
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                      className="focus-ring inline-flex cursor-pointer rounded-full bg-black p-2"
                    >
                      <IconBrandGithub aria-hidden="true" className="size-8" />
                    </Link>
                  </div>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={`${project.name} project preview`}
                    className="mt-8 -mb-4 rounded-t-lg md:-mb-0 md:rounded-tl-lg lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
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
