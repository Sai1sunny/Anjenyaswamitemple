import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();  // Use the `t` function for translation

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '1100px',
      margin: '0 auto',
      fontFamily: "'Segoe UI', sans-serif",
      background: 'linear-gradient(to right, #fff8f6, #fff2ec)',
      borderRadius: '15px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
    }}>
      <h1 style={{
        color: '#8e1e1a',
        textAlign: 'center',
        fontSize: '2.8rem',
        position: 'relative',
        marginBottom: '2rem'
      }}>
        {t('contactUs')} {/* Use translation key */}
        <span style={{
          position: 'absolute',
          left: '50%',
          bottom: '-10px',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '4px',
          backgroundColor: '#f4b400',
          borderRadius: '2px'
        }}></span>
      </h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Animated Rotating Globe */}
        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
          <img
            src="/globe-temple.gif" // Use your globe image here
            alt="Rotating Globe"
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              animation: 'spin 60s linear infinite', // slow 60s spin
              filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))'
            }}
          />
          <p style={{
            marginTop: '1rem',
            fontSize: '1rem',
            color: '#8e1e1a',
            fontWeight: 'bold'
          }}>
            {t('connectingDevotees')} 🌍 {/* Use translation key */}
          </p>
        </div>

        {/* Contact Info */}
        <div style={{
          flex: '1 1 400px',
          backgroundColor: '#fff5f0',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 6px 18px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ color: '#c0392b', marginBottom: '1rem' }}>
            <i className="fas fa-map-marker-alt" style={{ marginRight: '10px' }}></i>
            {t('address')} {/* Use translation key */}
          </h3>
          <p style={{ color: '#555', marginBottom: '1.5rem' }}>
            {t('addressText')} {/* Use translation key for address text */}
          </p>

          <h3 style={{ color: '#c0392b', marginBottom: '1rem' }}>
            <i className="fas fa-phone-alt" style={{ marginRight: '10px' }}></i>
            {t('contact')} {/* Use translation key */}
          </h3>
          <p style={{ color: '#555', marginBottom: '1.5rem' }}>
            {t('phoneNumber')} {/* Use translation key */}
          </p>

          <h3 style={{ color: '#c0392b', marginBottom: '1rem' }}>
            <i className="fas fa-envelope" style={{ marginRight: '10px' }}></i>
            {t('email')} {/* Use translation key */}
          </h3>
          <p style={{ color: '#555' }}>
            <a href="mailto:divyomtech@gmail.com" style={{
              color: '#8e1e1a',
              textDecoration: 'none'
            }}>{t('emailAddress')}</a> {/* Use translation key */}
          </p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div style={{
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem'
      }}>
        {['facebook', 'twitter', 'instagram', 'youtube'].map((platform, index) => (
          <a
            key={index}
            href={`https://www.${platform}.com/yourpage`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '1.8rem',
              color: '#8e1e1a',
              transition: '0.3s ease'
            }}
          >
            <i className={`fab fa-${platform}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
