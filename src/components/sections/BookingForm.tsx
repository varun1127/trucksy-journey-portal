
import React, { useState } from "react";
import { CalendarIcon, Truck, MapPin, Package } from "lucide-react";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const BookingForm: React.FC = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    fromLocation: "",
    toLocation: "",
    cargoType: "",
    weight: "",
    date: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Quote Request Submitted",
        description: "We'll contact you soon with a detailed quote.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        fromLocation: "",
        toLocation: "",
        cargoType: "",
        weight: "",
        date: "",
        message: "",
      });
    }, 1500);
  };
  
  return (
    <section id="booking" className="section bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <span className="badge">Request a Quote</span>
            <h2 className="heading-lg mt-4 mb-5">
              Get a Custom Transportation Quote
            </h2>
            <p className="body-md text-muted-foreground mb-8">
              Fill out the form with your transportation details, and our team will prepare a personalized quote tailored to your specific needs.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-secondary/70 text-primary">
                  <Truck size={20} />
                </div>
                <div>
                  <h3 className="heading-sm mb-2">Professional Drivers</h3>
                  <p className="text-muted-foreground">
                    Our experienced drivers ensure your cargo arrives safely and on time.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-secondary/70 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="heading-sm mb-2">Real-time Tracking</h3>
                  <p className="text-muted-foreground">
                    Monitor your shipment's location with our advanced tracking system.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-secondary/70 text-primary">
                  <Package size={20} />
                </div>
                <div>
                  <h3 className="heading-sm mb-2">Cargo Insurance</h3>
                  <p className="text-muted-foreground">
                    Your shipments are fully insured for peace of mind during transport.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-background rounded-xl border border-border/50 shadow-sm p-6 md:p-8 animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-muted-foreground mb-1">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="" disabled>Select service type</option>
                    <option value="nationwide">Nationwide Freight</option>
                    <option value="specialized">Specialized Cargo</option>
                    <option value="express">Express Delivery</option>
                    <option value="international">International Logistics</option>
                    <option value="secure">Secure Transport</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fromLocation" className="block text-sm font-medium text-muted-foreground mb-1">
                      From Location
                    </label>
                    <input
                      type="text"
                      id="fromLocation"
                      name="fromLocation"
                      value={formData.fromLocation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Origin city"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="toLocation" className="block text-sm font-medium text-muted-foreground mb-1">
                      To Location
                    </label>
                    <input
                      type="text"
                      id="toLocation"
                      name="toLocation"
                      value={formData.toLocation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Destination city"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="cargoType" className="block text-sm font-medium text-muted-foreground mb-1">
                      Cargo Type
                    </label>
                    <input
                      type="text"
                      id="cargoType"
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="E.g., Pallets, Machinery"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-muted-foreground mb-1">
                      Estimated Weight
                    </label>
                    <input
                      type="text"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Weight in lbs or tons"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-muted-foreground mb-1">
                    Preferred Pickup Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20",
                        !formData.date && "text-muted-foreground"
                      )}
                    />
                    <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    placeholder="Any special requirements or information about your shipment"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  fullWidth
                  isLoading={isLoading}
                >
                  Request Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
