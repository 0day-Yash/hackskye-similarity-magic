
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tracksData = [
  {
    id: 1,
    title: "HealthTech",
    icon: "🏥",
    description: "Create innovative solutions to improve healthcare accessibility, patient care, or medical processes.",
    challenges: [
      "Build a telemedicine platform for remote diagnostic capabilities",
      "Create a mental health support app with AI-powered interventions",
      "Develop a health data analytics platform that ensures privacy"
    ],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    title: "Sustainability",
    icon: "🌱",
    description: "Tackle environmental challenges with technology solutions that promote sustainability.",
    challenges: [
      "Build a carbon footprint tracker for individuals or businesses",
      "Create a marketplace for recycled or upcycled products",
      "Develop an app to reduce food waste in restaurants or homes"
    ],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 3,
    title: "FinTech",
    icon: "💸",
    description: "Revolutionize financial services with innovative technologies and business models.",
    challenges: [
      "Create a personal finance management tool with predictive insights",
      "Develop a blockchain-based micro-lending platform",
      "Build a financial education platform for young adults"
    ],
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    id: 4,
    title: "Smart Cities",
    icon: "🏙️",
    description: "Design solutions to make urban areas more efficient, sustainable, and livable.",
    challenges: [
      "Build a real-time public transportation tracking system",
      "Create a community-based safety alert application",
      "Develop a smart energy management system for buildings"
    ],
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    id: 5,
    title: "AI for Social Good",
    icon: "🤖",
    description: "Harness the power of artificial intelligence to address pressing social challenges.",
    challenges: [
      "Develop an AI tool to assist in disaster response coordination",
      "Create an AI system to detect fake news and misinformation",
      "Build an accessibility tool using AI for people with disabilities"
    ],
    color: "from-red-500/20 to-pink-500/20"
  },
  {
    id: 6,
    title: "Open Innovation",
    icon: "🚀",
    description: "Create any innovative solution that doesn't fit into the above categories.",
    challenges: [
      "Develop a groundbreaking application using emerging technologies",
      "Create a solution that addresses a specific challenge in your community",
      "Build something completely new that could change the way we interact with technology"
    ],
    color: "from-gray-500/20 to-slate-500/20"
  }
];

const Tracks = () => {
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
              Competition Categories
            </div>
            
            <h2 
              data-animate
              className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animation-delay-200"
            >
              Hackathon Tracks
            </h2>
            
            <p 
              data-animate
              className="text-gray-600 opacity-0 animation-delay-400"
            >
              Choose from six exciting tracks to showcase your innovation and problem-solving skills.
              Each track presents unique challenges and opportunities to make an impact.
            </p>
          </div>
          
          <div 
            data-animate
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animation-delay-600"
          >
            {tracksData.map((track) => (
              <Card 
                key={track.id} 
                className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${track.color}`}></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{track.icon}</span>
                    <CardTitle>{track.title}</CardTitle>
                  </div>
                  <CardDescription className="mt-2">{track.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium text-sm mb-2">Suggested Challenges:</h4>
                  <ul className="space-y-2">
                    {track.challenges.map((challenge, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <span className="text-hackskye-blue mr-2">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
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

export default Tracks;
