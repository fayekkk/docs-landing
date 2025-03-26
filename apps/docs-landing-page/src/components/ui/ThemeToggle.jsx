// src/components/ui/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
      style={{
        background: 'none',
        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: isDarkMode ? '#f9fafb' : '#1f2937',
        transition: 'all 0.2s ease',
        padding: '0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {isDarkMode ? (
        <Sun style={{ width: '20px', height: '20px' }} />
      ) : (
        <Moon style={{ width: '20px', height: '20px' }} />
      )}
      <span 
        style={{
          position: 'absolute',
          inset: '0',
          background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
          opacity: '0',
          borderRadius: '50%',
          transition: 'opacity 0.2s ease',
        }}
        className="theme-toggle-hover"
      />
    </button>
  );
};

// Add some additional CSS
const style = document.createElement('style');
style.textContent = `
  .theme-toggle:hover .theme-toggle-hover {
    opacity: 1;
  }
  
  .theme-toggle:active {
    transform: scale(0.95);
  }
  
  @media (prefers-reduced-motion: reduce) {
    .theme-toggle {
      transition: none;
    }
  }
`;
document.head.appendChild(style);

export default ThemeToggle;