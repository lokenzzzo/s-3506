
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#161618]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/8b3ace4a-a34b-40ac-8af3-2fa7151ac6fe.png" 
            alt="Kairos Creative Studio" 
            className="hidden md:block h-12 w-auto"
          />
          <img 
            src="/lovable-uploads/a2c4f605-36d5-4d88-b230-0c718e559e2b.png" 
            alt="Kairos Creative Studio" 
            className="md:hidden h-4 w-auto"
          />
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#fefcf2]"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-[#fefcf2]/80 hover:text-[#fefcf2] transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-[#fefcf2]/80 hover:text-[#fefcf2] transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="px-4 py-2 border border-[#fefcf2] rounded-full text-[#fefcf2] hover:bg-[#fefcf2] hover:text-[#161618] transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-[#161618] md:hidden">
            <div className="flex flex-col p-6 space-y-4">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-[#fefcf2]/80 hover:text-[#fefcf2] transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-[#fefcf2]/80 hover:text-[#fefcf2] transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="inline-block px-4 py-2 border border-[#fefcf2] rounded-full text-[#fefcf2] hover:bg-[#fefcf2] hover:text-[#161618] transition-colors text-center"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
