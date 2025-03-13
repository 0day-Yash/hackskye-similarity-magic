
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlobeIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const speakersData = [
  {
    id: 1,
    name: "Dr. Sophia Martinez",
    role: "AI Research Lead, TechGiant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Dr. Martinez leads groundbreaking research in generative AI and has published over 50 papers in top conferences.",
    topic: "The Future of Generative AI in Product Development",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    bio: "With 15+ years experience in scaling startups, Michael has mentored over 100 tech founders across the globe.",
    topic: "From Hackathon to Unicorn: Building Scalable Products",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com",
  },
  {
    id: 3,
    name: "Aisha Johnson",
    role: "Blockchain Research Scientist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    bio: "Aisha is pioneering work in sustainable blockchain technologies and decentralized systems.",
    topic: "Web3 Technologies: Beyond the Hype",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    role: "Professor of Quantum Computing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Dr. Wilson has made significant contributions to quantum algorithms and their applications in machine learning.",
    topic: "Quantum Computing: The Next Computing Revolution",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com",
  },
  {
    id: 5,
    name: "Elena Garcia",
    role: "Head of Design, DesignLabs",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "Elena has led design teams at multiple Fortune 500 companies and specializes in accessible user experiences.",
    topic: "Human-Centered Design in Tech Products",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com",
  },
  {
    id: 6,
    name: "Raj Patel",
    role: "Venture Capitalist, TechFund",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Raj has invested in over 30 successful startups and has a keen eye for identifying disruptive technologies.",
    topic: "What VCs Look for in Technical Founders",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com",
  }
];

const Speakers = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-white to-hackskye-light-gray">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-hackskye-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-hackskye-blue/5 rounded-full blur-3xl"></div>
        </div>
        
        <div ref={containerRef} className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div 
              data-animate
              className="inline-block mb-3 py-1 px-3 bg-hackskye-blue/10 text-hackskye-blue rounded-full text-xs font-medium opacity-0"
            >
              Industry Experts
            </div>
            
            <h2 
              data-animate
              className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animation-delay-200"
            >
              Featured Speakers
            </h2>
            
            <p 
              data-animate
              className="text-gray-600 opacity-0 animation-delay-400 mb-8"
            >
              Learn from and connect with industry leaders, innovators, and experts who will share their insights 
              and experiences at HackSkye 2026.
            </p>
          </div>
          
          <div 
            data-animate
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 animation-delay-600"
          >
            {speakersData.map((speaker) => (
              <Card 
                key={speaker.id} 
                className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
              >
                <div className="aspect-[3/2] w-full overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{speaker.name}</CardTitle>
                  <CardDescription className="font-medium text-hackskye-blue">
                    {speaker.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-600 mb-4">{speaker.bio}</p>
                  <div className="bg-hackskye-blue/5 p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium">Speaking On:</p>
                    <p className="text-sm text-gray-700">{speaker.topic}</p>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="icon" className="rounded-full w-8 h-8" asChild>
                      <a href={speaker.twitter} target="_blank" rel="noopener noreferrer">
                        <TwitterIcon className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-8 h-8" asChild>
                      <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-8 h-8" asChild>
                      <a href={speaker.website} target="_blank" rel="noopener noreferrer">
                        <GlobeIcon className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Speakers;
