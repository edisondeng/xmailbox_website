'use client';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// Import translation files using dynamic imports for App Router
const resources = {
  zh: {
    common: require('../../public/locales/zh/common.json'),
    home: require('../../public/locales/zh/home.json'),
    navbar: require('../../public/locales/zh/navbar.json'),
    product: require('../../public/locales/zh/product.json'),
    help: require('../../public/locales/zh/help.json'),
  },
  en: {
    common: require('../../public/locales/en/common.json'),
    home: require('../../public/locales/en/home.json'),
    navbar: require('../../public/locales/en/navbar.json'),
    product: require('../../public/locales/en/product.json'),
    help: require('../../public/locales/en/help.json'),
  },
  ja: {
    common: require('../../public/locales/ja/common.json'),
    home: require('../../public/locales/ja/home.json'),
    navbar: require('../../public/locales/ja/navbar.json'),
    product: require('../../public/locales/ja/product.json'),
    help: require('../../public/locales/ja/help.json'),
  },
  ko: {
    common: require('../../public/locales/ko/common.json'),
    home: require('../../public/locales/ko/home.json'),
    navbar: require('../../public/locales/ko/navbar.json'),
    product: require('../../public/locales/ko/product.json'),
    help: require('../../public/locales/ko/help.json'),
  },
  es: {
    common: require('../../public/locales/es/common.json'),
    home: require('../../public/locales/es/home.json'),
    navbar: require('../../public/locales/es/navbar.json'),
    product: require('../../public/locales/es/product.json'),
    help: require('../../public/locales/es/help.json'),
  },
  fr: {
    common: require('../../public/locales/fr/common.json'),
    home: require('../../public/locales/fr/home.json'),
    navbar: require('../../public/locales/fr/navbar.json'),
    product: require('../../public/locales/fr/product.json'),
    help: require('../../public/locales/fr/help.json'),
  },
  de: {
    common: require('../../public/locales/de/common.json'),
    home: require('../../public/locales/de/home.json'),
    navbar: require('../../public/locales/de/navbar.json'),
    product: require('../../public/locales/de/product.json'),
    help: require('../../public/locales/de/help.json'),
  },
  pt: {
    common: require('../../public/locales/pt/common.json'),
    home: require('../../public/locales/pt/home.json'),
    navbar: require('../../public/locales/pt/navbar.json'),
    product: require('../../public/locales/pt/product.json'),
    help: require('../../public/locales/pt/help.json'),
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh', // default language
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;