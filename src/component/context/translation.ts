import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import vn from '../language/vn';
import en from '../language/en';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      vn: {
        translation: vn,
      },
      en: {
        translation: en,
      },
    },
    lng: 'vn',
    fallbackLng: 'vn',
    interpolation: {
      escapeValue: false,
    },
   
    
  });

export default i18n;
