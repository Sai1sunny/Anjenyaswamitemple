import React from 'react';
import styles from './Footer.module.scss';
import { FaWhatsapp, FaGlobeAsia, FaEnvelope, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('footer.subscriptionSuccess'));
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h2>🕉️ {t('footer.title')}</h2>
          <p>{t('footer.tagline')}</p>
        </div>

        <div className={styles.newsletter}>
          <p>{t('footer.newsletterText')}</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder={t('footer.emailPlaceholder')}
              required
            />
            <button type="submit">{t('footer.subscribe')}</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

