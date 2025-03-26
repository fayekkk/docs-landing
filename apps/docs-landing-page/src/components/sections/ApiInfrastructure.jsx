// src/components/sections/ApiInfrastructure.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { 
  Shield, 
  Clock, 
  Server, 
  Cloud, 
  BarChart, 
  Globe 
} from 'lucide-react';
import CountUp from 'react-countup';

const ApiInfrastructure = () => {
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

  const metrics = [
    {
      icon: <Cloud className="text-primary" size={24} />,
      value: 99.99,
      suffix: "%",
      title: "Service Uptime",
      description: "Hosted on Amazon AWS infrastructure",
    },
    {
      icon: <Clock className="text-primary" size={24} />,
      value: 120,
      suffix: "ms",
      title: "Average Response Time",
      description: "Fast and reliable API responses",
    },
    {
      icon: <Server className="text-primary" size={24} />,
      value: 10,
      suffix: "M+",
      title: "API Requests Daily",
      description: "Handling millions of requests each day",
    },
    {
      icon: <Globe className="text-primary" size={24} />,
      value: 50,
      suffix: "+",
      title: "Data Centers Worldwide",
      description: "Global coverage with edge locations",
    },
    {
      icon: <Shield className="text-primary" size={24} />,
      value: 100,
      suffix: "%",
      title: "Data Encryption",
      description: "End-to-end encryption for all data",
    },
    {
      icon: <BarChart className="text-primary" size={24} />,
      value: 5000,
      suffix: "+",
      title: "Active Integrations",
      description: "Businesses relying on our API",
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
        backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.6)' : 'rgba(249, 250, 251, 0.6)',
        backdropFilter: 'blur(10px)'
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
              Powerful API <span style={{ color: '#3b82f6' }}>Infrastructure</span>
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Built on Amazon AWS with global availability, our API infrastructure
              delivers enterprise-grade reliability, speed, and security.
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
            {metrics.map((metric, index) => (
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
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
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
                  flexShrink: 0
                }}>
                  {metric.icon}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: isDarkMode ? '#f9fafb' : '#1f2937',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.25rem'
                  }}>
                    {isInView ? (
                      <>
                        <CountUp
                          end={metric.value}
                          duration={2.5}
                          decimals={metric.value % 1 !== 0 ? 2 : 0}
                        />
                        <span>{metric.suffix}</span>
                      </>
                    ) : (
                      <>0</>
                    )}
                  </h3>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: isDarkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
                  }}>
                    {metric.title}
                  </h4>
                  <p style={{
                    fontSize: '0.875rem',
                    color: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                    lineHeight: 1.5
                  }}>
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApiInfrastructure;