import React from 'react';
import { useTranslation } from 'react-i18next';

const History = () => {
  const { t } = useTranslation();

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: '#f4f7fa',
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{
        color: '#ff6f61',
        textAlign: 'center',
        marginBottom: '1rem',
        fontSize: '2.75rem',
        fontWeight: '700',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
      }}>
        {t('templeHistory.title')}
      </h1>
<p style={{
  fontSize: '1.15rem',
  color: '#333',
  textAlign: 'justify',
  lineHeight: '1.9',
  marginBottom: '2rem', // space below the first paragraph
  transition: 'all 0.3s ease',
}}>
  {t('templeHistory.paragraph1')}
</p>

<hr style={{
  borderTop: '2px dashed #ccc',
  margin: '1.5rem 0' // space above and below the dashed line
}} />

<p style={{
  fontSize: '1.15rem',
  color: '#333',
  textAlign: 'justify',
  lineHeight: '1.9',
  marginTop: '1rem', // space above the second paragraph
  transition: 'all 0.3s ease',
}}>
  {t('templeHistory.paragraph2')}
</p>
{/* 
      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <button style={{
          backgroundColor: '#ff6f61',
          color: '#fff',
          border: 'none',
          padding: '0.75rem 2rem',
          fontSize: '1rem',
          fontWeight: '600',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e85b50'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff6f61'}
        >
          {t('templeHistory.readMore') || 'Read More'}
        </button>
      </div> */}
    </div>
  );
};

export default History;
