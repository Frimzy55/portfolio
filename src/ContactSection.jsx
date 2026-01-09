import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactSection({ cardStyle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      text: 'kfrimpong.joe@gmail.com',
      link: 'mailto:kfrimpong.joe@gmail.com',
      color: '#00ff88'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      text: '+233 552 424 591',
      link: 'tel:+233552424591',
      color: '#007bff'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      text: 'github.com/Frimzy55',
      link: 'https://github.com/Frimzy55',
      color: '#6e5494'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      text: 'Connect with me',
      link: 'https://www.linkedin.com/in/joseph-frimpong-484299221',
      color: '#0077b5'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      text: 'Ghana, West Africa',
      link: '#',
      color: '#ff6b6b'
    }
  ];

  return (
    <div style={cardStyle}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          background: 'rgba(0, 255, 136, 0.1)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          color: '#00ff88',
          border: '1px solid rgba(0, 255, 136, 0.3)'
        }}>
          📞
        </div>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          margin: 0,
          background: 'linear-gradient(45deg, #00ff88, #007bff)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Get In Touch
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '40px',
        alignItems: 'start'
      }}>
        
        {/* Contact Information */}
        <div>
          <h3 style={{
            color: '#00ff88',
            marginBottom: '25px',
            fontSize: '1.4rem',
            fontWeight: '600'
          }}>
            Let's Connect
          </h3>
          <p style={{
            color: '#cccccc',
            lineHeight: '1.6',
            marginBottom: '30px',
            fontSize: '1rem'
          }}>
            I'm always open to discussing new opportunities, creative projects, 
            or potential collaborations. Feel free to reach out through any of 
            these channels:
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '18px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textDecoration: 'none',
                  color: '#ffffff',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = method.color + '40';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: method.color + '20',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  color: method.color,
                  border: `1px solid ${method.color}30`,
                  flexShrink: 0
                }}>
                  {method.icon}
                </div>
                <div>
                  <div style={{
                    color: method.color,
                    fontWeight: '600',
                    marginBottom: '4px',
                    fontSize: '1rem'
                  }}>
                    {method.title}
                  </div>
                  <div style={{
                    color: '#cccccc',
                    fontSize: '0.95rem'
                  }}>
                    {method.text}
                  </div>
                </div>
                {/* Accent Line */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: '3px',
                  background: `linear-gradient(180deg, ${method.color}, transparent)`,
                  opacity: 0.6
                }} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 style={{
            color: '#00ff88',
            marginBottom: '25px',
            fontSize: '1.4rem',
            fontWeight: '600'
          }}>
            Send a Message
          </h3>
          <p style={{
            color: '#cccccc',
            lineHeight: '1.6',
            marginBottom: '25px',
            fontSize: '1rem'
          }}>
            Have a project in mind or want to discuss opportunities? 
            Send me a message and I'll get back to you as soon as possible.
          </p>

          <form action="https://getform.io/f/aejlpyzb" method="POST">
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                color: '#00ff88',
                marginBottom: '8px',
                fontWeight: '500',
                fontSize: '0.95rem'
              }}>
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.target.style.borderColor = '#00ff88';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                color: '#00ff88',
                marginBottom: '8px',
                fontWeight: '500',
                fontSize: '0.95rem'
              }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.target.style.borderColor = '#00ff88';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                color: '#00ff88',
                marginBottom: '8px',
                fontWeight: '500',
                fontSize: '0.95rem'
              }}>
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project or inquiry..."
                rows="6"
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                  e.target.style.borderColor = '#00ff88';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(45deg, #00ff88, #007bff)',
                color: '#0a0a0a',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
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
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        marginTop: '40px',
        padding: '25px',
        background: 'rgba(0, 255, 136, 0.05)',
        borderRadius: '12px',
        border: '1px solid rgba(0, 255, 136, 0.2)',
        textAlign: 'center'
      }}>
        <h4 style={{
          color: '#00ff88',
          marginBottom: '10px',
          fontSize: '1.2rem'
        }}>
          Ready to Start Your Project?
        </h4>
        <p style={{
          color: '#cccccc',
          margin: 0,
          fontSize: '1rem'
        }}>
          I typically respond within 24 hours. Let's bring your ideas to life!
        </p>
      </div>
    </div>
  );
}