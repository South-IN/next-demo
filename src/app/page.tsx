import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import ReviewCards from "@/components/ReviewCards";
import Webinars from "@/components/Webinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.0]">
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <ReviewCards />
      <Webinars />
      <Instructors />
      <Footer />
    </main>
  );
}
