import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NavBar from '../components/NavBar/NavBar';
import './Writing.css';

const posts = [
  {
    title: 'On The Dot — Shipping a trivia game to 3000 users in < 1 week',
    slug: 'onthedot',
  },
  {
    title: 'LivePlay — Building real-time fan interaction into live sporting events',
    slug: 'liveplay',
  },
];

function Writing() {
  return (
    <div className="writing-page">
      <NavBar />
      <main className="writing-container">
        <h1 className="writing-heading">Writing</h1>
        <p className="writing-subheading">Case studies and stories.</p>
        <ul className="writing-list">
          {posts.map(({ title, slug }) => (
            <li key={slug} className="writing-item">
              <Link to={`/projects/${slug}`} className="writing-link">
                <span>{title}</span>
                <ArrowRight size={16} className="writing-arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Writing;
