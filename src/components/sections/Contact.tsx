
import React from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Our Headquarters",
      details: ["123 Logistics Way", "Transport City, TC 12345", "United States"],
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Support",
      details: ["Main: (555) 123-4567", "Dispatch: (555) 987-6543", "Toll-free: 1-800-TRANSPORT"],
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: ["info@transportx.com", "support@transportx.com", "careers@transportx.com"],
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: ["Monday-Friday: 8am-6pm", "Saturday: 9am-3pm", "24/7 Emergency Support"],
    },
  ];

  return (
    <section id="contact" className="section bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge">Contact Us</span>
          <h2 className="heading-lg mt-4 mb-5">
            Get in Touch With Our Team
          </h2>
          <p className="body-md text-muted-foreground">
            Have questions or ready to discuss your transportation needs? Our logistics specialists are here to help you find the perfect solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-border/50 bg-card flex flex-col items-center text-center hover-lift"
            >
              <div className="mb-4 p-3 rounded-full bg-secondary/70 text-primary">
                {item.icon}
              </div>
              <h3 className="heading-sm mb-3">{item.title}</h3>
              <div className="space-y-1">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1627309926769!5m2!1sen!2s" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location map"
          ></iframe>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="heading-md mb-6">Ready to get started?</h3>
          <Button 
            size="lg" 
            variant="primary"
            href="#booking"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
