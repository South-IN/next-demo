"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const reviews = [
  {
    title: "Exceeded Expectations",
    review:
      "This platform exceeded my expectations! The courses are well-structured, and the instructors are incredibly knowledgeable. I've learned so much in such a short time.",
    name: "Alice Johnson",
  },
  {
    title: "Flexible and Engaging",
    review:
      "I love the flexibility of learning at my own pace. The content is engaging, and the community support keeps me motivated. Highly recommended!",
    name: "Michael Smith",
  },
  {
    title: "Perfect for Beginners",
    review:
      "As a beginner, I was a bit nervous, but the step-by-step approach made it easy to follow along. Now I feel confident in my skills!",
    name: "Sarah Williams",
  },
  {
    title: "Comprehensive Curriculum",
    review:
      "The comprehensive curriculum covers everything I need, from basic theory to advanced techniques. It's exactly what I was looking for.",
    name: "David Lee",
  },
  {
    title: "Passionate Instructors",
    review:
      "Great platform! The instructors are passionate and really take the time to explain concepts clearly. I've made more progress here than with any other course.",
    name: "Emily Davis",
  },
];

const ReviewCards = () => {
  return (
    <div className="h-[40rem] w-full bg-white bg-dot-black dark:bg-black dark:bg-dot-white/[0.3]  relative flex flex-col items-center justify-center overflow-hidden ">
      <h2 className="text-black dark:text-white text-5xl font-bold text-center mb-5">
        Reviews
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={reviews} speed="slow" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
