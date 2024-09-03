"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of experience. Our expert instructors are passionate about teaching and are dedicated to helping you master new skills. With personalized guidance and real-world insights, you'll gain the confidence to excel in your musical journey.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
        Expert Instructors
      </div>
    ),
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Our courses are designed to cover everything from the basics to advanced techniques. Whether you're a beginner or an experienced musician, our comprehensive curriculum ensures that you get the most out of your learning experience. Every lesson is structured to build your skills step by step.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Comprehensive Curriculum
      </div>
    ),
  },
  {
    title: "Flexible Learning",
    description:
      "Learn at your own pace, on your own schedule. Our platform allows you to access lessons anytime, anywhere, making it easy to fit your learning into your busy life. Whether you prefer to practice during the day or night, our courses are always available.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
        Flexible Learning
      </div>
    ),
  },
  {
    title: "Community Support",
    description:
      "Join a community of like-minded learners and musicians. Share your progress, get feedback, and collaborate with others on your musical journey. Our platform fosters a supportive environment where you can grow and stay motivated.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        Community Support
      </div>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
