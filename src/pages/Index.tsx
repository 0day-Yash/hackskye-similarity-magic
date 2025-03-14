
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Registration from "@/components/Registration";
import HacksykeHub from "@/components/HacksykeHub";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll function for anchor links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (!href) return;

        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Sponsors />
      <Registration />
      <HacksykeHub />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
