
import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group relative p-6 lg:p-8 rounded-xl border border-border/50 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20 hover-lift",
        className
      )}
    >
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/70 text-primary transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      
      <h3 className="heading-sm mb-2 transition-colors group-hover:text-primary">
        {title}
      </h3>
      
      <p className="body-md text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
