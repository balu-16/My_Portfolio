import { Mail } from "lucide-react";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 md:py-28">
      <h1 className="mt-6 text-center font-cursive text-3xl md:text-5xl">
        Contact Me
      </h1>
      <p className="mx-auto my-8 w-full max-w-2xl text-center text-white/60 md:text-lg">
        My inbox is always open. Whether you have a question or just want to say
        hello, I&apos;ll try my best to get back to you. Feel free to email me about
        services or new projects.
      </p>
      <div className="flex justify-center">
        <Link
          href="mailto:balarakeshg16@gmail.com"
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-3 font-semibold text-gray-950 transition-opacity hover:opacity-90"
        >
          <Mail aria-hidden="true" className="size-4" />
          Email me
        </Link>
      </div>
    </section>
  );
};
