
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const sponsorTiers = [
  {
    name: "Platinum",
    sponsors: [
      { name: "TechGiant", logo: "TG" },
      { name: "InnovateCorp", logo: "IC" },
    ]
  },
  {
    name: "Gold",
    sponsors: [
      { name: "CloudSys", logo: "CS" },
      { name: "DevPro", logo: "DP" },
      { name: "DataNex", logo: "DN" },
    ]
  },
  {
    name: "Silver",
    sponsors: [
      { name: "CodeCraft", logo: "CC" },
      { name: "ByteWorks", logo: "BW" },
      { name: "IntelliSoft", logo: "IS" },
      { name: "NetFusion", logo: "NF" },
    ]
  }
];

const Sponsors = () => {
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
    <section id="sponsors" className="py-20 bg-hackskye-light-gray relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-hackskye-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div ref={containerRef} className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            data-animate
            className="inline-block mb-3 py-1 px-3 bg-hackskye-blue/10 text-hackskye-blue rounded-full text-xs font-medium opacity-0"
          >
            Our Partners
          </div>
          
          <h2 
            data-animate
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animation-delay-200"
          >
            Proudly Sponsored By
          </h2>
          
          <p 
            data-animate
            className="text-gray-600 opacity-0 animation-delay-400"
          >
            Hackskye 2026 is made possible through the generous support of our 
            sponsors. These industry leaders are committed to fostering innovation 
            and supporting the next generation of tech talent.
          </p>
        </div>
        
        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <div 
              key={tierIndex}
              data-animate
              className="opacity-0"
            >
              <h3 className="text-center text-xl font-semibold mb-8 inline-block">
                <span className="bg-hackskye-blue/10 text-hackskye-blue py-1 px-4 rounded-full">
                  {tier.name} Sponsors
                </span>
              </h3>
              
              <div className={`grid grid-cols-2 md:grid-cols-${Math.min(tier.sponsors.length, 4)} gap-6`}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div 
                    key={sponsorIndex}
                    className="bg-white rounded-xl p-8 flex items-center justify-center shadow-subtle hover:shadow-md transition-all duration-300 aspect-[4/3]"
                  >
                    <div className="text-4xl font-bold text-hackskye-blue/80">
                      {sponsor.logo}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div 
          data-animate
          className="mt-16 text-center opacity-0"
        >
          <h3 className="text-xl font-semibold mb-4">Become a Sponsor</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join our prestigious lineup of sponsors and connect your brand with the 
            brightest minds in technology. Sponsorship packages are available for 
            organizations of all sizes.
          </p>
          <Button 
            variant="outline" 
            className="rounded-full px-8 border-hackskye-dark-blue/20 hover:bg-hackskye-dark-blue/5 transition-all duration-300"
          >
            Sponsorship Information
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
