
import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Fleet from "../components/sections/Fleet";
import BookingForm from "../components/sections/BookingForm";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Fleet />
      <BookingForm />
      <About />
      <Contact />
      
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-4">TransportX</h3>
              <p className="text-primary-foreground/80 mb-4">
                Premium transportation solutions for businesses of all sizes. Reliable, efficient, and secure.
              </p>
            </div>
            
            <div>
              <h4 className="text-base font-medium mb-3">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Nationwide Freight
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Specialized Cargo
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Express Delivery
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    International Logistics
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base font-medium mb-3">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#fleet" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base font-medium mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/70 mb-4 md:mb-0">
              © {new Date().getFullYear()} TransportX. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Facebook
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
