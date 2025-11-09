import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'lemon-time-theme';

const getInitialTheme = (): Theme => {
	if (!browser) {
		return 'light';
	}

	const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
	if (stored === 'light' || stored === 'dark') {
		return stored;
	}

	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	return prefersDark ? 'dark' : 'light';
};

const applyTheme = (theme: Theme) => {
	if (!browser) return;
	document.body.dataset.theme = theme;
	document.documentElement.dataset.theme = theme;
	document.documentElement.classList.toggle('dark', theme === 'dark');
	document.body.classList.toggle('dark', theme === 'dark');
};

function createThemeStore() {
	const initialTheme = getInitialTheme();
	const { subscribe, set, update } = writable<Theme>(initialTheme, (setTheme) => {
		applyTheme(initialTheme);

		if (!browser) return;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const listener = (event: MediaQueryListEvent) => {
			setTheme(event.matches ? 'dark' : 'light');
		};

		mediaQuery.addEventListener('change', listener);

		return () => {
			mediaQuery.removeEventListener('change', listener);
		};
	});

	return {
		subscribe,
		set: (theme: Theme) => {
			set(theme);
			if (browser) {
				window.localStorage.setItem(THEME_STORAGE_KEY, theme);
			}
			applyTheme(theme);
		},
		toggle: () => {
			update((current) => {
				const next = current === 'light' ? 'dark' : 'light';
				if (browser) {
					window.localStorage.setItem(THEME_STORAGE_KEY, next);
				}
				applyTheme(next);
				return next;
			});
		}
	};
}

export const theme = createThemeStore();

