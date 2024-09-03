import React from "react";
import { IconCurrencyDollar } from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import coursesData from "@/data/courses.json";
import Skeleton from "@/components/Skeleton";

const page = () => {
  const courses = coursesData.courses;
  const items = courses.map((course) => ({
    key: course.id,
    title: course.title,
    description: course.description,
    header: <Skeleton />,
    icon: (
      <span className="flex justify-center items-center">
        <IconCurrencyDollar />
        {course.price}
      </span>
    ),
  }));
  return (
    <div className="bg-neutral-100 dark:bg-gray-900 mt-20 p-4 relative z-10 w-full text-center">
      <h1 className="mt-20 md:mt-0 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 text-4xl md:text-7xl">
        All courses
      </h1>
      <div>
        <BentoGrid className="max-w-4xl mx-auto">
          {" "}
          {items.map((item, i) => (
            <BentoGridItem
              key={item.key}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={
                i === 1 || i == 5 || i === 2 || i == 7 || i == 9 || i == 10
                  ? "md:col-span-2"
                  : ""
              }
            />
          ))}{" "}
        </BentoGrid>
      </div>
    </div>
  );
};

export default page;
