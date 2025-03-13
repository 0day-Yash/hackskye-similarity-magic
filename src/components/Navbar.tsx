
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
        ? "py-3 bg-black/80 backdrop-blur-lg shadow-subtle" 
        : "py-5 bg-transparent"
    )}>
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold tracking-tight flex items-center text-white"
        >
          <span className="text-purple-400 font-bold">HACK</span>
          <span className="font-medium">SKYE</span>
          <span className="ml-2 bg-deep-purple text-white text-xs px-2 py-1 rounded-full">2026</span>
        </Link>

        {/* Desktop Navigation - Decluttered */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link text-sm font-medium text-white hover:text-purple-400 transition-colors">Home</Link>
          <Link to="/tracks" className="nav-link text-sm font-medium text-white hover:text-purple-400 transition-colors">Tracks</Link>
          <Link to="/schedule" className="nav-link text-sm font-medium text-white hover:text-purple-400 transition-colors">Schedule</Link>
          <Link to="/workshops" className="nav-link text-sm font-medium text-white hover:text-purple-400 transition-colors">Workshops</Link>
          <Link to="/speakers" className="nav-link text-sm font-medium text-white hover:text-purple-400 transition-colors">Speakers</Link>
          <Link to="/prizes" className="nav-link text-sm font-medium text-white hover:text-purple-400 transition-colors">Prizes</Link>
          <Link to="/gallery" className="nav-link text-sm font-medium text-white hover:text-purple-400 transition-colors">Gallery</Link>
          <Link to="/team" className="nav-link text-sm font-medium text-white hover:text-purple-400 transition-colors">Team</Link>
          <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg ml-2" size="sm">
            Register Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white" 
          onClick={toggleMobileMenu}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-x-0 bg-black/90 shadow-lg md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen 
            ? "top-[60px] opacity-100" 
            : "top-[-400px] opacity-0"
        )}
      >
        <nav className="container px-4 py-5 mx-auto flex flex-col space-y-4">
          <Link 
            to="/"
            className="py-2 px-4 text-sm font-medium text-white hover:bg-purple-900/50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/tracks"
            className="py-2 px-4 text-sm font-medium text-white hover:bg-purple-900/50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tracks
          </Link>
          <Link 
            to="/schedule"
            className="py-2 px-4 text-sm font-medium text-white hover:bg-purple-900/50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Schedule
          </Link>
          <Link 
            to="/workshops"
            className="py-2 px-4 text-sm font-medium text-white hover:bg-purple-900/50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Workshops
          </Link>
          <Link 
            to="/speakers"
            className="py-2 px-4 text-sm font-medium text-white hover:bg-purple-900/50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Speakers
          </Link>
          <Link 
            to="/prizes"
            className="py-2 px-4 text-sm font-medium text-white hover:bg-purple-900/50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Prizes
          </Link>
          <Link 
            to="/gallery"
            className="py-2 px-4 text-sm font-medium text-white hover:bg-purple-900/50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            to="/team"
            className="py-2 px-4 text-sm font-medium text-white hover:bg-purple-900/50 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Team
          </Link>
          <Button className="w-full bg-purple-600 hover:bg-purple-700">
            Register Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
