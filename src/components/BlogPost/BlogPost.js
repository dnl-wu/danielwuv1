import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import NavBar from '../NavBar/NavBar';
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
          const titleMatch = text.match(/^#\s+(.+)$/m);
          if (titleMatch) {
            setTitle(titleMatch[1]);
            text = text.replace(/^#\s+.+$/m, '').trim();
          }

          const subtitleMatch = text.match(/^\*\*(.+)\*\*$/m);
          if (subtitleMatch) {
            setSubtitle(subtitleMatch[1]);
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
    <div className="blog-post-page">
      <NavBar />
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
                h2: ({ node, children, ...props }) => <h2 className="blog-post-h2" {...props}>{children}</h2>,
                h3: ({ node, children, ...props }) => <h3 className="blog-post-h3" {...props}>{children}</h3>,
                p: ({ node, children, ...props }) => <p className="blog-post-p" {...props}>{children}</p>,
                a: ({ node, children, ...props }) => <a className="blog-post-link" {...props}>{children}</a>,
                code: ({ node, inline, children, ...props }) =>
                  inline ? (
                    <code className="blog-post-code-inline" {...props}>{children}</code>
                  ) : (
                    <code {...props}>{children}</code>
                  ),
                ul: ({ node, children, ...props }) => <ul className="blog-post-ul" {...props}>{children}</ul>,
                ol: ({ node, children, ...props }) => <ol className="blog-post-ol" {...props}>{children}</ol>,
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogPost;
