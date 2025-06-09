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

      <div className={styles.bottom}>
        <p>© 2025 {t('footer.title')}. {t('footer.rights')}</p>
        <p>
          {t('footer.developedBy')}{' '}
          <a
            href="https://wa.me/917989288815?text=Hi%20Yaswanth%20Kumar%20CH%2C%20I%20am%20looking%20for%20a%20website%20for%20my%20company."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.devLink}
          >
            {t('footer.name')}
          </a>{' '}
          | Phone: <a href="tel:+917989288815" className={styles.devLink}>+91 7989288815</a>
        </p>

        <div className={styles.social}>
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://yourwebsite.com" target="_blank" rel="noreferrer" aria-label="Website">
            <FaGlobeAsia />
          </a>
          <a href="mailto:your@email.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          {/* <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a> */}
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
