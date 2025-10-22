import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Book } from 'lucide-react';
import './ProjectCard.css';

function ProjectCard({ name, description, image, link, caseStudyLink }) {
  const isVideo = image?.endsWith('.mp4');
  
  return (
    <div className="project-card">
      <div className="project-image-container">
        {isVideo ? (
          <video 
            src={image} 
            className="project-image"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img 
            src={image} 
            alt={name}
            className="project-image"
          />
        )}
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-name">{name}</h3>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
        <p className="project-description">{description}</p>
        {caseStudyLink && (
          <Link 
            to={caseStudyLink}
            className="project-case-study-link"
            onClick={(e) => e.stopPropagation()}
          >
            <Book size={16} />
            <span>Read about how I made it</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
