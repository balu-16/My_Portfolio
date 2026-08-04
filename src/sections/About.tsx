
import AboutImage from "../../public/images/aboutme.png";
import AboutImageMobile from "../../public/images/aboutme_2.png";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const AboutSection = () => {
  return (
    <div
      id="about"
      className="scroll-mt-24 -mt-8 flex items-start justify-center sm:-mt-12 md:-mt-16"
    >
      <ContainerScroll
        titleComponent={
          <div className="-mb-12 flex flex-col items-center justify-center sm:-mb-16 md:mb-0 md:gap-3">
            <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">
              About Me
            </h1>
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
              A glimpse into my world
            </p>
          </div>
        }
      >
        <Image
          src={AboutImage}
          alt="Screenshot of Balarakesh's desktop About section"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top hidden md:block"
          draggable={false}
        />
        <Image
          src={AboutImageMobile}
          alt="Screenshot of Balarakesh's mobile About section"
          height={720}
          width={1600}
          className="mx-auto rounded-2xl object-cover h-full object-left md:hidden "
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};
