import React from 'react';
import { FaCode, FaDatabase, FaShieldAlt, FaUsers, FaCogs, FaLightbulb } from 'react-icons/fa';

export default function SkillSection({ cardStyle }) {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: "Languages & Frameworks",
      color: "#00ff88",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "React", "Node.js", "Express.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]
    },
    {
      icon: <FaDatabase />,
      title: "Databases & Tools",
      color: "#007bff",
      skills: ["MySQL", "MongoDB", "Git", "GitHub", "Postman", "VS Code", "Framer Motion", "React Icons", "scikit-learn", "TensorFlow"]
    },
    {
      icon: <FaCogs />,
      title: "System Design",
      color: "#ff6b6b",
      skills: ["Scalable Architecture", "Database Schema Modeling", "RESTful API Design", "Authentication Systems", "Load Balancing", "Caching Strategies"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Best Practices",
      color: "#ffd93d",
      skills: ["Authentication & RBAC", "Input Validation", "API Security (JWT/HTTPS)", "Data Encryption", "Password Hashing", "XSS/CSRF/SQL Injection Prevention"]
    },
    {
      icon: <FaUsers />,
      title: "Professional Skills",
      color: "#6c5ce7",
      skills: ["Team Collaboration", "Effective Communication", "Agile Methodology", "Project Management", "Code Review", "Technical Documentation"]
    },
    {
      icon: <FaLightbulb />,
      title: "Soft Skills",
      color: "#fd79a8",
      skills: ["Adaptability", "Problem Solving", "Critical Thinking", "Attention to Detail", "Self-Motivation", "Fast Learning"]
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
          🛠️
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
          Skills & Expertise
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '25px'
      }}>
        {skillCategories.map((category, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = category.color + '40';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            {/* Category Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: category.color + '20',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: category.color,
                border: `1px solid ${category.color}30`
              }}>
                {category.icon}
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                margin: 0,
                color: category.color
              }}>
                {category.title}
              </h3>
            </div>

            {/* Skills Grid */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  style={{
                    background: category.color + '15',
                    color: category.color,
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    border: `1px solid ${category.color}30`,
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = category.color + '30';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = category.color + '15';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Gradient Accent */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '2px',
              background: `linear-gradient(90deg, ${category.color}, transparent)`,
              opacity: 0.6
            }} />
          </div>
        ))}
      </div>

      {/* Proficiency Level Indicator */}
      <div style={{
        marginTop: '40px',
        padding: '25px',
        background: 'rgba(0, 255, 136, 0.05)',
        borderRadius: '12px',
        border: '1px solid rgba(0, 255, 136, 0.2)'
      }}>
        <h4 style={{
          color: '#00ff88',
          marginBottom: '20px',
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <FaLightbulb />
          Proficiency Levels
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          fontSize: '0.9rem'
        }}>
          {[
            { level: "Advanced", color: "#00ff88", skills: "React, Node.js, JavaScript, MySQL" },
            { level: "Proficient", color: "#007bff", skills: "TypeScript, Express, MongoDB, Python" },
            { level: "Intermediate", color: "#ffd93d", skills: "Java, TensorFlow, System Design" },
            { level: "Familiar", color: "#6c5ce7", skills: "Docker, AWS, CI/CD, Agile" }
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: item.color,
                boxShadow: `0 0 10px ${item.color}80`
              }} />
              <div>
                <strong style={{ color: item.color }}>{item.level}:</strong>
                <div style={{ color: '#cccccc', marginTop: '4px' }}>{item.skills}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}