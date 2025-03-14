
import { useEffect, useRef } from "react";
import { Code, Lightbulb, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Lightbulb className="w-6 h-6 text-purple-400" />,
    title: "Build Anything",
    description: "Apps, games, hardware—go nuts. No rules, just results."
  },
  {
    icon: <Users className="w-6 h-6 text-purple-400" />,
    title: "Network",
    description: "Rub elbows with Bangalore's tech crew—mentors, judges, future bosses."
  },
  {
    icon: <Code className="w-6 h-6 text-purple-400" />,
    title: "Win Big",
    description: "₹1,00,000 prize pool—hoodies, stickers, startup intros, certificates."
  },
  {
    icon: <Award className="w-6 h-6 text-purple-400" />,
    title: "Bragging Rights",
    description: "Say you hacked at Hacksyke 2.0—India's youth will know the name."
  }
];

const About = () => {
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
    <section id="about" className="py-20 bg-gradient-to-b from-blue-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div ref={containerRef} className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            data-animate
            className="inline-block mb-3 py-1 px-3 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium opacity-0"
          >
            What's Hacksyke?
          </div>
          
          <h2 
            data-animate
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animation-delay-200 text-white"
          >
            India's Wildest Hackathon
          </h2>
          
          <p 
            data-animate
            className="text-gray-300 opacity-0 animation-delay-400"
          >
            Welcome to Hacksyke 2.0—the second edition of CodeQuestt, reborn as India's wildest hackathon 
            franchise. We're kicking off in Bangalore with a 48-hour hybrid showdown where coders, creators, 
            and dreamers build insane stuff for cheap.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              data-animate
              className={cn(
                "bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 shadow-xl hover:shadow-purple-500/5 transition-all duration-300 opacity-0",
                `animation-delay-${(index + 1) * 200}`
              )}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-purple-900/50 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div 
            data-animate
            className="md:w-1/2 opacity-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-10 blur-xl transform -rotate-3"></div>
              <div className="relative bg-black/40 rounded-xl overflow-hidden shadow-xl border border-purple-500/20">
                <div className="aspect-video flex items-center justify-center p-8">
                  <p className="text-gray-300 text-lg">
                    Think epic ideas, sleepless nights, and a shot at greatness—all for ₹900 or less. 
                    This isn't just an event; it's the start of a movement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            data-animate
            className="md:w-1/2 opacity-0 animation-delay-200"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">The Hacksyke Promise</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 flex items-center justify-center bg-purple-900/50 rounded-lg">
                  <span className="text-purple-400 font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-300">Cheap</h4>
                  <p className="text-gray-400">₹900 or less—always.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 flex items-center justify-center bg-purple-900/50 rounded-lg">
                  <span className="text-purple-400 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-300">Cool</h4>
                  <p className="text-gray-400">Wild themes, epic streams, coder cred.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 flex items-center justify-center bg-purple-900/50 rounded-lg">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-300">Yours</h4>
                  <p className="text-gray-400">By India's youth, for India's youth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
