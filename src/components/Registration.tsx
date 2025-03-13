
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Gift, Sparkles, Trophy } from "lucide-react";

const benefits = [
  {
    icon: <Sparkles className="w-5 h-5 text-hackskye-blue" />,
    title: "Premium Swag",
    description: "Receive exclusive Hackskye merchandise and sponsor goodies."
  },
  {
    icon: <Clock className="w-5 h-5 text-hackskye-blue" />,
    title: "48 Hours of Hacking",
    description: "Unlimited access to our venue and resources for the entire event."
  },
  {
    icon: <Gift className="w-5 h-5 text-hackskye-blue" />,
    title: "Free Meals & Snacks",
    description: "Enjoy complimentary meals, beverages, and midnight snacks."
  },
  {
    icon: <Trophy className="w-5 h-5 text-hackskye-blue" />,
    title: "Exciting Prizes",
    description: "Win cash prizes, gadgets, and opportunities worth over $50,000."
  }
];

const Registration = () => {
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
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-hackskye-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div ref={containerRef} className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div 
            data-animate
            className="md:w-1/2 opacity-0"
          >
            <div className="inline-block mb-3 py-1 px-3 bg-hackskye-blue/10 text-hackskye-blue rounded-full text-xs font-medium">
              Join Us
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Hack Your Way to the Future?
            </h2>
            
            <p className="text-gray-600 mb-8">
              Registration for Hackskye 2026 is now open! Secure your spot at 
              the world's most innovative hackathon and prepare for a weekend 
              of coding, creativity, and collaboration.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 flex items-center justify-center bg-hackskye-blue/10 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{benefit.title}</h3>
                    <p className="text-xs text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-hackskye-blue hover:bg-hackskye-blue/90 text-white rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Apply Now
            </Button>
          </div>
          
          <div 
            data-animate
            className="md:w-1/2 opacity-0 animation-delay-200"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-subtle border border-gray-100">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center">Registration Information</h3>
                
                <div className="space-y-6">
                  <div className="bg-hackskye-light-gray rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold">Early Bird</h4>
                      <p className="text-xs text-gray-600">Until March 31, 2026</p>
                    </div>
                    <div className="bg-hackskye-blue/10 px-3 py-1 rounded text-hackskye-blue font-medium">
                      $75
                    </div>
                  </div>
                  
                  <div className="bg-hackskye-light-gray rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold">Regular Admission</h4>
                      <p className="text-xs text-gray-600">April 1 - May 31, 2026</p>
                    </div>
                    <div className="bg-hackskye-blue/10 px-3 py-1 rounded text-hackskye-blue font-medium">
                      $100
                    </div>
                  </div>
                  
                  <div className="bg-hackskye-light-gray rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold">Late Registration</h4>
                      <p className="text-xs text-gray-600">June 1 - June 10, 2026</p>
                    </div>
                    <div className="bg-hackskye-blue/10 px-3 py-1 rounded text-hackskye-blue font-medium">
                      $125
                    </div>
                  </div>
                  
                  <div className="bg-hackskye-blue/5 rounded-lg p-4 border border-hackskye-blue/20">
                    <h4 className="text-sm font-semibold text-hackskye-blue mb-1">Student Discount</h4>
                    <p className="text-xs text-gray-600">
                      Students receive a 50% discount on all registration tiers. 
                      Valid student ID required.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-hackskye-light-gray p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">
                  Questions about registration?
                </p>
                <a href="mailto:info@hackskye.com" className="text-sm font-medium text-hackskye-blue hover:underline">
                  Contact us at info@hackskye.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
