import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

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
    <div style={{ 
      height: '100vh', 
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ 
        padding: '2rem 2rem 1rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <ul style={{ 
          listStyle: 'disc',
          listStylePosition: 'inside',
          padding: 0,
          margin: 0,
          maxWidth: '800px',
          width: '100%',
          textAlign: 'center'
        }}>
          {posts.map(({ title, slug }) => (
            <li key={slug} style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              marginBottom: '1rem',
              fontFamily: 'Libre Baskerville, serif',
              listStyle: 'none'
            }}>
              <Link 
                to={`/projects/${slug}`}
                style={{
                  color: '#1a1a1a',
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(139, 92, 246, 0.6)',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
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
