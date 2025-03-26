// src/components/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { ArrowRight, Code, Database, Server } from 'lucide-react';

const Hero = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }
    }
  };

  const statsVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: { 
        delay: 0.5 + (i * 0.1), 
        duration: 0.7, 
        ease: [0.04, 0.62, 0.23, 0.98] 
      }
    })
  };

  const codeSnippetVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.6, duration: 0.7, ease: [0.04, 0.62, 0.23, 0.98] }
    }
  };

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '5rem',
      paddingBottom: '5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            width: '100%'
          }}
        >
          {/* Left Content */}
          <div style={{
            gridColumn: '1 / span 12',
            '@media (min-width: 1024px)': {
              gridColumn: '1 / span 6'
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Powerful API for Daftra ERP System
            </motion.h1>

            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
                marginBottom: '2rem',
                maxWidth: '40rem'
              }}
            >
              Connect, integrate, and extend your accounting workflows with our robust API.
              Built for developers by developers.
            </motion.p>

            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '3rem'
              }}
            >
              <a
                href="https://apidocs.daftra.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                  boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.2), 0 2px 4px -1px rgba(59, 130, 246, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#2563eb';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#3b82f6';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Explore Documentation
                <ArrowRight size={18} />
              </a>

              <a
                href="#getting-started"
                style={{
                  backgroundColor: 'transparent',
                  color: isDarkMode ? '#f9fafb' : '#1f2937',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
                  transition: 'transform 0.2s ease, background-color 0.2s ease',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Get Started
              </a>
            </motion.div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { icon: <Server size={20} />, value: '99.9%', label: 'Uptime guarantee' },
                { icon: <Database size={20} />, value: '10M+', label: 'API requests daily' },
                { icon: <Code size={20} />, value: '200+', label: 'API endpoints' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={statsVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '0.5rem',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                  }}
                >
                  <div style={{
                    color: '#3b82f6',
                    marginBottom: '0.5rem',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    backgroundColor: isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {stat.icon}
                  </div>
                  <span style={{
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: isDarkMode ? '#f9fafb' : '#1f2937',
                  }}>
                    {stat.value}
                  </span>
                  <span style={{
                    fontSize: '0.875rem',
                    color: isDarkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                  }}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - API Example */}
          <motion.div
            variants={codeSnippetVariants}
            style={{
              gridColumn: '1 / span 12',
              '@media (min-width: 1024px)': {
                gridColumn: '7 / span 6'
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '3rem',
              '@media (min-width: 1024px)': {
                marginTop: 0
              }
            }}
          >
            <div style={{
              backgroundColor: isDarkMode ? '#1f2937' : 'white',
              borderRadius: '0.75rem',
              boxShadow: isDarkMode 
                ? '0 8px 30px rgba(0, 0, 0, 0.5)' 
                : '0 8px 30px rgba(0, 0, 0, 0.1)',
              width: '100%',
              maxWidth: '500px',
              overflow: 'hidden',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
            }}>
              {/* Code snippet header */}
              <div style={{
                padding: '0.75rem 1rem',
                backgroundColor: isDarkMode ? '#111827' : '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
              }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginRight: '1rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f87171' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#fbbf24' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#34d399' }}></div>
                </div>
                <span style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: 500,
                  color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)'
                }}>
                  Example Request
                </span>
              </div>

              {/* Code content */}
              <div style={{
                padding: '1.5rem',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                overflowX: 'auto',
                backgroundColor: isDarkMode ? '#111827' : '#f8fafc',
              }}>
                <pre style={{
                  margin: 0,
                  color: isDarkMode ? '#f9fafb' : '#1f2937',
                }}><code>{`// Get all invoices
const response = await fetch('https://api.daftra.com/v1/invoices', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data.invoices);`}</code></pre>
              </div>

              {/* Response preview */}
              <div style={{
                padding: '1.5rem',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                backgroundColor: isDarkMode ? '#0f172a' : '#f1f5f9',
                borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
              }}>
                <div style={{
                  color: isDarkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                  marginBottom: '0.5rem',
                  fontSize: '0.75rem'
                }}>
                  Response:
                </div>
                <pre style={{
                  margin: 0,
                  color: isDarkMode ? '#f9fafb' : '#1f2937',
                }}><code>{`{
  "success": true,
  "invoices": [
    {
      "id": 1234,
      "number": "INV-2023-001",
      "date": "2023-10-15",
      "total": 1500.00,
      "status": "paid"
    },
    // ... more invoices
  ]
}`}</code></pre>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;