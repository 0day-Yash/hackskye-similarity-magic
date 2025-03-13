
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const events = [
  {
    day: "Day 1",
    date: "June 12, 2026",
    items: [
      { time: "9:00 AM", title: "Registration & Check-in", description: "Get your badges and welcome kit" },
      { time: "10:30 AM", title: "Opening Ceremony", description: "Welcome address and event kickoff" },
      { time: "12:00 PM", title: "Team Formation", description: "Find teammates or join existing teams" },
      { time: "1:00 PM", title: "Lunch Break", description: "Networking opportunity" },
      { time: "2:00 PM", title: "Hacking Begins", description: "Start working on your projects" },
      { time: "6:00 PM", title: "Workshop Session", description: "Learn new skills from industry experts" },
      { time: "8:00 PM", title: "Dinner", description: "Refuel for the night ahead" }
    ]
  },
  {
    day: "Day 2",
    date: "June 13, 2026",
    items: [
      { time: "8:00 AM", title: "Breakfast", description: "Morning fuel for hackers" },
      { time: "10:00 AM", title: "Mentor Sessions", description: "Get guidance from experienced mentors" },
      { time: "12:00 PM", title: "Lunch", description: "Take a break and recharge" },
      { time: "3:00 PM", title: "Mini Challenges", description: "Win prizes in quick coding competitions" },
      { time: "6:00 PM", title: "Progress Check-in", description: "Share your team's progress" },
      { time: "8:00 PM", title: "Dinner", description: "Evening meal and networking" },
      { time: "10:00 PM", title: "Gaming Break", description: "Relax with fun activities" }
    ]
  },
  {
    day: "Day 3",
    date: "June 14, 2026",
    items: [
      { time: "8:00 AM", title: "Breakfast", description: "Final day energy boost" },
      { time: "11:00 AM", title: "Submission Deadline", description: "Submit your projects" },
      { time: "12:00 PM", title: "Lunch", description: "Last meal before presentations" },
      { time: "1:00 PM", title: "Project Showcase", description: "Present your work to judges" },
      { time: "4:00 PM", title: "Judging Deliberation", description: "Judges evaluate all submissions" },
      { time: "5:00 PM", title: "Closing Ceremony", description: "Awards and recognition" },
      { time: "6:30 PM", title: "Afterparty", description: "Celebrate your achievements" }
    ]
  }
];

const Timeline = () => {
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
    <section id="timeline" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-hackskye-blue/5 rounded-full blur-3xl"></div>
      </div>
      
      <div ref={containerRef} className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            data-animate
            className="inline-block mb-3 py-1 px-3 bg-hackskye-blue/10 text-hackskye-blue rounded-full text-xs font-medium opacity-0"
          >
            Event Schedule
          </div>
          
          <h2 
            data-animate
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animation-delay-200"
          >
            Hackskye Timeline
          </h2>
          
          <p 
            data-animate
            className="text-gray-600 opacity-0 animation-delay-400"
          >
            From registration to the closing ceremony, every moment at Hackskye is 
            designed to maximize your experience. Here's what to expect during our 
            action-packed three-day event.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {events.map((day, dayIndex) => (
            <div 
              key={dayIndex}
              data-animate
              className={cn(
                "lg:w-1/3 bg-white rounded-xl p-6 shadow-subtle opacity-0",
                `animation-delay-${(dayIndex + 1) * 200}`
              )}
            >
              <div className="bg-hackskye-blue/10 rounded-lg p-4 mb-6">
                <h3 className="text-xl font-bold text-hackskye-blue">{day.day}</h3>
                <p className="text-sm text-gray-600">{day.date}</p>
              </div>
              
              <div className="space-y-6">
                {day.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="relative pl-6 border-l border-hackskye-blue/20">
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-hackskye-blue"></div>
                    <p className="text-xs text-hackskye-blue font-medium">{item.time}</p>
                    <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
