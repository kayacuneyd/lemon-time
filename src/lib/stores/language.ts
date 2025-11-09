import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';

export type Locale = 'de' | 'tr' | 'en';

const LOCALE_STORAGE_KEY = 'lemon-time-locale';

const getInitialLocale = (): Locale => {
	if (!browser) return 'de';
	const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
	if (stored && ['de', 'tr', 'en'].includes(stored)) {
		return stored;
	}
	if (browser) {
		const navigatorLanguage = window.navigator.language?.slice(0, 2).toLowerCase();
		if (navigatorLanguage === 'de' || navigatorLanguage === 'tr' || navigatorLanguage === 'en') {
			return navigatorLanguage;
		}
	}
	return 'de';
};

function createLocaleStore() {
	const { subscribe, set } = writable<Locale>(getInitialLocale());

	return {
		subscribe,
		set: (locale: Locale) => {
			set(locale);
			if (browser) {
				window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
			}
		}
	};
}

export const locale = createLocaleStore();

export const localeLabel = derived(locale, ($locale) => {
	switch ($locale) {
		case 'tr':
			return 'Türkçe';
		case 'en':
			return 'English';
		default:
			return 'Deutsch';
	}
});

