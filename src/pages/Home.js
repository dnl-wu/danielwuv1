import React, { useEffect, useState } from 'react';
import { Linkedin, Twitter, Github, Mail, Sparkle, ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard/FeatureCard';

function Home() {
  const [activeCardId, setActiveCardId] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const getNextCardId = (currentId) => {
    return (currentId + 1) % 6;
  };
  
  const getPrevCardId = (currentId) => {
    return (currentId - 1 + 6) % 6;
  };
  
  const getCardMargin = () => {
    if (windowWidth > 768) return '-60px';
    if (windowWidth > 480) return '-45px';
    return '-30px';
  };
  
  const renderCardContent = (card) => {
    if (card.linkText && card.linkUrl) {
      return (
        <>
          {card.content}
          <Link 
            to={card.linkUrl} 
            style={{ 
              color: '#8b5cf6', 
              textDecoration: 'underline',
              textDecorationColor: 'rgba(139, 92, 246, 0.4)',
              textDecorationThickness: '1px',
              textUnderlineOffset: '2px',
              fontWeight: 'inherit',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#7c3aed';
              e.currentTarget.style.textDecorationColor = 'rgba(124, 58, 237, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#8b5cf6';
              e.currentTarget.style.textDecorationColor = 'rgba(139, 92, 246, 0.4)';
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {card.linkText}
          </Link>
        </>
      );
    }
    return card.content;
  };
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setActiveCardId(prev => getPrevCardId(prev));
      } else if (e.key === 'ArrowRight') {
        setActiveCardId(prev => getNextCardId(prev));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const featureCards = [
    {
      id: 0,
      content: "I study Computing and Financial Management at the University of Waterloo, where I recently won my cohort's stock pitch competition!",
      media: "/assets/FeaturePhotos/1.png",
      mediaType: "image",
      label: "2a cs + finance @ uwaterloo"
    },
    {
      id: 1,
      content: "I was a Product Engineering Intern at Penseum, an EdTech startup, where I owned the user aquisition and onboarding funnels (focused on increasing numbers.)",
      media: "/assets/FeaturePhotos/2.png",
      mediaType: "image",
      label: "prev product @ penseum"
    },
    {
      id: 2,
      content: "I won 10 consecutive hackathons and case competitions by typing fast and building out cool ideas targted at solving a problem.",
      media: "/assets/FeaturePhotos/3.png",
      mediaType: "image",
      label: "10x hackathon winner"
    },
    {
      id: 3,
      content: "NYT Games start my morning workflow, so I thought, why not build one myself! Converted 100k+ impressions on social media- > 10k unique visits, and ",
      linkText: "here's what I did next",
      linkUrl: "/projects/onthedot",
      media: "/assets/FeaturePhotos/4.mp4",
      mediaType: "video",
      label: "shipped a game to 3k users in < 1 week"
    },
    {
      id: 4,
      content: "Didn't like the existing math events, so I campaigned, won, and pushed my own ideas to 9000+ happy math students.",
      media: "/assets/FeaturePhotos/5.png",
      mediaType: "image",
      label: "math faculty rep"
    },
    {
      id: 5,
      content: "A photo from our intramural ultimate frisbee championship. I love to play and talk sports, especially football (soccer), basketball, and table tennis!",
      media: "/assets/FeaturePhotos/6.png",
      mediaType: "image",
      label: "very athletic"
    }
  ];
  
  useEffect(() => {
    const mediaFiles = [
      '/assets/FeaturePhotos/1.png',
      '/assets/FeaturePhotos/2.png',
      '/assets/FeaturePhotos/3.png',
      '/assets/FeaturePhotos/4.mp4',
      '/assets/FeaturePhotos/5.png',
      '/assets/FeaturePhotos/6.png'
    ];

    mediaFiles.forEach(src => {
      if (src.endsWith('.mp4')) {
        const video = document.createElement('video');
        video.src = src;
        video.preload = 'auto';
      } else {
        const img = new Image();
        img.src = src;
      }
    });
  }, []);
  
  return (
    <div style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
        `,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 0 0',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <div style={{ 
        position: 'relative',
        zIndex: 1,
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: 'auto'
      }}>
        <div style={{ 
          padding: '2rem 2rem 1rem 2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            padding: '0.5rem 0', 
            width: '100%',
            maxWidth: '36rem'
          }}>
            <ul style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              fontWeight: 'bold',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <li>
                <NavLink to="/" style={({ isActive }) => ({ 
                  color: '#1a1a1a', 
                  textDecoration: isActive ? 'underline' : 'none',
                  textDecorationColor: isActive ? 'rgba(139, 92, 246, 0.4)' : 'transparent',
                  textDecorationThickness: isActive ? '1px' : '0px',
                  textUnderlineOffset: isActive ? '6px' : '0px',
                  fontFamily: 'Libre Baskerville, serif',
                  fontWeight: 'normal',
                  letterSpacing: '0.1em'
                })}>
                  home
                </NavLink>
              </li>
              <li style={{ color: '#1a1a1a', fontFamily: 'Libre Baskerville, serif', fontWeight: 'normal' }}>/</li>
              <li>
                <NavLink to="/projects" style={({ isActive }) => ({ 
                  color: '#1a1a1a', 
                  textDecoration: isActive ? 'underline' : 'none',
                  textDecorationColor: isActive ? 'rgba(139, 92, 246, 0.4)' : 'transparent',
                  textDecorationThickness: isActive ? '1px' : '0px',
                  textUnderlineOffset: isActive ? '6px' : '0px',
                  fontFamily: 'Libre Baskerville, serif',
                  fontWeight: 'normal',
                  letterSpacing: '0.1em'
                })}>
                  projects
                </NavLink>
              </li>
              <li style={{ color: '#1a1a1a', fontFamily: 'Libre Baskerville, serif', fontWeight: 'normal' }}>/</li>
              <li>
                <NavLink to="/writing" style={({ isActive }) => ({ 
                  color: '#1a1a1a', 
                  textDecoration: isActive ? 'underline' : 'none',
                  textDecorationColor: isActive ? 'rgba(139, 92, 246, 0.4)' : 'transparent',
                  textDecorationThickness: isActive ? '1px' : '0px',
                  textUnderlineOffset: isActive ? '6px' : '0px',
                  fontFamily: 'Libre Baskerville, serif',
                  fontWeight: 'normal',
                  letterSpacing: '0.1em'
                })}>
                  writing
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ 
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          margin: 0,
          position: 'relative'
        }}>
          <div style={{
            position: 'relative',
            textAlign: 'center',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            marginTop: '-5rem'
          }}>
            {activeCardId !== null && (
              <div style={{
                position: 'relative',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0'
              }}>
                <button
                  onClick={() => setActiveCardId(getPrevCardId(activeCardId))}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    marginRight: '1rem',
                    opacity: 0.6,
                    zIndex: 3
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.6';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <ChevronLeft size={24} strokeWidth={3} style={{ color: '#8B5CF6' }} />
                </button>

                <div 
                  className="feature-card" 
                  style={{ 
                    opacity: 0.4, 
                    transform: 'scale(0.85)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 1,
                    marginRight: getCardMargin()
                  }}
                  onClick={() => setActiveCardId(getPrevCardId(activeCardId))}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.4'}
                >
                  <div className="feature-content">
                    {featureCards[getPrevCardId(activeCardId)].media && (
                      <div className="feature-media" style={{ marginBottom: 0 }}>
                        {featureCards[getPrevCardId(activeCardId)].mediaType === 'video' ? (
                          <video 
                            src={featureCards[getPrevCardId(activeCardId)].media} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="feature-media-element"
                          />
                        ) : (
                          <img 
                            src={featureCards[getPrevCardId(activeCardId)].media} 
                            alt="" 
                            className="feature-media-element"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="feature-card" style={{ transition: 'all 0.3s ease', zIndex: 2, position: 'relative' }}>
                  <div className="feature-content">
                    {featureCards[activeCardId].media && (
                      <div className="feature-media" style={{ 
                        border: '2px solid rgba(139, 92, 246, 0.3)',
                        boxShadow: '0 0 8px rgba(139, 92, 246, 0.2)'
                      }}>
                        {featureCards[activeCardId].mediaType === 'video' ? (
                          <video 
                            src={featureCards[activeCardId].media} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="feature-media-element"
                          />
                        ) : (
                          <img 
                            src={featureCards[activeCardId].media} 
                            alt="" 
                            className="feature-media-element"
                          />
                        )}
                      </div>
                    )}
                    {renderCardContent(featureCards[activeCardId])}
                  </div>
                </div>

                <div 
                  className="feature-card" 
                  style={{ 
                    opacity: 0.4, 
                    transform: 'scale(0.85)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    zIndex: 1,
                    marginLeft: getCardMargin()
                  }}
                  onClick={() => setActiveCardId(getNextCardId(activeCardId))}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.4'}
                >
                  <div className="feature-content">
                    {featureCards[getNextCardId(activeCardId)].media && (
                      <div className="feature-media" style={{ marginBottom: 0 }}>
                        {featureCards[getNextCardId(activeCardId)].mediaType === 'video' ? (
                          <video 
                            src={featureCards[getNextCardId(activeCardId)].media} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="feature-media-element"
                          />
                        ) : (
                          <img 
                            src={featureCards[getNextCardId(activeCardId)].media} 
                            alt="" 
                            className="feature-media-element"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setActiveCardId(getNextCardId(activeCardId))}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    marginLeft: '1rem',
                    opacity: 0.6,
                    zIndex: 3
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.6';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <ChevronRight size={24} strokeWidth={3} style={{ color: '#8B5CF6' }} />
                </button>
              </div>
            )}

            <h1 style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              fontFamily: 'Libre Baskerville, serif',
              color: '#1a1a1a',
              margin: 0,
              padding: 0,
              letterSpacing: '0.1em',
              textShadow: '0 0 20px rgba(139, 92, 246, 0.2)',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              position: 'relative'
            }}>
              Daniel Wu
            </h1>

            <div style={{
              marginTop: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              alignItems: 'center',
                position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
              }}>
                <FeatureCard 
                  cardId={0}
                  isActive={activeCardId === 0}
                  onClick={() => setActiveCardId(0)}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#1a1a1a',
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '0.9rem',
                    fontWeight: 'normal',
                    cursor: 'pointer'
                  }}>
                    <Sparkle size={16} style={{ color: '#8B5CF6', opacity: activeCardId === 0 ? 1 : 0.7 }} />
                    <span>2a cs + finance @ uwaterloo</span>
                  </div>
                </FeatureCard>
                
                <FeatureCard 
                  cardId={1}
                  isActive={activeCardId === 1}
                  onClick={() => setActiveCardId(1)}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#1a1a1a',
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '0.9rem',
                    fontWeight: 'normal',
                    cursor: 'pointer'
                  }}>
                    <Sparkle size={16} style={{ color: '#8B5CF6', opacity: activeCardId === 1 ? 1 : 0.7 }} />
                    <span>prev product @ penseum</span>
                  </div>
                </FeatureCard>
                
                <FeatureCard 
                  cardId={2}
                  isActive={activeCardId === 2}
                  onClick={() => setActiveCardId(2)}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#1a1a1a',
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '0.9rem',
                    fontWeight: 'normal',
                    cursor: 'pointer'
                  }}>
                    <Sparkle size={16} style={{ color: '#8B5CF6', opacity: activeCardId === 2 ? 1 : 0.7 }} />
                    <span>10x hackathon winner</span>
                  </div>
                </FeatureCard>
              </div>

              <div style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'center'
              }}>
                <FeatureCard 
                  cardId={3}
                  isActive={activeCardId === 3}
                  onClick={() => setActiveCardId(3)}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#1a1a1a',
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '0.9rem',
                    fontWeight: 'normal',
                    cursor: 'pointer'
                  }}>
                    <Sparkle size={16} style={{ color: '#8B5CF6', opacity: activeCardId === 3 ? 1 : 0.7 }} />
                    <span>shipped a game to 3k users in &lt; 1 week</span>
                  </div>
                </FeatureCard>
                
                <FeatureCard 
                  cardId={4}
                  isActive={activeCardId === 4}
                  onClick={() => setActiveCardId(4)}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#1a1a1a',
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '0.9rem',
                    fontWeight: 'normal',
                    cursor: 'pointer'
                  }}>
                    <Sparkle size={16} style={{ color: '#8B5CF6', opacity: activeCardId === 4 ? 1 : 0.7 }} />
                    <span>math faculty rep</span>
                  </div>
                </FeatureCard>
                
                <FeatureCard 
                  cardId={5}
                  isActive={activeCardId === 5}
                  onClick={() => setActiveCardId(5)}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#1a1a1a',
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '0.9rem',
                    fontWeight: 'normal',
                    cursor: 'pointer'
                  }}>
                    <Sparkle size={16} style={{ color: '#8B5CF6', opacity: activeCardId === 5 ? 1 : 0.7 }} />
                    <span>very athletic</span>
                  </div>
                </FeatureCard>
              </div>
            </div>

            <div style={{ 
              marginTop: '2rem',
              display: 'flex', 
              gap: '1.5rem', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative'
            }}>
              <a 
                href="https://linkedin.com/in/dnlwu" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: '#1a1a1a',
                  cursor: 'pointer',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a1a'}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open('https://linkedin.com/in/dnlwu', '_blank');
                }}
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://x.com/dnl_wu" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: '#1a1a1a',
                  cursor: 'pointer',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a1a'}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open('https://x.com/dnl_wu', '_blank');
                }}
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://github.com/dnl-wu" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: '#1a1a1a',
                  cursor: 'pointer',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a1a'}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open('https://github.com/dnl-wu', '_blank');
                }}
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:daniel.wu@uwaterloo.ca" 
                style={{ 
                  color: '#1a1a1a',
                  cursor: 'pointer',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a1a'}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open('mailto:daniel.wu@uwaterloo.ca', '_blank');
                }}
              > 
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
