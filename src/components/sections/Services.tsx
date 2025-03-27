
import React from "react";
import ServiceCard from "../ui/ServiceCard";
import { Truck, Package, Clock, Globe, ShieldCheck, BarChart3 } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      title: "Nationwide Freight",
      description: "Reliable shipping across the entire country with strategic routes and timely deliveries.",
      icon: <Truck size={24} />,
    },
    {
      title: "Specialized Cargo",
      description: "Custom solutions for unique cargo needs, from fragile goods to oversized equipment.",
      icon: <Package size={24} />,
    },
    {
      title: "Express Delivery",
      description: "Time-critical shipments delivered with precision and efficiency to meet your deadlines.",
      icon: <Clock size={24} />,
    },
    {
      title: "International Logistics",
      description: "Global freight forwarding services with customs expertise and international compliance.",
      icon: <Globe size={24} />,
    },
    {
      title: "Secure Transport",
      description: "Enhanced security measures for high-value or sensitive cargo transportation.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Supply Chain Analytics",
      description: "Data-driven insights to optimize your logistics operations and reduce costs.",
      icon: <BarChart3 size={24} />,
    },
  ];

  return (
    <section id="services" className="section bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge">Services</span>
          <h2 className="heading-lg mt-4 mb-5">
            Transportation Services Tailored to Your Needs
          </h2>
          <p className="body-md text-muted-foreground">
            We offer comprehensive logistics solutions designed to meet the unique requirements of your business, ensuring reliability and efficiency at every step.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`animate-fade-in animate-delay-${Math.min(index * 100, 500)}`}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
