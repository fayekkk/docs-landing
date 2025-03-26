/**
 * Utility functions for the application
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names and merges Tailwind CSS classes
 * @param {...string} inputs - Class names to combine
 * @returns {string} - Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number with thousands separators
 * @param {number} num - Number to format
 * @param {number} decimals - Number of decimal places
 * @param {string} separator - Thousands separator character
 * @returns {string} - Formatted number string
 */
export function formatNumber(num, decimals = 0, separator = ",") {
  const parts = num.toFixed(decimals).toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return parts.join(".");
}

/**
 * Truncates text to a specified length and adds ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length before truncation
 * @returns {string} - Truncated text with ellipsis if needed
 */
export function truncateText(text, length = 100) {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

/**
 * Debounces a function call
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Scrolls to an element with a given ID
 * @param {string} id - Element ID to scroll to
 * @param {number} offset - Offset from the top in pixels
 */
export function scrollToElement(id, offset = 0) {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}