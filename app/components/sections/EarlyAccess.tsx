"use client";

import React from "react";
import { Raleway } from "next/font/google";
import { FieldValues, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const raleway = Raleway({ subsets: ["latin"] });

const EarlyAccess = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({ mode: "onChange" });

  function handleSubmit() {
    toast.success(email + " has submitted successfully!");
  }

  const email = watch("email");

  return (
    <section className="relative -bottom-32">
      <Toaster />
      <div className="md:w-[60%] md:mx-auto mx-8 rounded-xl text-white text-center bg-[#1C2431] py-12">
        <div className="md:mx-16 space-y-7 mx-4">
          <h1
            className={`md:text-3xl text-2xl font-semibold ${raleway.className}`}
          >
            Get early access today
          </h1>
          <p className="text-white/80 md:w-[90%] mx-auto pb-3">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className="flex flex-col md:flex-row md:gap-12 gap-6">
            <div className="flex flex-col md:w-[60%] gap-1 relative">
              <input
                type="email"
                id="email"
                placeholder="johnappleseed@gmail.com"
                className=" px-8 py-3 rounded-full outline-none text-black"
                {...register("email", {
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />

              <span
                className={`${
                  errors.email?.message
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
                } text-[#FF4242] text-xs transition absolute left-7 -bottom-[18px]`}
              >
                {errors.email?.message ? errors.email.message.toString() : ""}
              </span>
            </div>

            <button
              className="bg-gradient-to-br from-[#65E2D9] to-[#339ECC] hover:to-[#65E2D9] px-8 max-md:py-3 rounded-full h-12"
              disabled={!!errors.email || !email}
              onClick={handleSubmit}
            >
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
