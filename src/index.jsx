import React from 'react';
import { render } from 'react-dom';

import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import App from './App';

import './index.css';

i18next
  .use(HttpApi)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: false,
    whitelist: ['en', 'tr'],
    supportedLngs: ['en', 'tr'],
    fallbackLng: 'en',
    detection: {
      order: ['path', 'htmlTag'],
    },
    backend: {
      loadPath: '/assets/translations/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  })
  .then(() => {
    render(<App />, document.getElementById('3d-donate'));
  });
