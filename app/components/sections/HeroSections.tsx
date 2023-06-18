import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

const HeroSections = () => {
  return (
    <section className="bg-[#1C2431] md:pb-40 pt-16 pb-28 flex relative flex-col px-2 mx-auto text-center max-md:overflow-x-clip gap-12 text-white">
      <div className="relative w-full h-[280px] md:h-[450px] lg:h-[530px]">
        <Image
          src={"/images/illustration-intro.png"}
          alt="intro-image"
          fill
          priority
          className="object-contain z-10"
        />
      </div>
      <div className="md:hidden flex flex-col absolute w-screen self-center bottom-[450px] h-[150px]">
        <Image
          src={"/images/bg-curvy-mobile.svg"}
          alt="curvy-background"
          fill
          className="absolute"
        />
        <div className="w-screen absolute top-[150px] h-[450px] bg-[#181F2A]" />
      </div>
      <div className="z-10 md:w-[60%] self-center max-md:-mx-8 max-md:pt-2 max-md:px-8 flex flex-col gap-10">
        <h1
          className={`md:text-4xl text-3xl font-semibold leading-normal md:leading-normal ${raleway.className}`}
        >
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="leading-6 text-base text-white/70 w-[80%] self-center">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="md:w-[45%] w-[65%] self-center bg-[#65E2D9] hover:bg-[#94e7e1] transition rounded-full py-4">
          Get Started
        </button>
      </div>

      <div className="hidden md:block absolute w-screen self-center bottom-0 h-[400px]">
        <Image
          src={"/images/bg-curvy-desktop.svg"}
          alt="curvy-background"
          fill
        />
      </div>
    </section>
  );
};

export default HeroSections;
