
import React from "react";
import AnimatedImage from "../ui/AnimatedImage";
import { CheckCircle } from "lucide-react";

const About: React.FC = () => {
  const achievements = [
    { value: "15+", label: "Years of Experience" },
    { value: "500+", label: "Vehicles in Fleet" },
    { value: "10M+", label: "Miles Driven Annually" },
    { value: "99.7%", label: "On-Time Delivery" },
  ];
  
  const features = [
    "Modern fleet with GPS tracking",
    "Professional, certified drivers",
    "24/7 dispatch and support",
    "Comprehensive cargo insurance",
    "Sustainable transportation practices",
    "Custom logistics solutions",
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="badge">About Us</span>
            <h2 className="heading-lg mt-4 mb-5">
              Trusted Transportation Partner for Over 15 Years
            </h2>
            <p className="body-md text-muted-foreground mb-8">
              TransportX has been providing premium transportation and logistics services since 2008. We've built our reputation on reliability, efficiency, and exceptional customer service.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-lg border border-border/50 bg-secondary/30"
                >
                  <div className="text-2xl md:text-3xl font-medium mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-primary/70 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl perspective-container">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1620283085439-39aed935167d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
                  alt="Professional truck drivers"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-1/2 rounded-lg overflow-hidden shadow-xl border-4 border-background">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1616432043562-3e154221dfb4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
                  alt="Fleet management"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
