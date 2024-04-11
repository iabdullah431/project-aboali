import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector"
import translationEn from './local/en.json'
import translationAr from './local/ar.json'


const resources = {
  en: {
    translation: translationEn
  },
  ar: {
    translation: translationAr
  }
};

i18n
.use(languageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false 
    },

  });

  export default i18n;