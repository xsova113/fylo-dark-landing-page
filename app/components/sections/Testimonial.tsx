import React from "react";
import { testimonials } from "@/app/libs/constants";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="text-white relative container-paddingx mx-4 max-md:mx-4 mt-20 md:mt-16">
      <div className="absolute w-[45px] h-[45px] md:w-[60px] md:h-[60px] -top-3 left-7 md:top-0 md:left-[86px] -z-10">
        <Image
          src={"/images/bg-quotes.png"}
          alt="background-quotes"
          fill
          className="object-contain"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="bg-[#202A3C] pt-10 md:pb-6 pb-8 px-6 space-y-8 rounded-lg"
          >
            <p className="text-white/70">{item.paragraph}</p>
            <div className="flex gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src={item.avatar}
                  alt="avatar"
                  fill
                  className="object-contain rounded-full"
                />
              </div>

              <div className="flex flex-col gap-1 text-xs self-end">
                <span>{item.name}</span>
                <span className="text-white/70 text-[9px]">
                  {item.position}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
