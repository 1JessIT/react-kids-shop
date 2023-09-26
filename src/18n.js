import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: {
        Hugthetiger: "HugTheTiger",
        baby: "Baby",
        kids: "Kids",
        sale: "Sale",
        search: "Search for products...",
      },
    },
    ru: {
      translation: {
        Hugthetiger: "ОбнимиТигра",
        baby: "Младенец",
        kids: "Ребенок",
        sale: "Скидки",
        search: "Найти продукт...",
      },
    },
  },
});

export default i18n;
