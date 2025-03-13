
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin } from "lucide-react";

// Sample schedule data
const scheduleData = [
  {
    date: "June 12, 2026",
    dayName: "Day 1",
    events: [
      { time: "08:00 AM - 09:30 AM", title: "Registration & Check-in", location: "Main Hall" },
      { time: "10:00 AM - 11:00 AM", title: "Opening Ceremony", location: "Auditorium" },
      { time: "11:30 AM - 12:30 PM", title: "Team Formation & Networking", location: "Collaboration Zone" },
      { time: "12:30 PM - 01:30 PM", title: "Lunch Break", location: "Food Court" },
      { time: "02:00 PM - 03:00 PM", title: "Workshop: AI & Machine Learning", location: "Workshop Room A" },
      { time: "03:30 PM - 04:30 PM", title: "Workshop: Blockchain Technologies", location: "Workshop Room B" },
      { time: "05:00 PM - 06:00 PM", title: "Industry Expert Panel", location: "Auditorium" },
      { time: "06:30 PM - 08:00 PM", title: "Dinner", location: "Food Court" },
      { time: "08:00 PM", title: "Hacking Begins!", location: "Hacking Area" }
    ]
  },
  {
    date: "June 13, 2026",
    dayName: "Day 2",
    events: [
      { time: "08:00 AM - 09:00 AM", title: "Breakfast", location: "Food Court" },
      { time: "10:00 AM - 11:00 AM", title: "Workshop: UI/UX Design", location: "Workshop Room A" },
      { time: "11:30 AM - 12:30 PM", title: "Mentor Sessions", location: "Mentoring Zone" },
      { time: "12:30 PM - 01:30 PM", title: "Lunch Break", location: "Food Court" },
      { time: "02:00 PM - 03:00 PM", title: "Workshop: Cloud Deployment", location: "Workshop Room B" },
      { time: "04:00 PM - 05:00 PM", title: "Project Check-in", location: "Hacking Area" },
      { time: "06:30 PM - 08:00 PM", title: "Dinner", location: "Food Court" },
      { time: "09:00 PM - 10:00 PM", title: "Gaming & Entertainment", location: "Recreation Area" }
    ]
  },
  {
    date: "June 14, 2026",
    dayName: "Day 3",
    events: [
      { time: "08:00 AM - 09:00 AM", title: "Breakfast", location: "Food Court" },
      { time: "11:00 AM", title: "Hacking Ends", location: "Hacking Area" },
      { time: "11:30 AM - 12:30 PM", title: "Project Submission", location: "Submission Desk" },
      { time: "12:30 PM - 01:30 PM", title: "Lunch Break", location: "Food Court" },
      { time: "02:00 PM - 04:00 PM", title: "Project Presentations", location: "Auditorium" },
      { time: "04:30 PM - 05:30 PM", title: "Judging Deliberation", location: "Judges Room" },
      { time: "06:00 PM - 07:30 PM", title: "Closing Ceremony & Awards", location: "Main Hall" },
      { time: "08:00 PM - 10:00 PM", title: "After Party", location: "Celebration Zone" }
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-hackskye-blue/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-hackskye-blue/5 rounded-full blur-3xl"></div>
        </div>
        
        <div ref={containerRef} className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div 
              data-animate
              className="inline-block mb-3 py-1 px-3 bg-hackskye-blue/10 text-hackskye-blue rounded-full text-xs font-medium opacity-0"
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
              className="text-gray-600 opacity-0 animation-delay-400"
            >
              Plan your Hackskye 2026 experience with our comprehensive schedule. 
              From workshops to meals, we've organized every moment to maximize 
              your learning and creativity.
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
                  <div className="w-12 h-12 flex items-center justify-center bg-hackskye-blue/10 rounded-full">
                    <Calendar className="h-6 w-6 text-hackskye-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{day.dayName}</h3>
                    <p className="text-gray-600">{day.date}</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-subtle p-6">
                  <div className="space-y-6">
                    {day.events.map((event, eventIndex) => (
                      <div 
                        key={eventIndex}
                        className="flex flex-col md:flex-row md:items-start gap-4 pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                      >
                        <div className="md:w-1/4 flex items-center gap-2">
                          <Clock className="h-4 w-4 text-hackskye-blue flex-shrink-0" />
                          <span className="text-sm font-medium">{event.time}</span>
                        </div>
                        
                        <div className="md:w-1/2">
                          <h4 className="text-lg font-semibold">{event.title}</h4>
                        </div>
                        
                        <div className="md:w-1/4 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{event.location}</span>
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
