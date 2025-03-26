// src/components/sections/Resources.jsx
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { 
  FileText, 
  Code, 
  Book, 
  GitBranch, 
  ArrowRight, 
  FileCode, 
  MessageSquare 
} from 'lucide-react';

const Resources = () => {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState('javascript');

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

  const resources = [
    {
      icon: <FileText size={24} />,
      title: "Documentation",
      description: "Comprehensive guides, API reference, and examples to help you integrate quickly.",
      link: "https://apidocs.daftra.com",
      linkText: "View Documentation"
    },
    {
      icon: <Code size={24} />,
      title: "SDKs & Libraries",
      description: "Official client libraries for popular languages to accelerate your development.",
      link: "#",
      linkText: "Explore SDKs"
    },
    {
      icon: <GitBranch size={24} />,
      title: "Sample Projects",
      description: "Ready-to-use code examples and starter projects for common integration scenarios.",
      link: "#",
      linkText: "Browse Samples"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Community Support",
      description: "Connect with other developers, share knowledge, and get help with your integration.",
      link: "#",
      linkText: "Join Community"
    },
  ];

  const codeExamples = {
    javascript: `// JavaScript example
const daftra = require('daftra-api');

const client = new daftra.Client({
  apiKey: 'YOUR_API_KEY',
  companyId: 'YOUR_COMPANY_ID'
});

// Get all invoices
client.invoices.list()
  .then(invoices => {
    console.log(\`Found \${invoices.length} invoices\`);
  })
  .catch(error => {
    console.error('Error fetching invoices:', error);
  });`,
    python: `# Python example
from daftra_api import Client

client = Client(
    api_key="YOUR_API_KEY",
    company_id="YOUR_COMPANY_ID"
)

# Get all invoices
try:
    invoices = client.invoices.list()
    print(f"Found {len(invoices)} invoices")
except Exception as e:
    print(f"Error fetching invoices: {e}")`,
    php: `<?php
// PHP example
require_once 'vendor/autoload.php';

$client = new Daftra\\Client([
    'api_key' => 'YOUR_API_KEY',
    'company_id' => 'YOUR_COMPANY_ID'
]);

// Get all invoices
try {
    $invoices = $client->invoices->list();
    echo "Found " . count($invoices) . " invoices";
} catch (Exception $e) {
    echo "Error fetching invoices: " . $e->getMessage();
}`,
    ruby: `# Ruby example
require 'daftra_api'

client = Daftra::Client.new(
  api_key: 'YOUR_API_KEY',
  company_id: 'YOUR_COMPANY_ID'
)

# Get all invoices
begin
  invoices = client.invoices.list
  puts "Found #{invoices.length} invoices"
rescue => e
  puts "Error fetching invoices: #{e.message}"
end`
  };


  return (
    <section 
      ref={ref}
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
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
              Developer <span style={{ color: '#3b82f6' }}>Resources</span>
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Everything you need to integrate with our API successfully.
              From comprehensive documentation to ready-to-use code samples.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}
          >
            {resources.map((resource, index) => (
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
                  {resource.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  color: isDarkMode ? '#f9fafb' : '#1f2937',
                }}>
                  {resource.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                  flex: 1
                }}>
                  {resource.description}
                </p>
                <a 
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#3b82f6',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    marginTop: 'auto'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.textDecoration = 'underline';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.textDecoration = 'none';
                  }}
                >
                  {resource.linkText}
                  <ArrowRight size={16} />
                </a>
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
              marginBottom: '3rem'
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: isDarkMode ? '#f9fafb' : '#1f2937',
            }}>
              Quick Start Code Examples
            </h3>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                display: 'flex',
                borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                marginBottom: '1rem'
              }}>
                {Object.keys(codeExamples).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveTab(lang)}
                    style={{
                      padding: '0.5rem 1rem',
                      borderBottom: activeTab === lang 
                        ? `2px solid #3b82f6` 
                        : `2px solid transparent`,
                      backgroundColor: 'transparent',
                      color: activeTab === lang
                        ? (isDarkMode ? '#f9fafb' : '#1f2937')
                        : (isDarkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)'),
                      fontWeight: activeTab === lang ? 600 : 400,
                      cursor: 'pointer',
                      border: 'none',
                      outline: 'none',
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease',
                      marginBottom: '-1px'
                    }}
                  >
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>
              
              <div style={{
                backgroundColor: isDarkMode ? '#111827' : '#f1f5f9',
                borderRadius: '0.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <pre style={{
                  margin: 0,
                  padding: '1.5rem',
                  overflow: 'auto',
                  fontSize: '0.875rem',
                  fontFamily: 'monospace',
                  color: isDarkMode ? '#f9fafb' : '#1f2937',
                  lineHeight: 1.5
                }}>
                  <code>{codeExamples[activeTab]}</code>
                </pre>
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem'
                }}>
                  <button
                    style={{
                      backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                      border: 'none',
                      borderRadius: '0.25rem',
                      padding: '0.25rem 0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.75rem',
                      color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';
                    }}
                    onClick={() => {
                      navigator.clipboard.writeText(codeExamples[activeTab]);
                    }}
                  >
                    <FileCode size={14} />
                    Copy
                  </button>
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2rem'
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
                View Complete Documentation
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            <div style={{
              backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(59, 130, 246, 0.05)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(59, 130, 246, 0.1)'}`,
              boxShadow: isDarkMode 
                ? '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)' 
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
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
                  <Book size={24} />
                </div>
                <div>
                <h3 style={{
                   fontSize: '1.25rem',
                   fontWeight: 700,
                   marginBottom: '0.5rem',
                   color: isDarkMode ? '#f9fafb' : '#1f2937',
                 }}>
                   API Reference
                 </h3>
                 <p style={{
                   fontSize: '0.875rem',
                   color: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                   lineHeight: 1.6,
                   marginBottom: '1.5rem'
                 }}>
                   Complete reference documentation for all API endpoints, parameters, and response formats.
                 </p>
                 <a 
                   href="https://apidocs.daftra.com/reference"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     display: 'inline-flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     color: '#3b82f6',
                     fontWeight: 500,
                     fontSize: '0.875rem',
                     textDecoration: 'none'
                   }}
                   onMouseOver={(e) => {
                     e.target.style.textDecoration = 'underline';
                   }}
                   onMouseOut={(e) => {
                     e.target.style.textDecoration = 'none';
                   }}
                 >
                   Browse API Reference
                   <ArrowRight size={16} />
                 </a>
               </div>
             </div>
           </div>

           <div style={{
             backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(59, 130, 246, 0.05)',
             borderRadius: '0.75rem',
             padding: '1.5rem',
             border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(59, 130, 246, 0.1)'}`,
             boxShadow: isDarkMode 
               ? '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)' 
               : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
           }}>
             <div style={{
               display: 'flex',
               alignItems: 'flex-start',
               gap: '1rem',
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
                 <GitBranch size={24} />
               </div>
               <div>
                 <h3 style={{
                   fontSize: '1.25rem',
                   fontWeight: 700,
                   marginBottom: '0.5rem',
                   color: isDarkMode ? '#f9fafb' : '#1f2937',
                 }}>
                   Integration Guide
                 </h3>
                 <p style={{
                   fontSize: '0.875rem',
                   color: isDarkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                   lineHeight: 1.6,
                   marginBottom: '1.5rem'
                 }}>
                   Step-by-step instructions for integrating Daftra API with your application or service.
                 </p>
                 <a 
                   href="https://apidocs.daftra.com/guides"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{
                     display: 'inline-flex',
                     alignItems: 'center',
                     gap: '0.5rem',
                     color: '#3b82f6',
                     fontWeight: 500,
                     fontSize: '0.875rem',
                     textDecoration: 'none'
                   }}
                   onMouseOver={(e) => {
                     e.target.style.textDecoration = 'underline';
                   }}
                   onMouseOut={(e) => {
                     e.target.style.textDecoration = 'none';
                   }}
                 >
                   Read Integration Guide
                   <ArrowRight size={16} />
                 </a>
               </div>
             </div>
           </div>
         </motion.div>
       </motion.div>
     </div>
   </section>
 );
};

export default Resources;