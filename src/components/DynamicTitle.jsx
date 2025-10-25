"use client";
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const DynamicTitle = () => {
  const { language } = useLanguage();
  const { t } = useTranslation('common');

  useEffect(() => {
    const title = t('siteTitle');
    const description = t('siteDescription');

    document.title = title;

    // 更新 meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // 更新 html lang 属性
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
  }, [language, t]);

  return null;
};

export default DynamicTitle;