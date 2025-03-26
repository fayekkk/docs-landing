"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card as ShadcnCard, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Card = React.forwardRef(
  ({ 
    className,
    animate = false,
    hover = false,
    children,
    ...props 
  }, ref) => {
    const hoverEffects = hover 
      ? {
          whileHover: { 
            y: -5,
            boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)" 
          },
          transition: { 
            type: "spring", 
            stiffness: 300 
          }
        }
      : {};

    if (animate) {
      return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          {...hoverEffects}
        >
          <ShadcnCard className={cn("border overflow-hidden", className)} {...props}>
            {children}
          </ShadcnCard>
        </motion.div>
      );
    }

    if (hover) {
      return (
        <motion.div ref={ref} {...hoverEffects}>
          <ShadcnCard className={cn("border overflow-hidden", className)} {...props}>
            {children}
          </ShadcnCard>
        </motion.div>
      );
    }

    return (
      <ShadcnCard ref={ref} className={cn("border overflow-hidden", className)} {...props}>
        {children}
      </ShadcnCard>
    );
  }
);

Card.displayName = "Card";

// Re-export Card subcomponents for convenience
export { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription };