import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './BlogPost.css';

function BlogPost({ markdownPath }) {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  
  useEffect(() => {
    if (markdownPath) {
      fetch(markdownPath)
        .then((response) => response.text())
        .then((text) => {
          // Extract title (first h1)
          const titleMatch = text.match(/^#\s+(.+)$/m);
          if (titleMatch) {
            setTitle(titleMatch[1]);
            // Remove the title from content
            text = text.replace(/^#\s+.+$/m, '').trim();
          }
          
          // Extract subtitle (bold text right after title)
          const subtitleMatch = text.match(/^\*\*(.+)\*\*$/m);
          if (subtitleMatch) {
            setSubtitle(subtitleMatch[1]);
            // Remove the subtitle from content
            text = text.replace(/^\*\*(.+)\*\*$/m, '').trim();
          }
          
          setContent(text);
        })
        .catch((error) => {
          console.error('Error loading markdown:', error);
        });
    }
  }, [markdownPath]);
  return (
    <div className="blog-post-wrapper">
      <div className="blog-post-background"></div>
      
      <div className="blog-post-container">
        <div className="blog-post-navbar">
          <div className="blog-post-navbar-content">
            <ul className="blog-post-nav-list">
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
                <NavLink to="/writing" style={{ 
                  color: '#1a1a1a', 
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(139, 92, 246, 0.4)',
                  textDecorationThickness: '1px',
                  textUnderlineOffset: '6px',
                  fontFamily: 'Libre Baskerville, serif',
                  fontWeight: 'normal',
                  letterSpacing: '0.1em'
                }}>
                  writing
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="blog-post-content">
          <article className="blog-post-article">
            <header className="blog-post-header">
              <h1 className="blog-post-title">{title}</h1>
              {subtitle && <p className="blog-post-subtitle">{subtitle}</p>}
            </header>
            <div className="blog-post-body">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({node, ...props}) => <h2 className="blog-post-h2" {...props} />,
                  h3: ({node, ...props}) => <h3 className="blog-post-h3" {...props} />,
                  p: ({node, ...props}) => <p className="blog-post-p" {...props} />,
                  a: ({node, ...props}) => <a className="blog-post-link" {...props} />,
                  code: ({node, inline, ...props}) => 
                    inline ? <code className="blog-post-code-inline" {...props} /> : <code {...props} />,
                  ul: ({node, ...props}) => <ul className="blog-post-ul" {...props} />,
                  ol: ({node, ...props}) => <ol className="blog-post-ol" {...props} />,
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
