// src/components/animations/BackgroundAnimation.jsx
import React, { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

const BackgroundAnimation = () => {
  const { isDarkMode } = useTheme();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create particles
    const createParticles = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const particleCount = Math.min(Math.floor(windowWidth * windowHeight / 15000), 50);
      
      const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        x: Math.random() * windowWidth,
        y: Math.random() * windowHeight,
        size: Math.random() * 4 + 2,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.3 + 0.1
      }));
      
      setParticles(newParticles);
    };

    createParticles();

    // Animation loop for moving particles
    let animationFrameId;
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Update position
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          
          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            particle.speedX *= -1;
            newX = particle.x + particle.speedX;
          }
          
          if (newY <= 0 || newY >= window.innerHeight) {
            particle.speedY *= -1;
            newY = particle.y + particle.speedY;
          }
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );
      
      animationFrameId = requestAnimationFrame(animateParticles);
    };
    
    animateParticles();

    // Recreate particles on window resize
    const handleResize = () => {
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-particles">
      {/* Gradient background */}
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background: isDarkMode 
            ? 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(30, 58, 138, 0.05) 50%, rgba(0, 0, 0, 0) 100%)' 
            : 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(219, 234, 254, 0.05) 50%, rgba(255, 255, 255, 0) 100%)',
          animationDuration: '8s'
        }}
      ></div>
      
      {/* Animated particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.opacity,
            backgroundColor: isDarkMode ? 'var(--primary-light)' : 'var(--primary)',
            boxShadow: `0 0 ${particle.size * 2}px var(--primary-light)`
          }}
        ></div>
      ))}
      
      {/* Blob shapes */}
      <div
        className="absolute animate-blob"
        style={{
          width: '600px',
          height: '600px',
          left: '-300px',
          top: '-300px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 0) 70%)' 
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
        }}
      ></div>
      
      <div
        className="absolute animate-blob animation-delay-2000"
        style={{
          width: '500px',
          height: '500px',
          right: '-200px',
          bottom: '-100px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 0) 70%)' 
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
          borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'
        }}
      ></div>
      
      <div
        className="absolute animate-blob animation-delay-4000"
        style={{
          width: '400px',
          height: '400px',
          right: '30%',
          top: '20%',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(0, 0, 0, 0) 70%)' 
            : 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
          borderRadius: '50% 60% 30% 60% / 40% 30% 70% 60%'
        }}
      ></div>
    </div>
  );
};

export default BackgroundAnimation;