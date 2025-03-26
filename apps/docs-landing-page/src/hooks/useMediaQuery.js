"use client";

import { useState, useEffect } from "react";

/**
 * Hook that returns true if the viewport matches the provided media query
 * @param {string} query - CSS media query string
 * @returns {boolean} - Whether the viewport matches the query
 * 
 * Example usage:
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
 */
const useMediaQuery = (query) => {
  // Initialize with a default value based on server-side rendering consideration
  const [matches, setMatches] = useState(false);
  
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") return;
    
    // Create a media query list object
    const mediaQuery = window.matchMedia(query);
    
    // Update the state when the media query changes
    const updateMatches = (e) => {
      setMatches(e.matches);
    };
    
    // Set initial value
    setMatches(mediaQuery.matches);
    
    // Add listener for changes
    // Use the modern addEventListener or the older addListener as fallback
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateMatches);
    } else {
      mediaQuery.addListener(updateMatches);
    }
    
    // Clean up
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateMatches);
      } else {
        mediaQuery.removeListener(updateMatches);
      }
    };
  }, [query]);
  
  return matches;
};

export default useMediaQuery;