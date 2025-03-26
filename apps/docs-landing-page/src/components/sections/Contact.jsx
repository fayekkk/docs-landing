// src/components/sections/Security.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { 
  Shield, 
  LockKeyhole, 
  FileCheck, 
  RefreshCw, 
  Fingerprint, 
  AlertOctagon 
} from 'lucide-react';

const Security = () => {
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

  const securityFeatures = [
    {
      icon: <LockKeyhole size={24} />,
      title: "End-to-End Encryption",
      description: "All data in transit is encrypted using TLS 1.3 with perfect forward secrecy, ensuring your information remains secure."
    },
    {
      icon: <Fingerprint size={24} />,
      title: "OAuth 2.0 & API Keys",
      description: "Flexible authentication options with secure token-based access and granular permission controls."
    },
    {
      icon: <FileCheck size={24} />,
      title: "Compliance & Certifications",
      description: "Our infrastructure is SOC 2 Type II compliant and adheres to industry standards for data security and privacy."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Real-time Monitoring",
      description: "Continuous security monitoring with automated threat detection and incident response protocols."
    },
    {
      icon: <Shield size={24} />,
      title: "DDoS Protection",
      description: "Enterprise-grade protection against distributed denial-of-service attacks, ensuring continuous availability."
    },
    {
      icon: <AlertOctagon size={24} />,
      title: "Rate Limiting & Throttling",
      description: "Smart traffic management to prevent API abuse while ensuring fair usage and system stability."
    },
  ];

  return (
    <section 
      ref={ref}
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(249, 250, 251, 0.8)',
      }}
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
              Enterprise-Grade <span style={{ color: '#3b82f6' }}>Security</span>
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Your data security is our top priority. Our API is built with multiple 
              layers of protection to safeguard sensitive financial information.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
                  boxShadow: isDarkMode 
                    ? '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)' 
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                whileHover={{
                  transform: 'translateY(-5px)',
                  boxShadow: isDarkMode 
                    ? '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)' 
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div style={{
                  backgroundColor: isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '0.5rem',
                  width: '3rem',
                  height: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  color: '#3b82f6'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  color: isDarkMode ? '#f9fafb' : '#1f2937',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                  lineHeight: 1.6,
                  flex: 1
                }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{
              padding: '2rem',
              backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)',
              borderRadius: '0.75rem',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
              boxShadow: isDarkMode 
                ? '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)' 
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: isDarkMode ? '#f9fafb' : '#1f2937',
                }}>
                  Our Security Commitment
                </h3>
                <p style={{
                  marginBottom: '1.5rem',
                  color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
                  lineHeight: 1.6
                }}>
                  We implement industry best practices and regularly undergo security audits 
                  to ensure your data is protected at every level.
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {[
                    "Regular penetration testing by third-party security experts",
                    "Data backup and disaster recovery with redundant systems",
                    "Strict access controls with audit logging for all operations"
                  ].map((item, index) => (
                    <li 
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                        color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
                      }}
                    >
                      <div style={{
                        backgroundColor: '#10b981',
                        borderRadius: '50%',
                        minWidth: '1.5rem',
                        height: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        marginTop: '0.125rem'
                      }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <strong style={{
                          color: isDarkMode ? '#f9fafb' : '#1f2937',
                          fontWeight: 600
                        }}>
                          {item.split(" ").slice(0, 2).join(" ")}
                        </strong>{" "}
                        {item.split(" ").slice(2).join(" ")}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
              }}>
                <motion.div
                  style={{
                    width: '20rem',
                    height: '20rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: `2px dashed ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
                  }}></div>
                </motion.div>
                <motion.div
                  style={{
                    position: 'absolute',
                    width: '15rem',
                    height: '15rem',
                    borderRadius: '50%',
                    border: `2px dashed ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ 
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
                <motion.div
                  style={{
                    position: 'absolute',
                    width: '10rem',
                    height: '10rem',
                    borderRadius: '50%',
                    border: `2px dashed ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
                <div style={{
                  position: 'absolute',
                  width: '5rem',
                  height: '5rem',
                  borderRadius: '50%',
                  backgroundColor: isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Shield size={32} color="#3b82f6" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;