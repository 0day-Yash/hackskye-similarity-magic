// Import necessary dependencies and components
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

// Organizing team data (Only Yash Kulkarni & Rishul Chanana will be displayed)
const organizingTeam = [
  {
    name: "Yash Kulkarni",
    role: "Co-Founder, CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Ethical hacker, and CEO of a cybersecurity startup, passionate about building secure software",
    socials: {
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/yashkulkarni08/",
      github: "https://www.github.com/0day-Yash/",
      email: "yash@yashk.app"
    }
  },
  {
    name: "Rishul Chanana",
    role: "Co-Founder, COO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Master of automations, and tech team management.",
    socials: {
      twitter: "#",
      linkedin: "https://www.linkedin.com/in/rishul-chanana/",
      github: "#",
      email: "#"
    }
  }
];

// Team component to render the list of team members
const Team = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // IntersectionObserver to animate elements on scroll
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

    // Select elements to animate
    const elements = containerRef.current?.querySelectorAll("[data-animate]");
    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }

    // Cleanup function to remove observers
    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main section containing the team details */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        
        {/* Page Header */}
        <div ref={containerRef} className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The People Behind Hackskye
            </h2>
          </div>
          
          {/* Organizing Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Organizing Team</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {organizingTeam.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-subtle overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  {/* Team Member Image */}
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Team Member Details */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold">{member.name}</h4>
                    <p className="text-sm text-hackskye-blue mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                    
                    {/* Social Media Links */}
                    <div className="flex space-x-3">
                      <a href={member.socials.twitter} className="text-gray-400 hover:text-hackskye-blue transition-colors">
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a href={member.socials.linkedin} className="text-gray-400 hover:text-hackskye-blue transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href={member.socials.github} className="text-gray-400 hover:text-hackskye-blue transition-colors">
                        <Github className="h-4 w-4" />
                      </a>
                      <a href={`mailto:${member.socials.email}`} className="text-gray-400 hover:text-hackskye-blue transition-colors">
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
