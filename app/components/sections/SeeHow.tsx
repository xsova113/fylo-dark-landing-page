"use client";

import Image from "next/image";
import { Raleway } from "next/font/google";
import { Link } from "react-scroll";
import { BsArrowRightCircleFill } from "react-icons/bs";

const raleway = Raleway({ subsets: ["latin"] });

const SeeHow = () => {
  return (
    <section className="flex flex-col items-center gap-12 md:flex-row md:pt-32 pt-20 container-paddingx mx-4 text-white">
      <div className="relative md:w-1/2 w-full md:h-[450px] h-[300px]">
        <Image
          src={"/images/illustration-stay-productive.png"}
          alt="illustration"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col md:w-1/2 gap-6">
        <h1
          className={`md:text-4xl text-3xl font-semibold leading-normal md:leading-normal ${raleway.className}`}
        >
          Stay productive,
          <br /> wherever you are
        </h1>
        <p className="text-white/80">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
          <br />
          <br />
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <Link
          to="header"
          smooth
          className="flex gap-2 border-b border-b-transparent group hover:border-b-white w-fit cursor-pointer transition items-center"
        >
          <span className="hover:text-white text-[#64dfd9] transition">
            See how Fylo works
          </span>
          <BsArrowRightCircleFill className="fill-[#64dfd9] group-hover:fill-white transition" />
        </Link>
      </div>
    </section>
  );
};

export default SeeHow;
