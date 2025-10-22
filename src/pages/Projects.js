import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard/ProjectCard';

function Projects() {
  const projects = [
    {
      id: 1,
      name: "On The Dot",
      description: "Web-based trivia game. Guess as close to the 100th spot without exceeding.",
      image: "/assets/ProjectPhotos/OnTheDot.mp4",
      link: "https://playonthedot.com",
      caseStudyLink: "/projects/onthedot"
    },
    {
      id: 2,
      name: "LivePlay",
      description: "A cool project that does amazing things. Built with React and modern web technologies.",
      image: "/assets/ProjectPhotos/LivePlay.png",
      link: "https://example.com",
      caseStudyLink: "/projects/liveplay"
    },
    {
      id: 3,
      name: "Navigait",
      description: "An innovative solution to a complex problem. Features cutting-edge design and functionality.",
      image: "/assets/ProjectPhotos/Navigait.png",
      link: "https://devpost.com/software/navigait"
    }
  ];
  
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
          overflowY: 'auto',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ 
            width: '100%',
            maxWidth: '600px',
            padding: '2rem 0'
          }}>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              marginTop: '1rem'
            }}>
              {projects.map(project => (
                <ProjectCard 
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  caseStudyLink={project.caseStudyLink}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;