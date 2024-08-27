import React from "react";
import { Course } from "./FeaturedCourses";
import Link from "next/link";
interface CardProps {
  course: Course;
}
const FeaturedCard: React.FC<CardProps> = ({ course }) => {
  return (
    <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
      <img className="rounded-lg bg-cover max-w-full" src={course.image}></img>
      <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        {course.title}
      </p>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
        {course.description}
      </p>
      <Link
        className="mt-4 border rounded-md p-2 hover:bg-white hover:text-black"
        href={`/courses/${course.slug}`}
      >
        Learn more
      </Link>
    </div>
  );
};

export default FeaturedCard;
