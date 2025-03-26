"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up", // "up", "down", "left", "right", or "none"
  distance = 20, // pixels to move
  once = true, // animate once or every time element comes into view
  threshold = 0.1, // how much of element needs to be visible
  className = "",
  ...props
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  // Set initial and animated states based on direction
  const getInitialAndAnimated = () => {
    const initial = { opacity: 0 };
    const animated = { opacity: 1 };

    switch (direction) {
      case "up":
        initial.y = distance;
        animated.y = 0;
        break;
      case "down":
        initial.y = -distance;
        animated.y = 0;
        break;
      case "left":
        initial.x = distance;
        animated.x = 0;
        break;
      case "right":
        initial.x = -distance;
        animated.x = 0;
        break;
      case "none":
        // No movement, just opacity change
        break;
      default:
        initial.y = distance;
        animated.y = 0;
    }

    return { initial, animated };
  };

  const { initial, animated } = getInitialAndAnimated();

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animated : initial}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;