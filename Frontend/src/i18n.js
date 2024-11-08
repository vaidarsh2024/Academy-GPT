// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import tr from "./locales/tr.json";
import ar from "./locales/ar.json";
import es from "./locales/es.json";
import hi from "./locales/hi.json";
import zh from "./locales/zh.json";

// Detect browser language
const userLanguage = navigator.language || navigator.userLanguage;
const defaultLanguage = userLanguage.startsWith("fr")
  ? "fr"
  : userLanguage.startsWith("tr")
  ? "tr"
  : userLanguage.startsWith("ar")
  ? "ar"
  : userLanguage.startsWith("es")
  ? "es"
  : userLanguage.startsWith("hi")
  ? "hi"
  : userLanguage.startsWith("zh")
  ? "zh"
  : "en"; // Fallback to English if no match

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    tr: { translation: tr },
    ar: { translation: ar },
    es: { translation: es },
    hi: { translation: hi },
    zh: { translation: zh },
  },
  lng: defaultLanguage, // Set language based on user's default
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
