import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaArrowLeft, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'Meal Planning App',
      description: 'A personalized nutrition and meal planning application that helps users track their dietary goals and plan meals efficiently. Features include recipe management, nutritional analysis, and shopping list generation.',
      link: 'https://github.com/Frimzy55/meal_planning',
      icon: '🍽️',
      tech: ['React', 'Node.js', 'MySQL', 'Express', 'JWT'],
      stars: 24,
      forks: 8,
      featured: true
    },
    {
      title: 'Library Management System',
      description: 'A comprehensive desktop application for managing library operations including book tracking, member management, and loan processing. Built with Electron for cross-platform compatibility.',
      link: 'https://github.com/Frimzy55/library',
      icon: '📚',
      tech: ['Electron', 'MySQL', 'JavaScript', 'HTML/CSS'],
      stars: 18,
      forks: 5,
      featured: true
    },
    {
      title: 'Facial Recognition Attendance',
      description: 'An intelligent attendance system using computer vision to automatically detect and recognize faces. Includes real-time tracking and reporting capabilities for educational institutions.',
      link: 'https://github.com/Frimzy55/face-attendance',
      icon: '👁️',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
      stars: 32,
      forks: 12,
      featured: false
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.',
      link: '#',
      icon: '🛒',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      stars: 15,
      forks: 6,
      featured: false
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, team collaboration features, and progress tracking.',
      link: '#',
      icon: '✅',
      tech: ['Vue.js', 'Firebase', 'SCSS', 'PWA'],
      stars: 21,
      forks: 9,
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and severe weather alerts.',
      link: '#',
      icon: '🌤️',
      tech: ['React', 'API Integration', 'Chart.js', 'Geolocation'],
      stars: 12,
      forks: 4,
      featured: false
    }
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        color: '#ffffff',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        zIndex: 0,
      }} />

      {/* Gradient Orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '5%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0,
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0,
      }} />

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 20px',
        position: 'relative',
        zIndex: 2 
      }}>
        
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '60px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(0, 255, 136, 0.3)',
              padding: '12px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '16px',
              color: '#00ff88',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(0, 255, 136, 0.1)';
              e.target.style.transform = 'translateX(-5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateX(0)';
            }}
          >
            <FaArrowLeft />
            Back
          </button>
          
          <div style={{ textAlign: 'center', flex: 1 }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: '800',
              background: 'linear-gradient(45deg, #00ff88, #007bff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: '0 0 10px 0'
            }}>
              My Projects
            </h1>
            <p style={{
              color: '#cccccc',
              fontSize: '1.1rem',
              margin: 0,
              opacity: 0.8
            }}>
              A collection of my latest work and experiments
            </p>
          </div>
          
          <div style={{ width: '100px' }}></div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '30px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                transform: hoveredProject === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredProject === index 
                  ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
                  : '0 4px 20px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {project.featured && (
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'linear-gradient(45deg, #00ff88, #007bff)',
                  color: '#0a0a0a',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  zIndex: 2
                }}>
                  Featured
                </div>
              )}

              {/* Project Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 255, 136, 0.1)',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 255, 136, 0.2)'
                }}>
                  {project.icon}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    margin: '0 0 5px 0',
                    color: '#ffffff'
                  }}>
                    {project.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#cccccc', fontSize: '0.9rem' }}>
                      <FaStar />
                      <span>{project.stars}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#cccccc', fontSize: '0.9rem' }}>
                      <FaCodeBranch />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '25px',
                color: '#cccccc'
              }}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '25px'
              }}>
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      background: 'rgba(0, 255, 136, 0.1)',
                      color: '#00ff88',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      border: '1px solid rgba(0, 255, 136, 0.2)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    background: 'linear-gradient(45deg, #00ff88, #007bff)',
                    color: '#0a0a0a',
                    fontWeight: '600',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    fontSize: '0.9rem',
                    flex: 1,
                    justifyContent: 'center'
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
                  <FaGithub />
                  View Code
                </a>
                
                <button
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    background: 'transparent',
                    color: '#00ff88',
                    fontWeight: '600',
                    border: '1px solid rgba(0, 255, 136, 0.3)',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    flex: 1,
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0, 255, 136, 0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <FaEye />
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '50px 20px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '15px',
            background: 'linear-gradient(45deg, #00ff88, #007bff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Interested in Collaboration?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#cccccc',
            marginBottom: '25px',
            maxWidth: '600px',
            margin: '0 auto 25px auto'
          }}>
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <button
            onClick={() => navigate('/contact')}
            style={{
              padding: '12px 32px',
              fontSize: '1rem',
              background: 'linear-gradient(45deg, #00ff88, #007bff)',
              color: '#0a0a0a',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease'
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
      </div>
    </div>
  );
}