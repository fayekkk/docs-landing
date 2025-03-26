import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "../ui/card";
import CountUp from "@/components/animations/CountUp";

const Metric = ({
  icon,
  title,
  value,
  description,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  className,
  iconContainerClassName,
  valueClassName,
  titleClassName,
  descriptionClassName,
}) => {
  return (
    <Card className={cn("border-0 shadow-sm", className)}>
      <CardContent className="p-6">
        <div className="flex items-start">
          {icon && (
            <div className={cn("p-3 rounded-full bg-primary/10 mr-4", iconContainerClassName)}>
              {icon}
            </div>
          )}
          <div>
            <h3 className={cn("text-3xl font-bold text-gray-900 dark:text-white", valueClassName)}>
              <CountUp
                end={value}
                prefix={prefix}
                suffix={suffix}
                decimals={decimals}
                duration={duration}
              />
            </h3>
            <h4 className={cn("text-lg font-semibold text-gray-900 dark:text-white mb-1", titleClassName)}>
              {title}
            </h4>
            {description && (
              <p className={cn("text-gray-600 dark:text-gray-300 text-sm", descriptionClassName)}>
                {description}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Metric;