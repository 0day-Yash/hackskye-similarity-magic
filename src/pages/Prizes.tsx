
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Gift, Trophy, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample prizes data
const mainPrizes = [
  {
    place: "1st Place",
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    prize: "$10,000",
    color: "from-yellow-500/20 to-yellow-300/20",
    borderColor: "border-yellow-500/30",
    description: "Cash prize, mentorship opportunities, and industry recognition"
  },
  {
    place: "2nd Place",
    icon: <Trophy className="h-8 w-8 text-gray-400" />,
    prize: "$5,000",
    color: "from-gray-400/20 to-gray-300/20",
    borderColor: "border-gray-400/30",
    description: "Cash prize and tech equipment package"
  },
  {
    place: "3rd Place",
    icon: <Trophy className="h-8 w-8 text-amber-700" />,
    prize: "$2,500",
    color: "from-amber-700/20 to-amber-600/20",
    borderColor: "border-amber-700/30",
    description: "Cash prize and software subscription packages"
  }
];

const categoryPrizes = [
  {
    category: "Best Use of AI",
    icon: <Zap className="h-6 w-6 text-indigo-500" />,
    prize: "$1,500",
    description: "For the project that demonstrates the most innovative use of artificial intelligence"
  },
  {
    category: "Best Social Impact",
    icon: <Gift className="h-6 w-6 text-green-500" />,
    prize: "$1,500",
    description: "For the project that addresses important social challenges and shows potential for positive impact"
  },
  {
    category: "Most Innovative UI/UX",
    icon: <Award className="h-6 w-6 text-pink-500" />,
    prize: "$1,500",
    description: "For the project with the most thoughtful and intuitive user experience design"
  },
  {
    category: "People's Choice Award",
    icon: <Award className="h-6 w-6 text-blue-500" />,
    prize: "$1,000",
    description: "Chosen by popular vote among all attendees during the project showcase"
  }
];

const Prizes = () => {
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
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-hackskye-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-hackskye-blue/5 rounded-full blur-3xl"></div>
        </div>
        
        <div ref={containerRef} className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div 
              data-animate
              className="inline-block mb-3 py-1 px-3 bg-hackskye-blue/10 text-hackskye-blue rounded-full text-xs font-medium opacity-0"
            >
              Win Big
            </div>
            
            <h2 
              data-animate
              className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animation-delay-200"
            >
              Prizes & Rewards
            </h2>
            
            <p 
              data-animate
              className="text-gray-600 opacity-0 animation-delay-400"
            >
              Hackskye 2026 features a total prize pool of over $25,000 across various 
              categories. Showcase your skills and innovate to win these exciting rewards!
            </p>
          </div>
          
          {/* Main Prizes */}
          <div 
            data-animate
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 opacity-0 animation-delay-600"
          >
            {mainPrizes.map((prize, index) => (
              <div 
                key={index}
                className={cn(
                  "relative bg-gradient-to-br p-8 rounded-xl border shadow-subtle overflow-hidden",
                  prize.color,
                  prize.borderColor
                )}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mt-16 -mr-16 blur-xl"></div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <div className="mr-4">{prize.icon}</div>
                  <h3 className="text-xl font-bold">{prize.place}</h3>
                </div>
                
                <div className="mb-4 relative z-10">
                  <div className="text-3xl font-bold mb-2">{prize.prize}</div>
                  <p className="text-sm text-gray-600">{prize.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Category Prizes */}
          <div data-animate className="opacity-0 animation-delay-800">
            <h3 className="text-2xl font-bold mb-8 text-center">Category Prizes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryPrizes.map((prize, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-subtle hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-hackskye-blue/10 rounded-full mr-4">
                      {prize.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{prize.category}</h3>
                  </div>
                  
                  <div className="text-xl font-bold mb-2 text-hackskye-blue">{prize.prize}</div>
                  <p className="text-sm text-gray-600">{prize.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional Prizes Info */}
          <div 
            data-animate
            className="mt-16 bg-hackskye-light-gray p-8 rounded-xl text-center max-w-3xl mx-auto opacity-0 animation-delay-1000"
          >
            <h3 className="text-xl font-bold mb-4">More Than Just Cash</h3>
            <p className="text-gray-600 mb-4">
              All winning teams will also receive exclusive swag packages, internship opportunities 
              with our sponsor companies, and the chance to pitch their projects to venture capital firms.
            </p>
            <p className="text-gray-600">
              Additionally, all participants will receive certificates of participation, 
              digital badges, and access to our exclusive post-hackathon networking events.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Prizes;
