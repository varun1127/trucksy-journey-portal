
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: "square" | "video" | "wide" | string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  loadingAnimation?: "blur" | "fade" | "none";
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt = "",
  aspectRatio = "video",
  className,
  containerClassName,
  priority = false,
  loadingAnimation = "blur",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    if (!imgRef.current) return;
    
    if (imgRef.current.complete) {
      setIsLoaded(true);
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(imgRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const getAspectRatio = () => {
    switch (aspectRatio) {
      case "square":
        return "aspect-w-1 aspect-h-1";
      case "video":
        return "aspect-w-16 aspect-h-9";
      case "wide":
        return "aspect-w-21 aspect-h-9";
      default:
        return aspectRatio;
    }
  };
  
  const getLoadingClassName = () => {
    if (!isInView) return "opacity-0";
    if (!isLoaded) {
      switch (loadingAnimation) {
        case "blur":
          return "blur-md";
        case "fade":
          return "opacity-0";
        default:
          return "";
      }
    }
    return "opacity-100 blur-0";
  };

  return (
    <div className={cn("overflow-hidden", getAspectRatio(), containerClassName)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={cn(
          "w-full h-full object-cover transition-all duration-700 ease-out-expo",
          getLoadingClassName(),
          className
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
};

export default AnimatedImage;
