import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import './Projects.css';

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
      description: "Real-time custom trivia games for live sporting events.",
      image: "/assets/ProjectPhotos/LivePlay.png",
      link: "https://danielwuv1.vercel.app/#/projects/liveplay",
      caseStudyLink: "/projects/liveplay"
    },
    {
      id: 3,
      name: "Navigait",
      description: "Cursor for Onboarding. Live multi-modal assistant to fill in gaps in technical documentation.",
      image: "/assets/ProjectPhotos/Navigait.png",
      link: "https://devpost.com/software/navigait"
    }
  ];
  
  return (
    <div className="projects-container">
      <div className="projects-background"></div>
      <div className="projects-content-wrapper">
        <div className="projects-nav">
          <div className="projects-nav-content">
            <ul className="projects-nav-list">
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

        <div className="projects-main">
          <div className="projects-list-container">
            <div className="projects-list">
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
