
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar, MapPin, Users } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll("[data-animate]");
    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-hackskye-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-hackskye-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div ref={containerRef} className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-title chip */}
          <div 
            data-animate
            className="inline-block mb-6 py-1.5 px-4 bg-hackskye-blue/10 text-hackskye-blue rounded-full text-sm font-medium opacity-0"
          >
            48-Hour Coding Competition
          </div>
          
          {/* Main Title */}
          <h1 
            data-animate
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tighter opacity-0 animation-delay-200"
          >
            <span className="block">Welcome to </span>
            <span className="text-gradient">Hackskye 2026</span>
          </h1>
          
          {/* Subtitle */}
          <p 
            data-animate
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 opacity-0 animation-delay-400"
          >
            Join the most innovative minds from around the globe for an unforgettable 
            weekend of creativity, collaboration, and cutting-edge technology.
          </p>
          
          {/* Info Chips */}
          <div 
            data-animate
            className="flex flex-wrap justify-center gap-4 mb-10 opacity-0 animation-delay-600"
          >
            <div className="flex items-center gap-2 bg-white py-2 px-4 rounded-full shadow-subtle">
              <Calendar className="w-4 h-4 text-hackskye-blue" />
              <span className="text-sm font-medium">June 12-14, 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white py-2 px-4 rounded-full shadow-subtle">
              <MapPin className="w-4 h-4 text-hackskye-blue" />
              <span className="text-sm font-medium">San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2 bg-white py-2 px-4 rounded-full shadow-subtle">
              <Users className="w-4 h-4 text-hackskye-blue" />
              <span className="text-sm font-medium">1000+ Participants</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div 
            data-animate
            className="flex flex-wrap justify-center gap-4 opacity-0 animation-delay-800"
          >
            <Button 
              size="lg" 
              className="bg-hackskye-blue hover:bg-hackskye-blue/90 text-white rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 border-hackskye-dark-blue/20 hover:bg-hackskye-dark-blue/5 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Floating Visual Elements */}
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-5 animate-float">
          <div className="w-12 h-12 border border-hackskye-blue/20 rounded-lg rotate-[15deg]"></div>
        </div>
        <div className="hidden md:block absolute top-1/4 right-10 animate-float animation-delay-400">
          <div className="w-8 h-8 bg-hackskye-blue/10 rounded-full"></div>
        </div>
        <div className="hidden md:block absolute bottom-10 left-1/4 animate-float animation-delay-600">
          <div className="w-10 h-10 border border-hackskye-blue/20 rounded-md rotate-[35deg]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
