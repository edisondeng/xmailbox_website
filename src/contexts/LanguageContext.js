"use client";
import React, { createContext, useState, useContext } from 'react';

// 创建语言上下文
const LanguageContext = createContext();

// 定义语言选项
const languages = {
  zh: '中文',
  en: 'English'
};

// 语言提供者组件
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('zh'); // 默认语言为中文

  const switchLanguage = (lang) => {
    setLanguage(lang);
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