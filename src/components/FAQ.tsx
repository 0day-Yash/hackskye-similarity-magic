
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Hackskye?",
    answer: "Hackskye is a 48-hour hackathon where participants work in teams to create innovative software or hardware projects. It's a space for learning, collaboration, and pushing the boundaries of technology."
  },
  {
    question: "Who can participate?",
    answer: "Hackskye is open to students, professionals, and anyone passionate about technology. Whether you're a seasoned developer or just starting out, there's a place for you at our event."
  },
  {
    question: "Do I need to have a team before registering?",
    answer: "No, you can register as an individual and form or join a team during our team formation session on the first day. Teams typically consist of 3-5 members."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, any hardware you plan to use, and personal items for the weekend. We'll provide meals, snacks, and a comfortable hacking environment."
  },
  {
    question: "Is there a code of conduct?",
    answer: "Yes, all participants are expected to follow our code of conduct, which promotes a respectful and inclusive environment. The full code of conduct will be shared with registered participants."
  },
  {
    question: "What kind of projects can I build?",
    answer: "You can build anything! Web applications, mobile apps, hardware projects, AI solutions, and more. We'll announce specific themes and challenges closer to the event."
  },
  {
    question: "Will there be prizes?",
    answer: "Yes! We have a total prize pool of over $50,000, including cash prizes, scholarships, internship opportunities, and latest tech gadgets for various categories."
  },
  {
    question: "I don't have much coding experience. Can I still participate?",
    answer: "Absolutely! Hackskye is a learning experience for everyone. We'll have workshops, mentors, and resources to help beginners get started and create amazing projects."
  }
];

const FAQ = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);
  
  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };
  
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
    <section id="faq" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-200/80 rounded-full blur-3xl"></div>
      </div>
      
      <div ref={containerRef} className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            data-animate
            className="inline-block mb-3 py-1 px-3 bg-gray-300/70 text-gray-700 rounded-full text-xs font-medium opacity-0"
          >
            Common Questions
          </div>
          
          <h2 
            data-animate
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animation-delay-200 text-gray-800"
          >
            Frequently Asked Questions
          </h2>
          
          <p 
            data-animate
            className="text-gray-600 opacity-0 animation-delay-400"
          >
            Have questions about Hackskye? We've got answers! If you don't find 
            what you're looking for, feel free to reach out to our team.
          </p>
        </div>
        
        <div 
          data-animate
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-subtle overflow-hidden opacity-0"
        >
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "border-b border-gray-200 last:border-0",
                openIndexes.includes(index) ? "bg-gray-200/50" : ""
              )}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-sm font-medium text-gray-800">{faq.question}</h3>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-gray-500 transition-transform duration-200",
                    openIndexes.includes(index) ? "transform rotate-180" : ""
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndexes.includes(index) 
                    ? "max-h-40 opacity-100" 
                    : "max-h-0 opacity-0"
                )}
              >
                <p className="px-6 pb-4 text-sm text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          data-animate
          className="mt-12 text-center opacity-0 animation-delay-200"
        >
          <p className="text-gray-600 mb-2">
            Still have questions?
          </p>
          <a 
            href="mailto:info@hackskye.com" 
            className="text-hackskye-blue hover:underline font-medium"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
