import React from 'react';
import SkillSection from './SkillSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';
import { useSpring, animated } from '@react-spring/web';

export default function AboutSection() {
  const slideIn = useSpring({
    from: { opacity: 0, transform: 'translateY(100px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 120, friction: 14 },
  });

  const cardStyle = {
    background: 'rgba(15, 15, 15, 0.8)',
    border: '1px solid rgba(0, 255, 136, 0.2)',
    borderRadius: '15px',
    padding: '40px',
    marginBottom: '30px',
    color: '#ffffff',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    overflow: 'hidden',
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    borderColor: 'rgba(0, 255, 136, 0.5)',
    boxShadow: '0 12px 40px rgba(0, 255, 136, 0.2)',
  };

  const Card = ({ children, delay = 0 }) => (
    <animated.div
      style={{
        ...cardStyle,
        ...slideIn,
        transition: 'all 0.3s ease',
        animationDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, cardHoverStyle);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, cardStyle);
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: 'linear-gradient(90deg, #00ff88, #007bff)',
      }} />
      {children}
    </animated.div>
  );

  return (
    <animated.section
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        padding: '80px 20px',
        position: 'relative',
        ...slideIn,
      }}
    >
      {/* Binary code background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            rgba(0, 255, 136, 0.02) 50px,
            rgba(0, 255, 136, 0.02) 51px
          )
        `,
        opacity: 0.5,
      }} />

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Personal Introduction */}
        <Card>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '25px',
            color: '#00ff88',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            fontFamily: "'Fira Code', monospace",
          }}>
            <span style={{ color: '#007bff' }}>&lt;</span>
            About Me
            <span style={{ color: '#007bff' }}>/&gt;</span>
          </h2>
          <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#cccccc' }}>
            <p style={{ marginBottom: '20px' }}>
              <strong style={{ color: '#00ff88' }}>Hello! I'm Joseph Frimpong</strong>, a passionate fullstack developer with a focus on creating exceptional digital experiences. My journey in tech is driven by curiosity and a commitment to excellence.
            </p>
            <p style={{ marginBottom: '20px' }}>
              I specialize in building <strong style={{ color: '#00ff88' }}>scalable, performant applications</strong> using modern technologies. Every line of code I write is crafted with precision and purpose.
            </p>
            <p style={{ marginBottom: '20px' }}>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            <p style={{ 
              padding: '20px',
              background: 'rgba(0, 255, 136, 0.1)',
              borderLeft: '4px solid #00ff88',
              borderRadius: '8px',
              fontFamily: "'Fira Code', monospace",
            }}>
              <strong>Mission:</strong> To create technology that makes a difference.
            </p>
          </div>
        </Card>

        {/* Education */}
        <Card delay={100}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '25px',
            color: '#00ff88',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            fontFamily: "'Fira Code', monospace",
          }}>
            <span style={{ color: '#007bff' }}>&lt;</span>
            Education
            <span style={{ color: '#007bff' }}>/&gt;</span>
          </h2>
          <div style={{
            background: 'rgba(0, 123, 255, 0.1)',
            padding: '25px',
            borderRadius: '12px',
            border: '1px solid rgba(0, 123, 255, 0.3)',
          }}>
            <h3 style={{ 
              color: '#007bff', 
              marginBottom: '15px',
              fontSize: '1.3rem',
              fontFamily: "'Fira Code', monospace",
            }}>
              Koforidua Technical University
            </h3>
            <div style={{ lineHeight: '1.8', color: '#cccccc' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ color: '#00ff88', marginRight: '10px' }}>›</span>
                <strong>HND in Computer Science</strong> –  2023
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ color: '#00ff88', marginRight: '10px' }}>›</span>
                <strong>Bachelor of Technology in Computer Science</strong> – Graduating 2025
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#00ff88', marginRight: '10px' }}>›</span>
                Focused on encryption, real-time systems, and fullstack development
              </div>
            </div>
          </div>
        </Card>

        {/* Skills Section */}
        <section id="skills">
          <SkillSection cardStyle={cardStyle} cardHoverStyle={cardHoverStyle} />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <ProjectSection cardStyle={cardStyle} cardHoverStyle={cardHoverStyle} />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection cardStyle={cardStyle} cardHoverStyle={cardHoverStyle} />
        </section>
      </div>
    </animated.section>
  );
}