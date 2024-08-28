import FeaturedCourses from "@/components/FeaturedCourses";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.0]">
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
    </main>
  );
}
