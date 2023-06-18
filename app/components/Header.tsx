"use client";

import Image from "next/image";
import { navItems } from "../libs/constants";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import SignInBox from "./SignInBox";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const [signIn, setSignIn] = useState(false);
  const user = useAuth();

  return (
    <>
      <div
        className={`bg-transparent absolute inset-0 min-h-screen ${
          signIn ? "block z-50" : "hidden"
        }`}
        onClick={() => setSignIn(false)}
      />
      <header className="bg-[#1C2431] relative z-50">
        <Transition
          appear
          show
          enter="ease-out duration-300"
          enterFrom="-translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          as="nav"
          className="header flex container-paddingx items-center justify-between text-white"
        >
          <Link
            href="/"
            className="relative md:w-[180px] md:h-[70px] w-[100px] h-[25px] cursor-pointer"
          >
            <Image
              src={"/images/logo.svg"}
              alt="logo"
              fill
              className="object-contain"
            />
          </Link>
          <div className="md:space-x-12 space-x-6 flex">
            {navItems.map((item: string) => (
              <button
                key={item}
                className="border-b border-transparent text-white/70 hover:text-white hover:border-b-white transition"
              >
                {item}
              </button>
            ))}
            {user.isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <button
                className="border-b border-transparent text-white/70 hover:text-white hover:border-b-white transition"
                onClick={() => setSignIn((prev) => !prev)}
              >
                Sign In
              </button>
            )}
            <SignInBox signIn={signIn} />
          </div>
        </Transition>
      </header>
    </>
  );
};

export default Header;
