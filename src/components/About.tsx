
import { useEffect, useRef } from "react";
import { Code, Lightbulb, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Lightbulb className="w-6 h-6 text-hackskye-blue" />,
    title: "Innovation",
    description: "Explore cutting-edge technologies and push the boundaries of what's possible."
  },
  {
    icon: <Users className="w-6 h-6 text-hackskye-blue" />,
    title: "Collaboration",
    description: "Connect with talented individuals and form teams to create something amazing."
  },
  {
    icon: <Code className="w-6 h-6 text-hackskye-blue" />,
    title: "Learning",
    description: "Expand your skillset through workshops, mentorship, and hands-on experience."
  },
  {
    icon: <Award className="w-6 h-6 text-hackskye-blue" />,
    title: "Recognition",
    description: "Showcase your projects to industry leaders and win exciting prizes."
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
    <section id="about" className="py-20 bg-hackskye-light-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-hackskye-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div ref={containerRef} className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            data-animate
            className="inline-block mb-3 py-1 px-3 bg-hackskye-blue/10 text-hackskye-blue rounded-full text-xs font-medium opacity-0"
          >
            About Hackskye
          </div>
          
          <h2 
            data-animate
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animation-delay-200"
          >
            The Ultimate Innovation Experience
          </h2>
          
          <p 
            data-animate
            className="text-gray-600 opacity-0 animation-delay-400"
          >
            Hackskye 2026 is a premier hackathon that brings together developers, 
            designers, and innovators from around the world. Our mission is to 
            inspire creativity, foster collaboration, and showcase the 
            next generation of technology solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              data-animate
              className={cn(
                "bg-white rounded-xl p-6 shadow-subtle hover:shadow-md transition-all duration-300 opacity-0",
                `animation-delay-${(index + 1) * 200}`
              )}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-hackskye-blue/10 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div 
            data-animate
            className="md:w-1/2 opacity-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-hackskye-blue rounded-xl opacity-10 blur-xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-subtle">
                <div className="aspect-video bg-hackskye-dark-blue/5 flex items-center justify-center">
                  <span className="text-hackskye-blue font-medium">Event Photo</span>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            data-animate
            className="md:w-1/2 opacity-0 animation-delay-200"
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-5">
              At Hackskye, we believe in the power of technology to transform lives and 
              create a better future. Our hackathon is designed to be a catalyst for 
              innovation, providing a platform for talented individuals to develop solutions 
              to real-world problems.
            </p>
            <p className="text-gray-600">
              Whether you're a seasoned developer or just starting your journey in tech, 
              Hackskye offers an inclusive environment where everyone can learn, grow, 
              and make meaningful contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
