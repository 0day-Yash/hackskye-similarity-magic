
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Sample gallery image data
const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", alt: "Hackathon participants collaborating" },
  { id: 2, src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", alt: "Team working on project" },
  { id: 3, src: "https://images.unsplash.com/photo-1518770660439-4636190af475", alt: "Coding session" },
  { id: 4, src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", alt: "Developer at work" },
  { id: 5, src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", alt: "Hackathon presentation" },
  { id: 6, src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", alt: "Winners celebration" }
];

const Gallery = () => {
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
              Event Highlights
            </div>
            
            <h2 
              data-animate
              className="text-3xl md:text-4xl font-bold mb-6 text-white opacity-0 animation-delay-200"
            >
              Gallery
            </h2>
            
            <p 
              data-animate
              className="text-gray-300 opacity-0 animation-delay-400"
            >
              Relive the exciting moments from our previous hackathons. Browse through 
              our gallery to see innovation, collaboration, and creativity in action.
            </p>
          </div>
          
          {/* Featured Carousel */}
          <div 
            data-animate
            className="mb-16 opacity-0 animation-delay-600 max-w-4xl mx-auto"
          >
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative -left-0 mr-4 text-white border-purple-500" />
                <CarouselNext className="relative -right-0 text-white border-purple-500" />
              </div>
            </Carousel>
          </div>
          
          {/* Gallery Grid */}
          <div 
            data-animate
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animation-delay-800"
          >
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 shadow-purple-900/50"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;
