"use client";

import { AuroraBackground } from "./ui/aurora-background";
import Link from "next/link";
import instructorsData from "@/data/instructors.json";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Instructors = () => {
  const instructors = instructorsData.instructors;
  return (
    <AuroraBackground>
      <div className="text-center">
        <h2 className="text-8xl text-white/80 font-semibold tracking-wide">
          Our Instructors
        </h2>
        <p className="mt-4 md:text-lg text-neutral-200 mx-w-lg mx-auto">
          At our music academy, we believe that the right teacher can make all
          the difference in your learning journey. That’s why we’ve gathered a
          team of passionate and experienced instructors who are dedicated to
          helping you achieve your musical goals. Whether you’re a beginner or
          an advanced musician, our instructors are here to guide, inspire, and
          support you every step of the way.
        </p>
      </div>
      <div className="mt-10 flex gap-4">
        <AnimatedTooltip items={instructors} />
      </div>
    </AuroraBackground>
  );
};

export default Instructors;
