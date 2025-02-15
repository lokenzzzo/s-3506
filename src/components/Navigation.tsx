
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold">
          Portfolio
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
