import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language files
import en from './locales/en.json';
// import kn from './locales/kn.json';
import te from './locales/te.json';
// import ta from './locales/ta.json';

i18n
  .use(initReactI18next)  // Passes i18n instance to React
  .init({
    resources: {
      en: { translation: en },
      // kn: { translation: kn },
      te: { translation: te }
      // ta: { translation: ta }
    },
    lng: 'te',  // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false  // React already escapes values
    }
  });

export default i18n;
