import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
// import de from "./locales/es.json";
// import nl from "./locales/fr.json";
// import es from "./locales/it.json";
// import it from "./locales/nl.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    // de: { translation: de },
    // nl: { translation: nl },
    // es: { translation: es },
    // it: { translation: it },
  },

  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;