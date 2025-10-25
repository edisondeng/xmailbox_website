'use client';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    debug: false, // 生产环境关闭调试模式
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // 启用浏览器语言检测
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      // 映射浏览器语言到我们的语言代码
      convertDetectedLanguage: (lng) => {
        // 将浏览器的语言代码映射到我们支持的语言代码
        const languageMap = {
          'zh-CN': 'zh',
          'zh-TW': 'zh',
          'zh-HK': 'zh',
          'en-US': 'en',
          'en-GB': 'en',
          'en-AU': 'en',
          'en-CA': 'en',
          'ja-JP': 'ja',
          'ko-KR': 'ko',
          'es-ES': 'es',
          'es-MX': 'es',
          'fr-FR': 'fr',
          'fr-CA': 'fr',
          'de-DE': 'de',
          'de-AT': 'de',
          'pt-BR': 'pt',
          'pt-PT': 'pt'
        };

        // 首先检查完整映射
        if (languageMap[lng]) {
          return languageMap[lng];
        }

        // 提取语言代码的第一部分（如 en-US -> en）
        const shortLng = lng.split('-')[0];

        // 检查是否是我们支持的语言
        const supportedLanguages = ['zh', 'en', 'ja', 'ko', 'es', 'fr', 'de', 'pt'];
        if (supportedLanguages.includes(shortLng)) {
          return shortLng;
        }

        // 如果不支持，返回原语言代码（会触发fallback）
        return lng;
      }
    },
  });

export default i18n;