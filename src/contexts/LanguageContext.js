"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@/lib/i18n';

// 创建语言上下文
const LanguageContext = createContext();

// 定义语言选项
const languages = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
  ko: '한국어',
  es: 'Español'
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