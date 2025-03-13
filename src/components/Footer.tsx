
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container px-4 mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-xl font-semibold tracking-tight flex items-center">
              <span className="text-hackskye-blue font-bold">HACK</span>
              <span className="font-medium">SKYE</span>
              <span className="ml-2 bg-black text-white text-xs px-2 py-1 rounded-full">2026</span>
            </a>
            <p className="text-sm text-gray-500 mt-2 max-w-md">
              The world's most innovative hackathon, bringing together the brightest minds 
              to create the future of technology.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-hackskye-blue transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-hackskye-blue transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-hackskye-blue transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-hackskye-blue transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-hackskye-blue transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                &copy; {currentYear} Hackskye. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <a href="#" className="text-sm text-gray-500 hover:text-hackskye-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-hackskye-blue transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-hackskye-blue transition-colors">
                Code of Conduct
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-hackskye-blue transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
