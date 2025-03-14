
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles, Briefcase, Users } from "lucide-react";

const hubFeatures = [
  {
    icon: <MessageSquare className="w-5 h-5 text-purple-300" />,
    title: "Discord + WhatsApp Community",
    description: "Join our online crew and stay connected with fellow coders year-round."
  },
  {
    icon: <Sparkles className="w-5 h-5 text-purple-300" />,
    title: "Monthly Mini-Hacks",
    description: "Keep your skills sharp with our monthly coding challenges."
  },
  {
    icon: <Users className="w-5 h-5 text-purple-300" />,
    title: "Mentor AMAs",
    description: "Learn from industry experts through regular Ask Me Anything sessions."
  },
  {
    icon: <Briefcase className="w-5 h-5 text-purple-300" />,
    title: "Job Board",
    description: "Exclusive access to internship and job opportunities from our sponsors."
  }
];

const HacksykeHub = () => {
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
    <section id="hub" className="py-20 bg-gradient-to-b from-blue-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div ref={containerRef} className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            data-animate
            className="inline-block mb-3 py-1 px-3 bg-purple-500/30 text-purple-200 rounded-full text-xs font-medium opacity-0"
          >
            Community
          </div>
          
          <h2 
            data-animate
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animation-delay-200 text-white"
          >
            The Hacksyke Hub
          </h2>
          
          <p 
            data-animate
            className="text-gray-200 opacity-0 animation-delay-400"
          >
            This Isn't Goodbye—It's Just the Start. Post-hackathon, join the Hacksyke Hub—our online crew on Discord + WhatsApp. 
            Keep building, flex your projects, and vibe with India's coders year-round.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {hubFeatures.map((feature, index) => (
            <div 
              key={index}
              data-animate
              className={`bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 opacity-0 animation-delay-${(index + 1) * 200}`}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-purple-900/60 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div 
          data-animate
          className="text-center bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-xl p-8 border border-purple-500/30 shadow-xl opacity-0 animation-delay-800 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Hacksyke: Where India's coders go wild</h3>
          <p className="text-gray-200 mb-6">
            July 17–19, 2026. Bangalore + Beyond. Be there.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full px-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Join The Hub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 border-purple-500/30 bg-black/40 text-gray-200 hover:bg-purple-900/30 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HacksykeHub;
