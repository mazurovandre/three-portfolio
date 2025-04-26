import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      name: 'Your Name',
      contacts: 'Contacts',
      email: 'Email',
      phone: 'Phone',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      theme: 'Theme',
      language: 'Language',
      about: 'About Me',
      description: 'Your professional description and skills here...',
    },
  },
  ru: {
    translation: {
      name: 'Ваше Имя',
      contacts: 'Контакты',
      email: 'Электронная почта',
      phone: 'Телефон',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      theme: 'Тема',
      language: 'Язык',
      about: 'Обо мне',
      description: 'Ваше профессиональное описание и навыки...',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
