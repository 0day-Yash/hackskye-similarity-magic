
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, MapPin, User } from "lucide-react";

const workshopsData = [
  {
    id: 1,
    title: "Introduction to AI & Machine Learning",
    description: "Learn the fundamentals of AI and ML concepts with hands-on projects.",
    date: "June 15, 2026",
    time: "10:00 AM - 1:00 PM",
    venue: "Tech Hall A",
    instructor: "Dr. Samantha Kim",
    seats: 50,
    category: "AI/ML",
    registrationLink: "#register"
  },
  {
    id: 2,
    title: "Web3 & Blockchain Development",
    description: "Dive into decentralized applications and smart contract development.",
    date: "June 15, 2026",
    time: "2:00 PM - 5:00 PM",
    venue: "Innovation Hub",
    instructor: "Alex Rodriguez",
    seats: 40,
    category: "Blockchain",
    registrationLink: "#register"
  },
  {
    id: 3,
    title: "Building with AR/VR Technologies",
    description: "Create immersive experiences with augmented and virtual reality tools.",
    date: "June 16, 2026",
    time: "10:00 AM - 1:00 PM",
    venue: "Design Studio",
    instructor: "Maya Johnson",
    seats: 30,
    category: "AR/VR",
    registrationLink: "#register"
  },
  {
    id: 4,
    title: "Cloud-Native Application Development",
    description: "Master containerization, serverless, and microservices architecture.",
    date: "June 16, 2026",
    time: "2:00 PM - 5:00 PM",
    venue: "Cloud Lab",
    instructor: "Dr. James Chen",
    seats: 45,
    category: "Cloud",
    registrationLink: "#register"
  }
];

const Workshops = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-blue-900">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div ref={containerRef} className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div 
              data-animate
              className="inline-block mb-3 py-1 px-3 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium opacity-0"
            >
              Learn & Connect
            </div>
            
            <h2 
              data-animate
              className="text-3xl md:text-4xl font-bold mb-6 text-white opacity-0 animation-delay-200"
            >
              Workshops & Sessions
            </h2>
            
            <p 
              data-animate
              className="text-gray-300 opacity-0 animation-delay-400"
            >
              Enhance your skills with expert-led workshops before the main hackathon. 
              All workshops are free for registered hackathon participants.
            </p>
          </div>
          
          <div 
            data-animate
            className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 animation-delay-600"
          >
            {workshopsData.map((workshop) => (
              <Card key={workshop.id} className="border border-purple-800 bg-black/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 shadow-purple-900/30 text-white">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold">{workshop.title}</CardTitle>
                    <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-700">
                      {workshop.category}
                    </Badge>
                  </div>
                  <CardDescription className="mt-2 text-gray-300">{workshop.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-300">
                      <CalendarIcon className="mr-2 h-4 w-4 text-purple-400" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Clock className="mr-2 h-4 w-4 text-purple-400" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <MapPin className="mr-2 h-4 w-4 text-purple-400" />
                      <span>{workshop.venue}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <User className="mr-2 h-4 w-4 text-purple-400" />
                      <span>{workshop.instructor}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-sm text-gray-400">Available seats: {workshop.seats}</span>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Register
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Workshops;
