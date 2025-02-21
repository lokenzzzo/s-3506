
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#161618]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/b317e558-bd87-4faa-b986-10b3ed1b3cbf.png" 
            alt="Kairos Creative Studio" 
            className="h-8 w-auto"
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
          <Link to="/services" className="text-[#fefcf2]/80 hover:text-[#fefcf2] transition-colors">
            Services
          </Link>
          <Link to="/work" className="text-[#fefcf2]/80 hover:text-[#fefcf2] transition-colors">
            Work
          </Link>
          <Link to="/about" className="text-[#fefcf2]/80 hover:text-[#fefcf2] transition-colors">
            About
          </Link>
          <Link to="/contact" className="px-4 py-2 border border-[#fefcf2] rounded-full text-[#fefcf2] hover:bg-[#fefcf2] hover:text-[#161618] transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-[#161618] md:hidden">
            <div className="flex flex-col p-6 space-y-4">
              <Link to="/services" className="text-[#fefcf2]/80 hover:text-[#fefcf2] transition-colors">
                Services
              </Link>
              <Link to="/work" className="text-[#fefcf2]/80 hover:text-[#fefcf2] transition-colors">
                Work
              </Link>
              <Link to="/about" className="text-[#fefcf2]/80 hover:text-[#fefcf2] transition-colors">
                About
              </Link>
              <Link to="/contact" className="inline-block px-4 py-2 border border-[#fefcf2] rounded-full text-[#fefcf2] hover:bg-[#fefcf2] hover:text-[#161618] transition-colors text-center">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

