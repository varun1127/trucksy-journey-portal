
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#fleet", label: "Fleet" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="/" 
          className="text-xl md:text-2xl font-medium tracking-tight"
        >
          TransportX
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button variant="primary" size="md" href="#booking">
            Get a Quote
          </Button>
        </div>
        
        <button
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background md:hidden transition-transform duration-300 ease-out-expo",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container h-full flex flex-col">
          <div className="flex items-center justify-between py-5">
            <a href="/" className="text-xl font-medium tracking-tight">
              TransportX
            </a>
            <button onClick={toggleMenu} aria-label="Close Menu">
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 mt-12">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium animate-fade-in",
                  `animate-delay-${(i + 1) * 100}`
                )}
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto mb-12 animate-fade-in animate-delay-500">
            <Button 
              variant="primary" 
              size="lg" 
              fullWidth 
              href="#booking"
              onClick={toggleMenu}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
