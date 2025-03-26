/**
 * Animation utility functions and variants for Framer Motion
 */

/**
 * Fade in animation variants
 */
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  /**
   * Fade in up animation variants
   * @param {number} distance - Distance to move in pixels
   * @param {number} duration - Animation duration in seconds
   */
  export const fadeInUp = (distance = 20, duration = 0.6) => ({
    hidden: { opacity: 0, y: distance },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: duration }
    }
  });
  
  /**
   * Staggered children animation variants
   * @param {number} staggerAmount - Delay between children in seconds
   */
  export const staggerContainer = (staggerAmount = 0.1) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerAmount
      }
    }
  });
  
  /**
   * Scale up animation variants
   */
  export const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };
  
  /**
   * Slide in animation variants for different directions
   * @param {string} direction - Direction to slide from ("left", "right", "top", "bottom")
   * @param {number} distance - Distance to move in pixels
   */
  export const slideIn = (direction = "left", distance = 50) => {
    const directionMap = {
      left: { x: -distance, y: 0 },
      right: { x: distance, y: 0 },
      top: { x: 0, y: -distance },
      bottom: { x: 0, y: distance }
    };
    
    const { x, y } = directionMap[direction] || directionMap.left;
    
    return {
      hidden: { opacity: 0, x, y },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6 }
      }
    };
  };
  
  /**
   * Spring bounce animation variants
   */
  export const springBounce = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }
  };
  
  /**
   * Hover animations for interactive elements
   */
  export const hoverEffects = {
    scale: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    lift: {
      y: -5,
      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.2 }
    },
    glow: {
      boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.2 }
    }
  };