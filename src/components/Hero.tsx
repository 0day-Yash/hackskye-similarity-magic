
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
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
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-black via-purple-900 to-blue-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div ref={containerRef} className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-title chip */}
          <div 
            data-animate
            className="inline-block mb-6 py-1.5 px-4 bg-purple-500/30 text-purple-200 rounded-full text-sm font-medium opacity-0"
          >
            48-Hour Hybrid Hackathon
          </div>
          
          {/* Main Title */}
          <h1 
            data-animate
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tighter opacity-0 animation-delay-200 text-white"
          >
            <span className="block">Welcome to </span>
            <span className="text-gradient bg-gradient-to-r from-purple-300 to-blue-300">Hacksyke 2.0</span>
          </h1>
          
          {/* Subtitle */}
          <p 
            data-animate
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 opacity-0 animation-delay-400"
          >
            India's Hackathon Rebellion Starts Here. 48 Hours of Code, Chaos, and Glory.
          </p>
          
          {/* Info Chips */}
          <div 
            data-animate
            className="flex flex-wrap justify-center gap-4 mb-10 opacity-0 animation-delay-600"
          >
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm py-2 px-4 rounded-full shadow-subtle border border-purple-500/20">
              <Calendar className="w-4 h-4 text-purple-300" />
              <span className="text-sm font-medium text-gray-200">July 17-19, 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm py-2 px-4 rounded-full shadow-subtle border border-purple-500/20">
              <MapPin className="w-4 h-4 text-purple-300" />
              <span className="text-sm font-medium text-gray-200">Bangalore + Online</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm py-2 px-4 rounded-full shadow-subtle border border-purple-500/20">
              <Clock className="w-4 h-4 text-purple-300" />
              <span className="text-sm font-medium text-gray-200">48 Hours</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div 
            data-animate
            className="flex flex-wrap justify-center gap-4 opacity-0 animation-delay-800"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 border-purple-500/30 bg-black/30 text-gray-200 hover:bg-purple-900/30 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
          
          {/* Cost Info */}
          <div 
            data-animate
            className="mt-10 opacity-0 animation-delay-1000"
          >
            <div className="bg-black/50 backdrop-blur-sm inline-block px-6 py-3 rounded-lg border border-purple-500/20">
              <p className="text-gray-200 mb-1">Join from just</p>
              <p className="text-2xl font-bold text-purple-200">₹900 <span className="text-sm font-normal text-gray-300">(offline)</span> or <span className="text-purple-200 font-bold">FREE</span> <span className="text-sm font-normal text-gray-300">(online)</span></p>
              <p className="text-xs text-gray-300 mt-1">*Sponsors might drop it to ₹0—stay tuned!</p>
            </div>
          </div>
        </div>
        
        {/* Floating Visual Elements */}
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-5 animate-float">
          <div className="w-12 h-12 border border-purple-500/30 rounded-lg rotate-[15deg]"></div>
        </div>
        <div className="hidden md:block absolute top-1/4 right-10 animate-float animation-delay-400">
          <div className="w-8 h-8 bg-blue-500/30 rounded-full"></div>
        </div>
        <div className="hidden md:block absolute bottom-10 left-1/4 animate-float animation-delay-600">
          <div className="w-10 h-10 border border-purple-500/30 rounded-md rotate-[35deg]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
