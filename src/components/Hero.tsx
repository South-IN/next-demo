import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full bg-neutral-100 dark:bg-gray-900 rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto p-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-500 dark:invert text-4xl md:text-7xl">
          Your Journey Music Starts Here
        </h1>
        <p className="mt-4 md:text-lg text-gray-800 dark:text-neutral-200 mx-w-lg mx-auto">
          Unlock your musical potential with our comprehensive courses, designed
          for both beginners taking their first steps and advanced musicians
          looking to refine their craft. Whether you're learning to play an
          instrument, exploring music theory, or aiming to master complex
          techniques, our expert instructors are here to guide you every step of
          the way. Start your journey with us and turn your passion for music
          into mastery.
        </p>
        <div className="mt-5">
          <Link className="" href="/courses">
            <button className="px-12 py-4 rounded-full bg-[#59189a4e] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#5a189a] transition-colors duration-200">
              Explore courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
