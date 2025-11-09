import de from './de.json';
import en from './en.json';
import tr from './tr.json';

export type AvailableLocale = 'de' | 'tr' | 'en';

export type TranslationDictionary = typeof de;

export const dictionaries: Record<AvailableLocale, TranslationDictionary> = {
	de,
	tr,
	en
};

export const getNavigationLabels = (locale: AvailableLocale) => dictionaries[locale].nav;

