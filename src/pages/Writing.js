import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import './Writing.css';

function Writing() {
  const posts = [
    {
      title: "On The Dot - Shipping a trivia game to 3000 users in < 1 week",
      slug: "onthedot"
    },
    {
      title: "LivePlay - Building real-time fan interaction into live suporting events",
      slug: "liveplay"
    }
  ];

  return (
    <div className="writing-container">
      <div className="writing-nav">
        <div className="writing-nav-content">
          <ul className="writing-nav-list">
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

      <div className="writing-main">
        <ul className="writing-posts-list">
          {posts.map(({ title, slug }) => (
            <li key={slug} className="writing-post-item">
              <Link 
                to={`/projects/${slug}`}
                className="writing-post-link"
              >
                {title}
                <ExternalLink size={16} style={{ flexShrink: 0 }} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Writing;
