export default {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'ja', 'ko', 'es'],
    localePath: './public/locales',
    localeDetection: false,
  },
  fallbackLng: {
    default: ['zh']
  },
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  serializeConfig: false,
  react: {
    useSuspense: false,
  }
};