"use client";
import courseData from "../data/courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import FeaturedCard from "./FeaturedCard";

export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-4xl text-purple-400 font-semibold tracking-wide">
          Featured Courses
        </h2>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <FeaturedCard course={course} />
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          className="px-4 py-2 font-semibold rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm"
          href={"/courses"}
        >
          View Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
