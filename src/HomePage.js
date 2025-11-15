import React, { useRef, useState, useEffect } from 'react';
import TopBar from './TopBar';
import AboutSection from './AboutSection';
import { FaCode, FaRocket, FaEye, FaChevronDown, FaChevronLeft, FaChevronRight, FaDownload } from 'react-icons/fa';
import myPhoto from './assets/joe.jpeg';
import img1 from './assets/joe1.jpg'; 
import img2 from './assets/joe2.jpg';
import img3 from './assets/jj.jpg';
import img4 from './assets/joe4.jpg';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideshowImages = [img1, img2, img3, img4];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  // Function to handle CV download
  const downloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = '/assets/Joseph_frimpong_CV.pdf';
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Joseph-Frimpong-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const pageFade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800 },
  });

  const titleFade = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 300,
  });

  const subtitleFade = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 500,
  });

  const descriptionFade = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 700,
  });

  const buttonsFade = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 900,
  });

  const floatAnimation = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-10px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    config: { duration: 3000 },
  });

  const bgPulse = useSpring({
    from: { backgroundPosition: '0% 0%' },
    to: { backgroundPosition: '100% 100%' },
    loop: true,
    config: { duration: 20000 }
  });

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <animated.div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        backgroundSize: '400% 400%',
        color: '#00ff88',
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        overflowX: 'hidden',
        position: 'relative',
        ...pageFade,
        ...bgPulse
      }}
    >

      {/* GRID BACKGROUND */}
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

      <TopBar />

      {/* HERO CONTENT */}
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '120px 20px 80px',
          position: 'relative',
          zIndex: 2,
        }}
      >

        {/* --- FOUR IMAGES IN SLIDESHOW CONTAINER --- */}
        <animated.div style={{ ...floatAnimation, marginBottom: '40px' }}>
          <div style={{
            width: '500px',
            maxWidth: '90vw',
            height: '200px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '3px solid #007bff',
            position: 'relative',
            background: 'rgba(0, 0, 0, 0.3)'
          }}>
            {/* Slideshow Container with sliding animation */}
            <div style={{
              display: 'flex',
              width: '400%', // 4 images * 100%
              height: '100%',
              transform: `translateX(-${currentSlide * (100 / 4)}%)`,
              transition: 'transform 0.8s ease-in-out'
            }}>
              {/* Image 1 */}
              <div style={{
                flex: '0 0 25%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px'
              }}>
                <div style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  border: '3px solid #007bff',
                  boxShadow: '0 8px 25px rgba(0, 123, 255, 0.3)'
                }}>
                  <img
                    src={img1}
                    alt="Slide 1"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>

              {/* Image 2 */}
              <div style={{
                flex: '0 0 25%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px'
              }}>
                <div style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  border: '3px solid #00ff88',
                  boxShadow: '0 8px 25px rgba(0, 255, 136, 0.3)'
                }}>
                  <img
                    src={img2}
                    alt="Slide 2"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>

              {/* Image 3 */}
              <div style={{
                flex: '0 0 25%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px'
              }}>
                <div style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  border: '3px solid #ff6b6b',
                  boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)'
                }}>
                  <img
                    src={img3}
                    alt="Slide 3"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>

              {/* Image 4 */}
              <div style={{
                flex: '0 0 25%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px'
              }}>
                <div style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  border: '3px solid #ffd700',
                  boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)'
                }}>
                  <img
                    src={img4}
                    alt="Slide 4"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Slideshow Navigation */}
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.8)',
                border: '2px solid #00ff88',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                color: '#00ff88',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#00ff88';
                e.target.style.color = '#0a0a0a';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0, 0, 0, 0.8)';
                e.target.style.color = '#00ff88';
              }}
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.8)',
                border: '2px solid #00ff88',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                color: '#00ff88',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#00ff88';
                e.target.style.color = '#0a0a0a';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0, 0, 0, 0.8)';
                e.target.style.color = '#00ff88';
              }}
            >
              <FaChevronRight />
            </button>

            {/* Slide Indicators */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '12px',
              zIndex: 10
            }}>
              {slideshowImages.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    backgroundColor: index === currentSlide ? '#00ff88' : 'rgba(255, 255, 255, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: index === currentSlide ? '2px solid #007bff' : '2px solid transparent',
                    transform: index === currentSlide ? 'scale(1.2)' : 'scale(1)'
                  }}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'rgba(0, 0, 0, 0.7)',
              color: '#00ff88',
              padding: '5px 12px',
              borderRadius: '15px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              zIndex: 10
            }}>
              {currentSlide + 1} / {slideshowImages.length}
            </div>
          </div>
        </animated.div>

        {/* MAIN PROFILE IMAGE */}
        <animated.div style={{ ...floatAnimation, position: 'relative', marginBottom: '30px' }}>
          <div style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #00ff88, #007bff)',
            padding: '3px',
            position: 'relative',
          }}>
            <img
              src={myPhoto}
              alt="Joseph Frimpong"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                background: '#0a0a0a',
              }}
            />
          </div>

          {/* CODE ICON */}
          <div style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            width: '40px',
            height: '40px',
            background: '#00ff88',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0a0a0a',
            fontSize: '1.2rem',
            border: '2px solid #0a0a0a',
          }}>
            <FaCode />
          </div>
        </animated.div>

        {/* NAME */}
        <animated.div style={titleFade}>
          <h1 style={{
            fontSize: window.innerWidth < 600 ? '2.5rem' : '3.5rem',
            fontWeight: 700,
            background: 'linear-gradient(45deg, #00ff88, #007bff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '10px',
          }}>
            Joseph Frimpong
          </h1>
        </animated.div>

        {/* SUBTITLE */}
        <animated.div style={subtitleFade}>
          <h3 style={{ color: '#ccc', marginBottom: '30px' }}>
            Fullstack Developer
          </h3>
        </animated.div>

        {/* DESCRIPTION */}
        <animated.div style={descriptionFade}>
          <p style={{
            fontSize: '1.1rem',
            maxWidth: '600px',
            marginBottom: '40px',
            color: '#888',
          }}>
            I build <strong style={{ color: '#00ff88' }}>modern, responsive applications</strong> with  
            <strong style={{ color: '#007bff' }}> React, Node.js, MySQL</strong>.
          </p>
        </animated.div>

        {/* BUTTONS - Now with Download CV */}
        <animated.div style={buttonsFade}>
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>

            <button
              onClick={scrollToAbout}
              style={{
                padding: '14px 28px',
                background: 'linear-gradient(45deg, #00ff88, #007bff)',
                color: '#0a0a0a',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <FaRocket /> Begin Journey
            </button>

            <button
              onClick={() => navigate('/projects')}
              style={{
                padding: '14px 28px',
                background: 'transparent',
                color: '#00ff88',
                border: '2px solid #00ff88',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#00ff88';
                e.target.style.color = '#0a0a0a';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#00ff88';
              }}
            >
              <FaEye /> View Projects
            </button>

            {/* Download CV Button */}
            <button
              onClick={downloadCV}
              style={{
                padding: '14px 28px',
                background: 'transparent',
                color: '#007bff',
                border: '2px solid #007bff',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#007bff';
                e.target.style.color = '#0a0a0a';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#007bff';
              }}
            >
              <FaDownload /> Download CV
            </button>

          </div>
        </animated.div>

        {/* SCROLL DOWN */}
        <animated.div
          style={{
            marginTop: '50px',
            cursor: 'pointer',
            opacity: 0.7,
            ...buttonsFade
          }}
          onClick={scrollToAbout}
        >
          <div style={{ color: '#00ff88' }}>
            <span>Explore More</span>
            <FaChevronDown />
          </div>
        </animated.div>

      </div>

      {/* ABOUT SECTION */}
      <div id="about" ref={aboutRef}>
        <AboutSection />
      </div>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: 'center',
          padding: '40px 20px',
          color: '#666',
          borderTop: '1px solid rgba(0,255,136,0.1)',
          background: 'rgba(10,10,10,0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <p>© {new Date().getFullYear()} Built by <strong style={{ color: '#00ff88' }}>Joseph Frimpong</strong></p>
      </footer>
    </animated.div>
  );
}