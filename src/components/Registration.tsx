
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Gift, Sparkles, Trophy, Users, Laptop } from "lucide-react";

const benefits = [
  {
    icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    title: "Premium Swag",
    description: "Receive exclusive Hacksyke merchandise and sponsor goodies."
  },
  {
    icon: <Clock className="w-5 h-5 text-purple-400" />,
    title: "48 Hours of Hacking",
    description: "Unlimited access to our venue and resources for the entire event."
  },
  {
    icon: <Gift className="w-5 h-5 text-purple-400" />,
    title: "Free Meals & Snacks",
    description: "Enjoy complimentary meals, beverages, and midnight snacks."
  },
  {
    icon: <Trophy className="w-5 h-5 text-purple-400" />,
    title: "Exciting Prizes",
    description: "Win cash prizes, gadgets, and opportunities worth over ₹1,00,000."
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
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-900 via-purple-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div ref={containerRef} className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div 
            data-animate
            className="md:w-1/2 opacity-0"
          >
            <div className="inline-block mb-3 py-1 px-3 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
              Join Us
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Join India's Hackathon Rebellion?
            </h2>
            
            <p className="text-gray-300 mb-8">
              Registration for Hacksyke 2.0 is now open! Secure your spot at 
              India's wildest hackathon and prepare for a weekend 
              of coding, creativity, and chaos.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 flex items-center justify-center bg-purple-900/50 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{benefit.title}</h3>
                    <p className="text-xs text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Apply Now
            </Button>
          </div>
          
          <div 
            data-animate
            className="md:w-1/2 opacity-0 animation-delay-200"
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-purple-500/20">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center text-white">Registration Information</h3>
                
                <div className="space-y-6">
                  <div className="bg-purple-900/30 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-purple-900/50 rounded-lg">
                        <Users className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Offline (Bangalore)</h4>
                        <p className="text-xs text-gray-400">100 spots available</p>
                      </div>
                    </div>
                    <div className="bg-purple-500/20 px-3 py-1 rounded text-purple-300 font-medium">
                      ₹900
                    </div>
                  </div>
                  
                  <div className="bg-purple-900/30 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-purple-900/50 rounded-lg">
                        <Laptop className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Online (Nationwide)</h4>
                        <p className="text-xs text-gray-400">200+ spots available</p>
                      </div>
                    </div>
                    <div className="bg-purple-500/20 px-3 py-1 rounded text-purple-300 font-medium">
                      FREE
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 border border-purple-500/30">
                    <h4 className="text-sm font-semibold text-purple-300 mb-1">The Hacksyke Hub</h4>
                    <p className="text-xs text-gray-400">
                      Post-hackathon, join the Hacksyke Hub—our online crew on Discord + WhatsApp. 
                      Keep building, flex your projects, and vibe with India's coders year-round.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/40 p-6 text-center">
                <p className="text-sm text-gray-400 mb-2">
                  Registration Deadline: July 10, 2026
                </p>
                <p className="text-sm">
                  <span className="text-gray-400">First come, first served. </span>
                  <a href="mailto:info@hacksyke.com" className="text-purple-300 hover:underline">
                    Contact us at info@hacksyke.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
