
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "py-3 bg-white/80 backdrop-blur-lg shadow-subtle" 
        : "py-5 bg-transparent"
    )}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold tracking-tight flex items-center"
        >
          <span className="text-hackskye-blue font-bold">HACK</span>
          <span className="font-medium">SKYE</span>
          <span className="ml-2 bg-black text-white text-xs px-2 py-1 rounded-full">2026</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link text-sm font-medium hover:text-hackskye-blue transition-colors">Home</Link>
          <Link to="/tracks" className="nav-link text-sm font-medium hover:text-hackskye-blue transition-colors">Tracks</Link>
          <Link to="/schedule" className="nav-link text-sm font-medium hover:text-hackskye-blue transition-colors">Schedule</Link>
          <Link to="/workshops" className="nav-link text-sm font-medium hover:text-hackskye-blue transition-colors">Workshops</Link>
          <Link to="/speakers" className="nav-link text-sm font-medium hover:text-hackskye-blue transition-colors">Speakers</Link>
          <Link to="/prizes" className="nav-link text-sm font-medium hover:text-hackskye-blue transition-colors">Prizes</Link>
          <Link to="/gallery" className="nav-link text-sm font-medium hover:text-hackskye-blue transition-colors">Gallery</Link>
          <Link to="/team" className="nav-link text-sm font-medium hover:text-hackskye-blue transition-colors">Team</Link>
          <a href="#faq" className="nav-link text-sm font-medium hover:text-hackskye-blue transition-colors">FAQ</a>
          <Button className="bg-hackskye-blue hover:bg-hackskye-blue/90 transition-all duration-300 shadow-md hover:shadow-lg ml-2" size="sm">
            Register Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMobileMenu}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-x-0 bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen 
            ? "top-[60px] opacity-100" 
            : "top-[-400px] opacity-0"
        )}
      >
        <nav className="container px-4 py-5 mx-auto flex flex-col space-y-4">
          <Link 
            to="/"
            className="py-2 px-4 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/tracks"
            className="py-2 px-4 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tracks
          </Link>
          <Link 
            to="/schedule"
            className="py-2 px-4 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Schedule
          </Link>
          <Link 
            to="/workshops"
            className="py-2 px-4 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Workshops
          </Link>
          <Link 
            to="/speakers"
            className="py-2 px-4 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Speakers
          </Link>
          <Link 
            to="/prizes"
            className="py-2 px-4 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Prizes
          </Link>
          <Link 
            to="/gallery"
            className="py-2 px-4 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            to="/team"
            className="py-2 px-4 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Team
          </Link>
          <a 
            href="#faq" 
            className="py-2 px-4 text-sm font-medium hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <Button className="w-full bg-hackskye-blue hover:bg-hackskye-blue/90">
            Register Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
