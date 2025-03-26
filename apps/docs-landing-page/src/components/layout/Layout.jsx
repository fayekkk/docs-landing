// src/components/layout/Layout.jsx
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundAnimation from '../animations/BackgroundAnimation';
import { ThemeProvider } from '../../contexts/ThemeContext';

const Layout = ({ children }) => {
  // Smooth scroll to element when clicking on anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const element = e.target;
      if (element.tagName === 'A' && element.href && element.href.includes('#')) {
        const hash = element.href.split('#')[1];
        if (hash) {
          const targetElement = document.getElementById(hash);
          if (targetElement) {
            e.preventDefault();
            window.scrollTo({
              top: targetElement.offsetTop - 100, // Offset for navbar height
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <ThemeProvider>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative'
      }}>
        <BackgroundAnimation />
        <Navbar />
        <main style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;