"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@/lib/i18n';

// 创建语言上下文
const LanguageContext = createContext();

// 检测浏览器语言的函数
const detectBrowserLanguage = () => {
  if (typeof window === 'undefined') return null; // 服务器端不执行

  const browserLang = navigator.language || navigator.userLanguage;

  // 支持的语言映射表
  const supportedLanguages = {
    'zh': 'zh',
    'zh-cn': 'zh',
    'zh-CN': 'zh',
    'zh-tw': 'zh',
    'zh-TW': 'zh',
    'en': 'en',
    'en-us': 'en',
    'en-US': 'en',
    'en-gb': 'en',
    'en-GB': 'en',
    'ja': 'ja',
    'ja-jp': 'ja',
    'ja-JP': 'ja',
    'ko': 'ko',
    'ko-kr': 'ko',
    'ko-KR': 'ko',
    'es': 'es',
    'es-es': 'es',
    'es-ES': 'es',
    'es-mx': 'es',
    'es-MX': 'es',
    'fr': 'fr',
    'fr-fr': 'fr',
    'fr-FR': 'fr',
    'de': 'de',
    'de-de': 'de',
    'de-DE': 'de',
    'pt': 'pt',
    'pt-pt': 'pt',
    'pt-PT': 'pt',
    'pt-br': 'pt',
    'pt-BR': 'pt'
  };

  // 获取匹配的语言代码
  const detectedLang = supportedLanguages[browserLang.toLowerCase()];

  // 如果直接匹配到了，返回对应的语言代码
  if (detectedLang) {
    return detectedLang;
  }

  // 尝试匹配主语言代码（如从 'en-US' 中提取 'en'）
  const primaryLang = browserLang.split('-')[0].toLowerCase();
  return supportedLanguages[primaryLang] || null;
};

// 定义语言选项
const languages = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
  ko: '한국어',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português'
};

// 语言提供者组件
export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'zh'); // 默认语言为中文

  useEffect(() => {
    // 从localStorage获取保存的语言偏好
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
      setLanguage(savedLanguage);
      return;
    }

    // 如果没有保存的语言偏好，检测浏览器语言
    if (!savedLanguage) {
      const browserLanguage = detectBrowserLanguage();
      if (browserLanguage && browserLanguage !== i18n.language) {
        i18n.changeLanguage(browserLanguage);
        setLanguage(browserLanguage);
        localStorage.setItem('language', browserLanguage);
      }
    }
  }, [i18n]);

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    // 保存语言偏好到localStorage
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定义钩子，用于在组件中使用语言上下文
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;