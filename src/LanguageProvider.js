import React, { createContext, useState, useEffect } from 'react';
import i18n from 'i18next';

// Create the Language Context
export const LanguageContext = createContext();

// Language Provider component to wrap around the app
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language); // Initial language state

  useEffect(() => {
    const changeLanguage = (newLang) => {
      if (newLang !== i18n.language) {  // Only change language if it's different
        i18n.changeLanguage(newLang);  // Change language using i18n
        setLanguage(newLang); // Update the state
      }
    };

    // Listen for changes in language and update state
    i18n.on('languageChanged', changeLanguage);

    // Cleanup on unmount
    return () => {
      i18n.off('languageChanged', changeLanguage);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage: i18n.changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
