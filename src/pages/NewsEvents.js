import React from 'react';
import { useTranslation } from 'react-i18next';

const NewsEvents = () => {
  const { t } = useTranslation();

  return (
    <div style={{
      padding: '4rem 2rem',
      textAlign: 'center',
      backgroundColor: '#fff5e1',
      minHeight: '50vh',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <h1 style={{
        color: '#d32f2f',
        fontSize: '2.8rem',
        marginBottom: '1.5rem',
        position: 'relative',
        display: 'inline-block',
      }}>
        🕉️ {t('newsEvent.title')}
        <div style={{
          width: '80px',
          height: '3px',
          backgroundColor: '#FFD700',
          margin: '0.5rem auto',
        }}></div>
      </h1>

      <p style={{ fontSize: '1.3rem', color: '#333', lineHeight: '1.8' }}>
        🗓️ {t('newsEvent.date')}<br />
        ⏰ {t('newsEvent.time')}<br />
        📍 {t('newsEvent.location')}
      </p>

      <p style={{ fontSize: '1.3rem', color: '#333', lineHeight: '1.8' }}>
        🙏 {t('newsEvent.description1')}<br />
        🕉️ {t('newsEvent.description2')}<br />
        🍽️ {t('newsEvent.description3')}
      </p>

      <p style={{
        fontSize: '1.1rem',
        color: '#8e1e1a',
        fontStyle: 'italic',
        marginTop: '2rem',
      }}>
        {t('newsEvent.stayTuned')}
      </p>
    </div>
  );
};

export default NewsEvents;
