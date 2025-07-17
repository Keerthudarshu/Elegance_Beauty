import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-playfair font-bold text-deep-rose">Elegance Beauty</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-deep-rose transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-deep-rose transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('academy')}
                className="text-gray-700 hover:text-deep-rose transition-colors font-medium"
              >
                Academy
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-deep-rose transition-colors font-medium"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-deep-rose transition-colors font-medium"
              >
                Reviews
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-rose-gold text-white px-6 py-2 rounded-full hover:bg-deep-rose transition-colors"
              >
                Book Now
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-gray-700 hover:text-deep-rose transition-colors font-medium w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-700 hover:text-deep-rose transition-colors font-medium w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('academy')}
                className="block px-3 py-2 text-gray-700 hover:text-deep-rose transition-colors font-medium w-full text-left"
              >
                Academy
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block px-3 py-2 text-gray-700 hover:text-deep-rose transition-colors font-medium w-full text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-gray-700 hover:text-deep-rose transition-colors font-medium w-full text-left"
              >
                Reviews
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="mx-3 mt-2 bg-rose-gold text-white px-6 py-2 rounded-full hover:bg-deep-rose transition-colors w-[calc(100%-1.5rem)]"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
