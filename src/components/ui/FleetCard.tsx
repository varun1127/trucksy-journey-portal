
import React from "react";
import { cn } from "@/lib/utils";
import AnimatedImage from "./AnimatedImage";

interface FleetCardProps {
  name: string;
  description: string;
  details: {
    label: string;
    value: string;
  }[];
  image: string;
  className?: string;
}

const FleetCard: React.FC<FleetCardProps> = ({
  name,
  description,
  details,
  image,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20 hover-lift perspective-container",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <AnimatedImage
          src={image}
          alt={name}
          aspectRatio="video"
          className="transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60">
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="heading-sm text-white mb-1">{name}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="body-md text-muted-foreground mb-4">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          {details.map((detail, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                {detail.label}
              </span>
              <span className="font-medium">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FleetCard;
