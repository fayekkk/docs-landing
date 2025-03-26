// src/components/layout/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { Github, Twitter, Linkedin, Facebook, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const resourceLinks = [
    { name: "Documentation", href: "https://apidocs.daftra.com" },
    { name: "API Reference", href: "https://apidocs.daftra.com/reference" },
    { name: "Tutorials", href: "https://apidocs.daftra.com/tutorials" },
    { name: "SDKs", href: "https://apidocs.daftra.com/sdks" },
    { name: "Changelog", href: "https://apidocs.daftra.com/changelog" },
  ];

  const companyLinks = [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Press Kit", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Security", href: "#" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <Github size={18} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={18} />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin size={18} />, href: "#" },
    { name: "Facebook", icon: <Facebook size={18} />, href: "#" },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      style={{
        backgroundColor: isDarkMode ? '#111827' : '#1f2937',
        color: '#f9fafb',
        paddingTop: '4rem',
        paddingBottom: '2rem'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <span style={{ color: '#3b82f6', fontSize: '1.5rem', fontWeight: 'bold' }}>Daftra</span>
              <span style={{ color: '#f9fafb', fontSize: '1.5rem', fontWeight: 600 }}>Docs</span>
            </div>
            <p style={{
              color: 'rgba(249, 250, 251, 0.8)',
              marginBottom: '1.5rem',
              maxWidth: '20rem',
              lineHeight: 1.6
            }}>
              Powerful API solutions for ERP and accounting systems.
              Connect, integrate, and extend your financial workflows.
            </p>
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              marginTop: '1.5rem'
            }}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#f9fafb',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#3b82f6';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={itemVariants}>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '1.25rem',
              color: '#f9fafb'
            }}>Resources</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {resourceLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'rgba(249, 250, 251, 0.8)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#3b82f6'}
                    onMouseOut={(e) => e.target.style.color = 'rgba(249, 250, 251, 0.8)'}
                  >
                    {link.name}
                    <ExternalLink size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '1.25rem',
              color: '#f9fafb'
            }}>Company</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {companyLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(249, 250, 251, 0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#3b82f6'}
                    onMouseOut={(e) => e.target.style.color = 'rgba(249, 250, 251, 0.8)'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              marginTop: '2rem',
              marginBottom: '1rem',
              color: '#f9fafb'
            }}>Legal</h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {legalLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a
                    href={link.href}
                    style={{
                      color: 'rgba(249, 250, 251, 0.8)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#3b82f6'}
                    onMouseOut={(e) => e.target.style.color = 'rgba(249, 250, 251, 0.8)'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '1.25rem',
              color: '#f9fafb'
            }}>Contact Us</h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'rgba(249, 250, 251, 0.8)'
              }}>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  padding: '0.5rem',
                  display: 'flex',
                }}>
                  <Mail size={16} />
                </div>
                <span>api@daftra.com</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'rgba(249, 250, 251, 0.8)'
              }}>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  padding: '0.5rem',
                  display: 'flex',
                }}>
                  <Phone size={16} />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                color: 'rgba(249, 250, 251, 0.8)'
              }}>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  padding: '0.5rem',
                  display: 'flex',
                  marginTop: '0.25rem'
                }}>
                  <MapPin size={16} />
                </div>
                <span>
                  123 Tech Plaza, Innovation District<br />
                  Cairo, Egypt
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2rem',
            marginTop: '2rem',
            textAlign: 'center',
            color: 'rgba(249, 250, 251, 0.6)',
            fontSize: '0.875rem'
          }}
        >
          <p>© {new Date().getFullYear()} Daftra. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>
            API documentation and ERP system access and integration service.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;