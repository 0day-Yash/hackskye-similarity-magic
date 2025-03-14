
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const events = [
  {
    day: "Day 1",
    date: "July 17, 2026 (Friday)",
    items: [
      { time: "6:00 PM", title: "Kickoff (Offline + Zoom)", description: "Theme drops—think 'Hack Bangalore's Chaos' or 'Code India's Future.' Get ready to lose your mind." },
      { time: "7:00 PM", title: "Team Formation", description: "Find teammates or join existing teams" },
      { time: "8:00 PM", title: "Dinner", description: "Networking opportunity" },
      { time: "9:00 PM", title: "Hacking Begins", description: "Start working on your projects" }
    ]
  },
  {
    day: "Day 2",
    date: "July 18, 2026 (Saturday)",
    items: [
      { time: "All Day", title: "Build Marathon", description: "48 hours of coding, debugging, and chai. Mentors roam, Discord buzzes, chaos reigns. Sleep? Optional." },
      { time: "8:00 AM", title: "Breakfast", description: "Morning fuel for hackers" },
      { time: "12:00 PM", title: "Lunch Break", description: "Take a break and recharge" },
      { time: "3:00 PM", title: "Mentor Sessions", description: "Get guidance from experienced mentors" },
      { time: "8:00 PM", title: "Dinner", description: "Evening meal and networking" },
      { time: "10:00 PM", title: "Mini Challenges", description: "Win prizes in quick coding competitions" }
    ]
  },
  {
    day: "Day 3",
    date: "July 19, 2026 (Sunday)",
    items: [
      { time: "8:00 AM", title: "Breakfast", description: "Final day energy boost" },
      { time: "12:00 PM", title: "Lunch", description: "Last meal before presentations" },
      { time: "4:00 PM", title: "Demos", description: "5-minute pitches, streamed live. 12 judges (startup legends, profs) crown the wildest builds." },
      { time: "6:00 PM", title: "Winners + Wrap", description: "Top 5 teams snag swag, mentorship, and glory." },
      { time: "7:00 PM", title: "Afterparty", description: "Celebrate your achievements" }
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
    <section id="timeline" className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-purple-900 to-blue-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div ref={containerRef} className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div 
            data-animate
            className="inline-block mb-3 py-1 px-3 bg-purple-500/30 text-purple-200 rounded-full text-xs font-medium opacity-0"
          >
            Event Schedule
          </div>
          
          <h2 
            data-animate
            className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animation-delay-200 text-white"
          >
            Hacksyke Timeline
          </h2>
          
          <p 
            data-animate
            className="text-gray-200 opacity-0 animation-delay-400"
          >
            From kickoff to the closing ceremony, every moment at Hacksyke is 
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
                "lg:w-1/3 bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 shadow-xl opacity-0",
                `animation-delay-${(dayIndex + 1) * 200}`
              )}
            >
              <div className="bg-purple-900/60 rounded-lg p-4 mb-6">
                <h3 className="text-xl font-bold text-purple-200">{day.day}</h3>
                <p className="text-sm text-gray-300">{day.date}</p>
              </div>
              
              <div className="space-y-6">
                {day.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="relative pl-6 border-l border-purple-500/40">
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-purple-400"></div>
                    <p className="text-xs text-purple-200 font-medium">{item.time}</p>
                    <h4 className="text-sm font-semibold mb-1 text-white">{item.title}</h4>
                    <p className="text-xs text-gray-300">{item.description}</p>
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
