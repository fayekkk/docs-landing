// src/components/sections/Integration.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { 
  Zap, 
  TrendingUp, 
  BarChart, 
  DollarSign, 
  Cog, 
  ShieldCheck 
} from 'lucide-react';

const Integration = () => {
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

  const benefits = [
    {
      icon: <Zap size={24} />,
      title: "Streamlined Workflows",
      description: "Automate data exchange between systems, eliminating manual data entry and reducing errors."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Improved Efficiency",
      description: "Save countless hours with automated processes and real-time data synchronization."
    },
    {
      icon: <BarChart size={24} />,
      title: "Enhanced Reporting",
      description: "Gain deeper insights by connecting your accounting data with business intelligence tools."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Cost Reduction",
      description: "Minimize operational costs through automation and optimization of financial processes."
    },
    {
      icon: <Cog size={24} />,
      title: "Customizable Solutions",
      description: "Build tailored solutions that perfectly match your specific business requirements."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Data Integrity",
      description: "Maintain consistent data across all systems with validated API transactions."
    },
  ];

  const stats = [
    { value: 75, label: "Time Saved", description: "on financial data processing", color: "#10b981" },
    { value: 68, label: "Error Reduction", description: "in financial data handling", color: "#3b82f6" },
    { value: 30, label: "Cost Reduction", description: "in accounting operations", color: "#8b5cf6" }
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
      id="integration"
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
              Integration <span style={{ color: '#3b82f6' }}>Benefits</span>
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Transform your business operations by connecting your applications
              with our powerful ERP system through our API.
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
            {benefits.map((benefit, index) => (
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
                  display: 'flex',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    backgroundColor: isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '0.5rem',
                    width: '3rem',
                    height: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3b82f6'
                  }}>
                    {benefit.icon}
                  </div>
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  color: isDarkMode ? '#f9fafb' : '#1f2937',
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                  lineHeight: 1.6,
                  flex: 1
                }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{
              backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)',
              borderRadius: '0.75rem',
              padding: '2rem',
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
                  Real Business Impact
                </h3>
                <p style={{
                  marginBottom: '1.5rem',
                  color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
                  lineHeight: 1.6
                }}>
                  Companies using our API integration report significant improvements in their operations:
                </p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}>
                  {stats.map((stat, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}>
                      <div style={{
                        width: '4rem',
                        height: '4rem',
                        borderRadius: '50%',
                        backgroundColor: isDarkMode 
                          ? `${stat.color}25` // 25 is hex for 15% opacity
                          : `${stat.color}15`, 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: stat.color,
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        flexShrink: 0
                      }}>
                        {stat.value}%
                      </div>
                      <div>
                        <h4 style={{
                          fontSize: '1.125rem',
                          fontWeight: 600,
                          color: isDarkMode ? '#f9fafb' : '#1f2937',
                          marginBottom: '0.25rem'
                        }}>
                          {stat.label}
                        </h4>
                        <p style={{
                          fontSize: '0.875rem',
                          color: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                        }}>
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{
                position: 'relative',
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <motion.div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  animate={{ 
                    opacity: [0.7, 1, 0.7], 
                    scale: [0.95, 1, 0.95] 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  {/* Orbit animation */}
                  <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle 
                      cx="150" 
                      cy="150" 
                      r="120" 
                      stroke={isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"} 
                      strokeWidth="1" 
                      strokeDasharray="5 5" 
                      fill="none"
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 60, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    />
                    <motion.circle 
                      cx="150" 
                      cy="150" 
                      r="90" 
                      stroke={isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"} 
                      strokeWidth="1" 
                      strokeDasharray="3 3" 
                      fill="none"
                      animate={{ rotate: -360 }}
                      transition={{ 
                        duration: 45, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    />
                    <motion.circle 
                      cx="150" 
                      cy="150" 
                      r="60" 
                      stroke={isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"} 
                      strokeWidth="1" 
                      fill="none"
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 30, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    />
                    
                    {/* Orbit satellites */}
                    <motion.circle 
                      cx="270" 
                      cy="150" 
                      r="8" 
                      fill="#3b82f6"
                      animate={{ 
                        cx: [270, 150, 30, 150, 270],
                        cy: [150, 30, 150, 270, 150]
                      }}
                      transition={{ 
                        duration: 60, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    />
                  <motion.circle 
                     cx="150" 
                     cy="60" 
                     r="6" 
                     fill="#10b981"
                     animate={{ 
                       cx: [150, 240, 150, 60, 150],
                       cy: [60, 150, 240, 150, 60]
                     }}
                     transition={{ 
                       duration: 45, 
                       repeat: Infinity, 
                       ease: "linear" 
                     }}
                   />
                   <motion.circle 
                     cx="90" 
                     cy="150" 
                     r="4" 
                     fill="#8b5cf6"
                     animate={{ 
                       cx: [90, 150, 210, 150, 90],
                       cy: [150, 210, 150, 90, 150]
                     }}
                     transition={{ 
                       duration: 30, 
                       repeat: Infinity, 
                       ease: "linear" 
                     }}
                   />
                 </svg>
                 
                 {/* Central element */}
                 <div style={{
                   position: 'absolute',
                   width: '60px',
                   height: '60px',
                   borderRadius: '50%',
                   background: isDarkMode 
                     ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' 
                     : 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   boxShadow: isDarkMode
                     ? '0 0 20px rgba(59, 130, 246, 0.3)'
                     : '0 0 20px rgba(59, 130, 246, 0.2)'
                 }}>
                   <TrendingUp size={24} color="white" />
                 </div>
               </motion.div>
             </div>
           </div>
         </motion.div>
       </motion.div>
     </div>
   </section>
 );
};

export default Integration;