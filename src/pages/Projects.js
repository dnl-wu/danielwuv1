import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'On The Dot',
    description: 'Web-based trivia game. Guess as close to the 100th spot without exceeding.',
    image: '/assets/ProjectPhotos/OnTheDot.mp4',
    link: 'https://playonthedot.com',
    caseStudyLink: '/projects/onthedot',
  },
  {
    id: 2,
    name: 'LivePlay',
    description: 'Real-time custom trivia games for live sporting events.',
    image: '/assets/ProjectPhotos/LivePlay.png',
    link: 'https://danielwuv1.vercel.app/#/projects/liveplay',
    caseStudyLink: '/projects/liveplay',
  },
  {
    id: 3,
    name: 'Navigait',
    description:
      'Cursor for Onboarding. Live multi-modal assistant to fill in gaps in technical documentation.',
    image: '/assets/ProjectPhotos/Navigait.png',
    link: 'https://devpost.com/software/navigait',
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <NavBar />
      <main className="projects-container">
        <h1 className="projects-heading">Projects</h1>
        <p className="projects-subheading">Things I've built.</p>
        <div className="projects-grid">
          {projects.map((project) => (
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
      </main>
    </div>
  );
}

export default Projects;
