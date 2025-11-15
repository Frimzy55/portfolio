import React, { useState, useEffect } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function TopBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (item) => {
    setMenuOpen(false);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: scrolled 
          ? 'rgba(10, 10, 10, 0.95)' 
          : 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(0, 255, 136, 0.2)' : 'rgba(0, 255, 136, 0.1)'}`,
        padding: '15px 30px',
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Logo */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '1.4rem',
            fontWeight: '700',
            background: 'linear-gradient(45deg, #00ff88, #007bff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onClick={() => handleNavClick('home')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <FaCode style={{ color: '#00ff88' }} />
          Joseph.dev
        </div>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.toLowerCase())}
                style={{
                  ...linkStyle,
                  ...(hovered === index ? hoverStyle : {}),
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {item}
              </button>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('contact')}
              style={{
                padding: '10px 20px',
                background: 'linear-gradient(45deg, #00ff88, #007bff)',
                color: '#0a0a0a',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginLeft: '10px',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0, 255, 136, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Get In Touch
            </button>
          </div>
        ) : (
          /* Mobile Menu Button */
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'rgba(0, 255, 136, 0.1)',
              border: '1px solid rgba(0, 255, 136, 0.3)',
              borderRadius: '6px',
              padding: '8px',
              color: '#00ff88',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(0, 255, 136, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(0, 255, 136, 0.1)';
            }}
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0, 255, 136, 0.2)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            animation: 'slideDown 0.3s ease',
          }}
        >
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.toLowerCase())}
              style={{
                ...mobileLinkStyle,
                ...(hovered === index ? mobileHoverStyle : {}),
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {item}
            </button>
          ))}
          
          {/* Mobile CTA Button */}
          <button
            onClick={() => handleNavClick('contact')}
            style={{
              padding: '12px 20px',
              background: 'linear-gradient(45deg, #00ff88, #007bff)',
              color: '#0a0a0a',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginTop: '10px',
            }}
          >
            Get In Touch
          </button>
        </div>
      )}

      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </nav>
  );
}

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '0.95rem',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: '8px 0',
  position: 'relative',
};

const hoverStyle = {
  color: '#00ff88',
  transform: 'translateY(-2px)',
};

const mobileLinkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1.1rem',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: '12px 15px',
  textAlign: 'left',
  borderRadius: '6px',
  border: '1px solid transparent',
};

const mobileHoverStyle = {
  color: '#00ff88',
  background: 'rgba(0, 255, 136, 0.1)',
  border: '1px solid rgba(0, 255, 136, 0.2)',
};