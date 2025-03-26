"use client";

import { useEffect, useState } from "react";

/**
 * Hook that triggers animation classes when elements are scrolled into view
 * @param {Object} options - Configuration options
 * @param {string} options.animationClass - CSS class to add when element is in view (default: 'visible')
 * @param {string} options.rootMargin - Margin around the root (default: '0px 0px -100px 0px')
 * @param {number} options.threshold - Threshold of element visibility to trigger (default: 0.1)
 * @param {boolean} options.once - Whether to trigger once or every time (default: true)
 * @returns {Function} - Ref callback to attach to elements
 */
const useAnimationOnScroll = ({
  animationClass = "visible",
  rootMargin = "0px 0px -100px 0px",
  threshold = 0.1,
  once = true,
} = {}) => {
  const [observers, setObservers] = useState([]);

  useEffect(() => {
    // Clean up observers on unmount
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [observers]);

  // Ref callback function to attach to elements
  const ref = (element) => {
    if (!element) return;

    // Create new IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add class when element enters viewport
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            
            // If once is true, stop observing after adding class
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            // Remove class when element leaves viewport (only if once is false)
            entry.target.classList.remove(animationClass);
          }
        });
      },
      { rootMargin, threshold }
    );

    // Start observing the element
    observer.observe(element);
    
    // Store observer reference to clean up later
    setObservers((prev) => [...prev, observer]);
  };

  return ref;
};

export default useAnimationOnScroll;