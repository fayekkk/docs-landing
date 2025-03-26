// src/components/sections/GettingStarted.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { 
  Key, 
  FileText, 
  Code, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const GettingStarted = () => {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const steps = [
    {
      icon: <Key size={24} />,
      title: "Get API Access",
      description: "Sign up for an API key through your Daftra account dashboard to start integrating.",
      action: "Request Access",
      link: "https://apidocs.daftra.com/signup"
    },
    {
      icon: <FileText size={24} />,
      title: "Read Documentation",
      description: "Explore our comprehensive guides and API reference to understand available endpoints.",
      action: "View Docs",
      link: "https://apidocs.daftra.com"
    },
    {
      icon: <Code size={24} />,
      title: "Start Developing",
      description: "Use our SDKs or API endpoints to begin building your integration solution.",
      action: "Get Code",
      link: "https://apidocs.daftra.com/sdks"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Test & Deploy",
      description: "Validate your integration in our sandbox environment before moving to production.",
      action: "Test API",
      link: "https://apidocs.daftra.com/sandbox"
    }
  ];

  return (
    <section 
      ref={ref}
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="getting-started"
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            variants={itemVariants}
            style={{
              textAlign: 'center',
              marginBottom: '4rem',
              maxWidth: '800px',
              margin: '0 auto 4rem'
            }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              color: isDarkMode ? '#f9fafb' : '#1f2937',
            }}>
              Getting <span style={{ color: '#3b82f6' }}>Started</span>
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Follow these simple steps to begin integrating with the Daftra API
              and unlock the full potential of your ERP data.
            </p>
          </motion.div>

          <div style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto 4rem'
          }}>
            {/* Timeline connector */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              transform: 'translateX(-50%)',
              display: 'none',
              '@media (min-width: 768px)': {
                display: 'block'
              }
            }} />
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem'
            }}>
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    '@media (min-width: 768px)': {
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'
                    }
                  }}
                >
                  {/* Timeline dot - only visible on larger screens */}
                  <div style={{
                    display: 'none',
                    '@media (min-width: 768px)': {
                      display: 'block',
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#3b82f6',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 10
                    }
                  }} />
                  
                  {/* Content card */}
                  <div style={{
                    width: '100%',
                    backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                    borderRadius: '0.75rem',
                    padding: '1.5rem',
                    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                    boxShadow: isDarkMode 
                      ? '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)' 
                      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    '@media (min-width: 768px)': {
                      width: 'calc(50% - 2rem)',
                      marginLeft: index % 2 === 0 ? '0' : 'auto',
                      marginRight: index % 2 === 0 ? 'auto' : '0'
                    }
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start'
                    }}>
                      <div style={{
                        backgroundColor: isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                        borderRadius: '0.5rem',
                        width: '3rem',
                        height: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#3b82f6',
                        flexShrink: 0
                      }}>
                        {step.icon}
                      </div>
                      <div>
                        <h3 style={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          marginBottom: '0.5rem',
                          color: isDarkMode ? '#f9fafb' : '#1f2937',
                        }}>
                          Step {index + 1}: {step.title}
                        </h3>
                        <p style={{
                          fontSize: '0.875rem',
                          color: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                          lineHeight: 1.6,
                          marginBottom: '1.5rem'
                        }}>
                          {step.description}
                        </p>
                        <a 
                          href={step.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'transparent',
                            color: '#3b82f6',
                            padding: '0.5rem 0.75rem',
                            borderRadius: '0.375rem',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            border: `1px solid ${isDarkMode ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.3)'}`,
                            transition: 'all 0.2s ease'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                          }}
                        >
                          {step.action}
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            style={{
              backgroundColor: isDarkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)',
              borderRadius: '0.75rem',
              padding: '2rem',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1rem',
              color: isDarkMode ? '#f9fafb' : '#1f2937',
            }}>
              Ready to Get Started?
            </h3>
            <p style={{
              color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}>
              Begin your integration journey today and transform how your business
              manages financial data and processes.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'center',
              '@media (min-width: 640px)': {
                flexDirection: 'row'
              }
            }}>
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
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.2), 0 2px 4px -1px rgba(59, 130, 246, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#2563eb';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 10px -1px rgba(59, 130, 246, 0.25), 0 4px 6px -1px rgba(59, 130, 246, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#3b82f6';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 6px -1px rgba(59, 130, 246, 0.2), 0 2px 4px -1px rgba(59, 130, 246, 0.1)';
                }}
              >
                Start Integrating
                <ArrowRight size={18} />
              </a>
              <a 
                href="https://apidocs.daftra.com/contact"
                target="_blank"
                rel="noopener noreferrer"
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
                  gap: '0.5rem',
                  border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Contact Support
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GettingStarted;