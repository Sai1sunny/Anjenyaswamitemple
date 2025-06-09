// TourOfTemple.js
import React from 'react';

const TourOfTemple = () => {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: "'Arial', sans-serif"
    }}>
      <h1 style={{
        color: '#8e1e1a',
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '2.5rem'
      }}>
        Tour of the Temple
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {[
          { 
            title: 'Footwear Stand',
            desc: 'A system to maintain slippers in separate bags with full care.'
          },
          {
            title: 'Hanuman Dhara',
            desc: 'A beautiful water fountain set between rocks and trees for a serene experience.'
          },
          {
            title: 'Parna Kuteera',
            desc: 'A hermitage-like place for yagya and homas, complete with a small waterfall.'
          },
          {
            title: 'Thrimurthy Sannidhi',
            desc: 'Beautifully carved Thrimurthies, standing 32 feet tall on monolithic blocks.'
          }
        ].map((feature, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: '#fff5f5',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{
              color: '#c0392b',
              marginBottom: '1rem',
              fontSize: '1.5rem'
            }}>
              {feature.title}
            </h2>
            <p style={{ lineHeight: '1.6', color: '#444' }}>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourOfTemple;