import React from 'react';

const CharitableTrust = () => {
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
        fontSize: '2.5rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        Charitable Trust
      </h1>
      
      <section style={{ 
        backgroundColor: '#fff5f5', 
        padding: '2rem', 
        marginBottom: '2rem',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ 
          color: '#c0392b', 
          marginBottom: '1rem',
          fontSize: '1.8rem'
        }}>
          School
        </h2>
        <p style={{ 
          lineHeight: '1.6', 
          color: '#333',
          fontSize: '1.1rem'
        }}>
          The Ragigudda Trust is running a school with classes up to S.S.L.C with nearly 1300 students, 
          both English and Kannada medium. All students are served with mid-day meals.
        </p>
      </section>

      <section style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '2rem', 
        marginBottom: '2rem',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ 
          color: '#c0392b', 
          marginBottom: '1rem',
          fontSize: '1.8rem'
        }}>
          Sanjeevini Arogya Tapasana Kendra
        </h2>
        <p style={{ 
          lineHeight: '1.6', 
          color: '#333',
          fontSize: '1.1rem'
        }}>
          A medical center offering free consultations, lab services, and ultrasound scanning.
        </p>
      </section>

      <section style={{ 
        backgroundColor: '#fff5f5', 
        padding: '2rem', 
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ 
          color: '#c0392b', 
          marginBottom: '1rem',
          fontSize: '1.8rem'
        }}>
          Kalyan Mandap
        </h2>
        <p style={{ 
          lineHeight: '1.6', 
          color: '#333',
          fontSize: '1.1rem'
        }}>
          A facility for people in need at a nominal charge, helping with maintenance and upkeep of the temple.
        </p>
      </section>
    </div>
  );
};

export default CharitableTrust;