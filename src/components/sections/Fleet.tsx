
import React, { useState } from "react";
import FleetCard from "../ui/FleetCard";

const Fleet: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const fleetData = [
    {
      id: 1,
      name: "Box Truck",
      description: "Perfect for local deliveries and small freight, our box trucks provide versatile loading options with lift gates for easy handling.",
      details: [
        { label: "Capacity", value: "4-6 tons" },
        { label: "Volume", value: "20-26 ft³" },
        { label: "Features", value: "Lift Gate" },
        { label: "Best For", value: "Local Delivery" },
      ],
      image: "https://images.unsplash.com/photo-1612630741022-b29ec8624cd1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      category: "light",
    },
    {
      id: 2,
      name: "Semi Truck",
      description: "Long-haul semi trucks built for interstate transport, featuring comfortable cabins and powerful engines for efficient cross-country shipping.",
      details: [
        { label: "Capacity", value: "40,000+ lbs" },
        { label: "Range", value: "1,500+ miles" },
        { label: "Features", value: "Sleeper Cabin" },
        { label: "Best For", value: "Long Haul" },
      ],
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      category: "heavy",
    },
    {
      id: 3,
      name: "Refrigerated Truck",
      description: "Temperature-controlled transport for perishable goods, pharmaceuticals, and other sensitive cargo requiring climate management.",
      details: [
        { label: "Capacity", value: "22-26 tons" },
        { label: "Temp Range", value: "-20°F to 65°F" },
        { label: "Features", value: "Temp Monitoring" },
        { label: "Best For", value: "Perishables" },
      ],
      image: "https://images.unsplash.com/photo-1592359757463-f6a493a57328?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      category: "specialized",
    },
    {
      id: 4,
      name: "Flatbed Truck",
      description: "Open-deck transport for oversized or oddly shaped cargo, with options for securing loads that don't fit in standard enclosed trailers.",
      details: [
        { label: "Capacity", value: "48,000 lbs" },
        { label: "Deck Length", value: "48-53 ft" },
        { label: "Features", value: "Side Kit Option" },
        { label: "Best For", value: "Oversized Loads" },
      ],
      image: "https://images.unsplash.com/photo-1633171666367-54e368f03220?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      category: "specialized",
    },
    {
      id: 5,
      name: "Cargo Van",
      description: "Agile and efficient for urban deliveries and small packages, ideal for last-mile delivery and time-sensitive small shipments.",
      details: [
        { label: "Capacity", value: "3,000 lbs" },
        { label: "Volume", value: "450-500 ft³" },
        { label: "Features", value: "Easy Loading" },
        { label: "Best For", value: "Urban Delivery" },
      ],
      image: "https://images.unsplash.com/photo-1627213373333-99b1bce68a33?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      category: "light",
    },
    {
      id: 6,
      name: "Tanker Truck",
      description: "Specialized transport for liquid cargo including fuel, chemicals, and food-grade liquids with safety-certified equipment.",
      details: [
        { label: "Capacity", value: "5,500-11,600 gal" },
        { label: "Materials", value: "Steel/Aluminum" },
        { label: "Features", value: "Compartmented" },
        { label: "Best For", value: "Liquid Cargo" },
      ],
      image: "https://images.unsplash.com/photo-1582559154561-e13ca745138e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
      category: "specialized",
    },
  ];
  
  const tabs = [
    { id: "all", label: "All Vehicles" },
    { id: "light", label: "Light Duty" },
    { id: "heavy", label: "Heavy Duty" },
    { id: "specialized", label: "Specialized" },
  ];
  
  const filteredFleet = activeTab === "all" 
    ? fleetData 
    : fleetData.filter(item => item.category === activeTab);

  return (
    <section id="fleet" className="section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge">Our Fleet</span>
          <h2 className="heading-lg mt-4 mb-5">
            Modern Vehicles for Every Transport Need
          </h2>
          <p className="body-md text-muted-foreground">
            Our diverse fleet of well-maintained vehicles is equipped with the latest technology to ensure your cargo reaches its destination safely and on time.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((item, index) => (
            <div 
              key={item.id}
              className={`animate-fade-in animate-delay-${Math.min(index * 100, 500)}`}
            >
              <FleetCard
                name={item.name}
                description={item.description}
                details={item.details}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
