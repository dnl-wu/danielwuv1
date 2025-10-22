import React from 'react';
import './FeatureCard.css';

function FeatureCard({ children, isActive, onClick }) {
  return (
    <div 
      className="feature-trigger"
      onClick={onClick}
      style={{ 
        position: 'relative', 
        display: 'inline-block',
        cursor: 'pointer',
        opacity: isActive ? 1 : 0.7,
        transition: 'opacity 0.2s ease'
      }}
    >
      {children}
    </div>
  );
}

export default FeatureCard;
