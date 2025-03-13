
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Registration from "@/components/Registration";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-blue-900">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Sponsors />
      <Registration />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
