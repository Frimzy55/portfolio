import React from 'react';

export default function ProjectSection({ cardStyle }) {
  const projects = [
    {
      icon: '🔐',
      title: 'Encryption & Decryption System',
      description: 'A secure Python-based desktop application implementing RSA and AES encryption algorithms to protect sensitive text data.',
      technologies: ['Python', 'RSA', 'AES', 'Tkinter', 'Cryptography'],
    },
    {
      icon: '🍽️',
      title: 'Personalized Nutrition Platform',
      description: 'Fullstack meal planning application with personalized nutrition tracking and intelligent meal recommendations based on dietary goals.',
      technologies: ['React', 'Node.js', 'MySQL', 'Express', 'JWT'],
    },
    {
      icon: '📚',
      title: 'Library Management System',
      description: 'Comprehensive offline desktop system for managing library operations including book tracking, member management, and loan processing.',
      technologies: ['Electron', 'SQLite', 'PyQt5', 'Python', 'Desktop App'],
    },
    {
      icon: '👁️',
      title: 'Facial Recognition Attendance System',
      description: 'Intelligent attendance tracking system using computer vision and machine learning to automatically detect and recognize faces in real-time.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'Machine Learning'],
    }
  ];

  return (
    <div style={cardStyle}>
      {/* Simple Header */}
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '30px',
        background: 'linear-gradient(45deg, #00ff88, #007bff)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
      }}>
        My Projects
      </h2>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '20px',
      }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.3)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            {/* Project Icon and Title */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '15px',
            }}>
              <div style={{
                fontSize: '2rem',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 255, 136, 0.1)',
                borderRadius: '12px',
                border: '1px solid rgba(0, 255, 136, 0.2)',
              }}>
                {project.icon}
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                margin: 0,
                color: '#00ff88',
              }}>
                {project.title}
              </h3>
            </div>

            {/* Project Description */}
            <p style={{
              color: '#cccccc',
              lineHeight: '1.6',
              marginBottom: '20px',
              fontSize: '0.95rem',
            }}>
              {project.description}
            </p>

            {/* Technologies */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
            }}>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  style={{
                    background: 'rgba(0, 255, 136, 0.1)',
                    color: '#00ff88',
                    padding: '6px 12px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    border: '1px solid rgba(0, 255, 136, 0.2)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}