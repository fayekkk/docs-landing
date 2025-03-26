// src/components/ui/button.jsx
import React from "react";

export const Button = React.forwardRef(({ 
  children, 
  className = "", 
  variant = "default", 
  size = "default", 
  asChild = false, 
  ...props 
}, ref) => {
  
  const getVariantClasses = () => {
    switch (variant) {
      case "outline":
        return "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-800";
      case "secondary":
        return "bg-gray-200 text-gray-800 hover:bg-gray-300";
      default:
        return "bg-blue-600 text-white hover:bg-blue-700";
    }
  };
  
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-sm px-3 py-1";
      case "lg":
        return "text-lg px-6 py-3";
      default:
        return "text-base px-4 py-2";
    }
  };
  
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";