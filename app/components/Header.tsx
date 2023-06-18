"use client";

import Image from "next/image";
import { navItems } from "../libs/constants";
import { Transition } from "@headlessui/react";

const Header = () => {
  return (
    <header className="bg-[#1C2431]">
      <Transition
        appear
        show
        enter="ease-out duration-300"
        enterFrom="-translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        as="nav"
        className="header flex container-paddingx items-center justify-between text-white"
      >
        <div className="relative md:w-[180px] md:h-[70px] w-[100px] h-[25px] cursor-pointer">
          <Image src={"/images/logo.svg"} alt="logo" fill className="object-contain"/>
        </div>
        <div className="md:space-x-12 space-x-6">
          {navItems.map((item) => (
            <span
              key={item}
              className="border-b border-transparent text-white/70 hover:text-white hover:border-b-white cursor-pointer transition"
            >
              {item}
            </span>
          ))}
        </div>
      </Transition>
    </header>
  );
};

export default Header;
