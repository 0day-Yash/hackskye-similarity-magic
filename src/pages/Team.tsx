
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

// Sample team data
const organizingTeam = [
  {
    name: "Alex Chen",
    role: "Hackathon Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Tech entrepreneur with 10+ years of experience organizing hackathons globally",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "alex@hackskye.com"
    }
  },
  {
    name: "Sophia Rodriguez",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Senior software engineer passionate about mentoring the next generation of developers",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "sophia@hackskye.com"
    }
  },
  {
    name: "Michael Johnson",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Event management specialist with experience running large-scale tech conferences",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "michael@hackskye.com"
    }
  },
  {
    name: "Emma Patel",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Digital marketing expert focused on building communities in the tech space",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "emma@hackskye.com"
    }
  }
];

const advisoryBoard = [
  {
    name: "Dr. Sarah Kim",
    role: "Technical Advisor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "AI researcher and professor with expertise in machine learning applications",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "sarah@example.com"
    }
  },
  {
    name: "James Wilson",
    role: "Industry Advisor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Venture capitalist with a focus on early-stage startups in the tech sector",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      email: "james@example.com"
    }
  }
];

const Team = () => {
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

  // Smooth scroll to top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-hackskye-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-hackskye-blue/5 rounded-full blur-3xl"></div>
        </div>
        
        <div ref={containerRef} className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div 
              data-animate
              className="inline-block mb-3 py-1 px-3 bg-hackskye-blue/10 text-hackskye-blue rounded-full text-xs font-medium opacity-0"
            >
              Meet The Team
            </div>
            
            <h2 
              data-animate
              className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animation-delay-200"
            >
              The People Behind Hackskye
            </h2>
            
            <p 
              data-animate
              className="text-gray-600 opacity-0 animation-delay-400"
            >
              Our dedicated team of professionals works tirelessly to create an 
              unforgettable hackathon experience for all participants.
            </p>
          </div>
          
          {/* Organizing Team */}
          <div data-animate className="mb-16 opacity-0 animation-delay-600">
            <h3 className="text-2xl font-bold mb-8 text-center">Organizing Team</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {organizingTeam.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-subtle overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-semibold">{member.name}</h4>
                    <p className="text-sm text-hackskye-blue mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                    
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
          
          {/* Advisory Board */}
          <div data-animate className="opacity-0 animation-delay-800">
            <h3 className="text-2xl font-bold mb-8 text-center">Advisory Board</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {advisoryBoard.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-subtle overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col md:flex-row"
                >
                  <div className="md:w-1/3 aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <h4 className="text-lg font-semibold">{member.name}</h4>
                    <p className="text-sm text-hackskye-blue mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                    
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
          
          {/* Join the Team CTA */}
          <div 
            data-animate
            className="mt-16 bg-hackskye-light-gray p-8 rounded-xl text-center max-w-2xl mx-auto opacity-0 animation-delay-1000"
          >
            <h3 className="text-xl font-bold mb-4">Join Our Team</h3>
            <p className="text-gray-600 mb-6">
              Passionate about hackathons and want to help create an amazing experience? 
              We're always looking for volunteers and team members to join our community.
            </p>
            <a 
              href="mailto:team@hackskye.com" 
              className="inline-block bg-hackskye-blue text-white py-2 px-6 rounded-full hover:bg-hackskye-blue/90 transition-colors"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
