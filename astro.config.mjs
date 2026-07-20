// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://fuck-claude.vercel.app',
  output: 'static',
  adapter: cloudflare({ prerenderEnvironment: 'node' }),
  i18n: {
    locales: ['en', 'zh', 'ja', 'ko', 'fr', 'de', 'es', 'pt', 'ru', 'ar', 'hi', 'it', 'nl', 'pl', 'tr', 'vi', 'th', 'id'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-CN',
          ja: 'ja-JP',
          ko: 'ko-KR',
          fr: 'fr-FR',
          de: 'de-DE',
          es: 'es-ES',
          pt: 'pt-BR',
          ru: 'ru-RU',
          ar: 'ar-SA',
          hi: 'hi-IN',
          it: 'it-IT',
          nl: 'nl-NL',
          pl: 'pl-PL',
          tr: 'tr-TR',
          vi: 'vi-VN',
          th: 'th-TH',
          id: 'id-ID',
        },
      },
    }),
  ],
});
