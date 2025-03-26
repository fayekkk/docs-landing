// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Overview", href: "#overview" },
    { name: "API Infrastructure", href: "#infrastructure" },
    { name: "Security", href: "#security" },
    { name: "Resources", href: "#resources" },
    { name: "Integration", href: "#integration" },
  ];

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    backgroundColor: scrolled 
      ? isDarkMode ? 'rgba(31, 41, 55, 0.85)' : 'rgba(255, 255, 255, 0.85)' 
      : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    boxShadow: scrolled 
      ? isDarkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
      : 'none'
  };

  return (
    <header style={navbarStyle}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a href="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          <span style={{ color: '#3b82f6', fontSize: '1.5rem' }}>Daftra</span>
          <span style={{ 
            color: isDarkMode ? '#f9fafb' : '#1f2937', 
            fontSize: '1.5rem'
          }}>Docs</span>
        </a>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '2rem',
          '@media (min-width: 768px)': {
            display: 'flex'
          }
        }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: scrolled 
                    ? (isDarkMode ? '#f9fafb' : '#1f2937') 
                    : (isDarkMode ? '#f9fafb' : '#1f2937'),
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  opacity: 0.9,
                  transition: 'color 0.2s ease, opacity 0.2s ease',
                  ':hover': {
                    color: '#3b82f6',
                    opacity: 1
                  }
                }}
                onMouseOver={(e) => {
                  e.target.style.color = '#3b82f6';
                  e.target.style.opacity = 1;
                }}
                onMouseOut={(e) => {
                  e.target.style.color = scrolled 
                    ? (isDarkMode ? '#f9fafb' : '#1f2937') 
                    : (isDarkMode ? '#f9fafb' : '#1f2937');
                  e.target.style.opacity = 0.9;
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ThemeToggle />
            
            <a
              href="https://apidocs.daftra.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
                ':hover': {
                  backgroundColor: '#2563eb'
                }
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
            >
              API Documentation
            </a>
          </div>
        </nav>

        {/* Mobile menu button and theme toggle */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <ThemeToggle />
          
          <button
            onClick={toggleMenu}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: isDarkMode ? '#f9fafb' : '#1f2937',
              '@media (min-width: 768px)': {
                display: 'none'
              }
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: isDarkMode ? '#1f2937' : 'white',
              overflow: 'hidden'
            }}
          >
            <div style={{
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{
                    color: isDarkMode ? '#f9fafb' : '#1f2937',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    ':hover': {
                      backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
                    }
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://apidocs.daftra.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  padding: '0.75rem',
                  borderRadius: '0.375rem',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  textAlign: 'center',
                  marginTop: '0.5rem'
                }}
              >
                API Documentation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;