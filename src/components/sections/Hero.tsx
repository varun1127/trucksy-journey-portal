
import React from "react";
import Button from "../ui/Button";
import { ArrowDown } from "lucide-react";
import AnimatedImage from "../ui/AnimatedImage";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedImage
          src="https://images.unsplash.com/photo-1506306151292-6fde7b122548?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
          alt="Truck on highway"
          className="w-full h-full object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in">
              <span className="badge animate-fade-in">Premium Transport Solutions</span>
              <h1 className="heading-xl mt-4 mb-6 animate-fade-in animate-delay-100 max-w-2xl">
                Your Cargo, Our Priority
              </h1>
              <p className="body-lg text-muted-foreground mb-8 animate-fade-in animate-delay-200 max-w-xl">
                Efficient, reliable, and secure transportation services tailored to your logistics needs. Experience the difference with our modern fleet and professional team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-300">
                <Button 
                  size="lg" 
                  variant="primary"
                  href="#booking"
                >
                  Get a Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  href="#services"
                >
                  Our Services
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 lg:mt-0 animate-fade-in">
            <div className="relative rounded-xl overflow-hidden shadow-2xl perspective-container">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
                alt="Modern truck fleet"
                className="animate-scale-in"
                aspectRatio="square"
                containerClassName="aspect-w-1 aspect-h-1"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-500">
          <a 
            href="#services" 
            className="flex flex-col items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="mb-2">Discover More</span>
            <ArrowDown className="animate-bounce" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
