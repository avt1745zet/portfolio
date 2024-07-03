import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import zhHant from "./zh-hant/translation.json";
import en from "./en/translation.json";

const resources: Resource = {
	"zh-Hant": {
		translation: zhHant
	},
	en: {
		translation: en
	}
};

i18n.use( initReactI18next ).init( {
	fallbackLng: "zh-Hant",
	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},
	resources: resources,
	debug: true
} );