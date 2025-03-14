
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin } from "lucide-react";

// Sample schedule data
const scheduleData = [
  {
    date: "July 17, 2026",
    dayName: "Day 1 (Friday)",
    events: [
      { time: "6:00 PM", title: "Kickoff (Offline + Zoom)", location: "Main Stage & Online" },
      { time: "6:30 PM", title: "Theme Announcement", location: "Main Stage & Online" },
      { time: "7:00 PM", title: "Team Formation & Networking", location: "Collaboration Zone" },
      { time: "8:00 PM", title: "Dinner", location: "Food Court" },
      { time: "9:00 PM", title: "Hacking Begins", location: "Hacking Area" },
      { time: "11:00 PM", title: "Late Night Snacks", location: "Food Court" }
    ]
  },
  {
    date: "July 18, 2026",
    dayName: "Day 2 (Saturday)",
    events: [
      { time: "7:00 AM", title: "Breakfast", location: "Food Court" },
      { time: "10:00 AM", title: "Workshop: AI & Machine Learning", location: "Workshop Room A" },
      { time: "12:00 PM", title: "Lunch Break", location: "Food Court" },
      { time: "2:00 PM", title: "Mentor Sessions", location: "Mentoring Zone" },
      { time: "4:00 PM", title: "Mini Challenge", location: "Main Stage" },
      { time: "6:00 PM", title: "Progress Check-in", location: "Hacking Area" },
      { time: "8:00 PM", title: "Dinner", location: "Food Court" },
      { time: "10:00 PM", title: "Gaming Break", location: "Recreation Area" },
      { time: "11:30 PM", title: "Midnight Snacks", location: "Food Court" }
    ]
  },
  {
    date: "July 19, 2026",
    dayName: "Day 3 (Sunday)",
    events: [
      { time: "7:00 AM", title: "Breakfast", location: "Food Court" },
      { time: "11:00 AM", title: "Hacking Ends", location: "Hacking Area" },
      { time: "12:00 PM", title: "Lunch Break", location: "Food Court" },
      { time: "1:00 PM", title: "Project Submission", location: "Submission Desk" },
      { time: "2:00 PM", title: "Preparation for Demos", location: "Various Locations" },
      { time: "4:00 PM", title: "Demos & Presentations", location: "Main Stage" },
      { time: "6:00 PM", title: "Winners Announcement & Closing", location: "Main Stage" },
      { time: "7:00 PM", title: "Afterparty", location: "Celebration Zone" }
    ]
  }
];

const Schedule = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-blue-900 text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div ref={containerRef} className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div 
              data-animate
              className="inline-block mb-3 py-1 px-3 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium opacity-0"
            >
              Event Timeline
            </div>
            
            <h2 
              data-animate
              className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animation-delay-200"
            >
              Detailed Schedule
            </h2>
            
            <p 
              data-animate
              className="text-gray-300 opacity-0 animation-delay-400"
            >
              Plan your Hacksyke 2.0 experience with our comprehensive schedule. 
              From workshops to meals, we've organized every moment to maximize 
              your coding marathon and creative chaos.
            </p>
          </div>
          
          <div className="space-y-12">
            {scheduleData.map((day, dayIndex) => (
              <div 
                key={dayIndex}
                data-animate
                className={`opacity-0 animation-delay-${(dayIndex + 3) * 200}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-900/50 rounded-full">
                    <Calendar className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{day.dayName}</h3>
                    <p className="text-gray-300">{day.date}</p>
                  </div>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-xl border border-purple-500/20 p-6">
                  <div className="space-y-6">
                    {day.events.map((event, eventIndex) => (
                      <div 
                        key={eventIndex}
                        className="flex flex-col md:flex-row md:items-start gap-4 pb-6 border-b border-purple-500/10 last:border-0 last:pb-0"
                      >
                        <div className="md:w-1/4 flex items-center gap-2">
                          <Clock className="h-4 w-4 text-purple-400 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-300">{event.time}</span>
                        </div>
                        
                        <div className="md:w-1/2">
                          <h4 className="text-lg font-semibold text-white">{event.title}</h4>
                        </div>
                        
                        <div className="md:w-1/4 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{event.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Schedule;
