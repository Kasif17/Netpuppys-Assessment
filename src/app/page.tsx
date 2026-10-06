import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Academics from "@/components/Academics";
import WhyChooseUs from "@/components/WhyChooseUs";
import Campus from "@/components/Campus";
import StudentLife from "@/components/StudentLife";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import Testimonials from "@/components/Testimonials";
import NewsEvents from "@/components/NewsEvents";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Highlights />
        <About />
        <Academics />
        <WhyChooseUs />
        <Campus />
        <StudentLife />
        <AdmissionsCTA />
        <Testimonials />
        <NewsEvents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
