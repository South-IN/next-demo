"use client";
import Link from "next/link";
import webinarsData from "@/data/webinars.json";
import { HoverEffect } from "./ui/card-hover-effect";

export interface Webinar {
  title: string;
  description: string;
  isFeatured: boolean;
}
const Webinars = () => {
  const featuredWebinars = webinarsData.webinars.filter(
    (webinar: Webinar) => webinar.isFeatured
  );

  return (
    <div className="p-12 bg-neutral-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-4xl text-purple-400 font-semibold tracking-wide">
            Featured Webinar
          </h2>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar: Webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            className="px-4 py-2 font-semibold rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm"
            href={"/"}
          >
            View all webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Webinars;
