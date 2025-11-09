const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				sm: '2rem'
			},
			screens: {
				'2xl': '1280px'
			}
		},
		extend: {
			colors: {
				brand: {
					primary: '#A9C447',
					secondary: '#1A2F4B',
					accent: '#FFD700',
					dark: '#0D1A2D',
					light: '#F5F5F5'
				},
				neutral: {
					50: '#FFFFFF',
					100: '#F5F5F5',
					200: '#E5E7EB',
					300: '#D1D5DB',
					500: '#6B7280',
					700: '#374151',
					900: '#111827'
				},
				surface: {
					DEFAULT: '#FFFFFF',
					muted: '#F8FAFC',
					strong: '#1A2F4B'
				}
			},
			fontFamily: {
				sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
				display: ['"Poppins"', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				'2xl': ['1.5rem', { lineHeight: '1.3' }],
				'3xl': ['1.875rem', { lineHeight: '1.25' }],
				'4xl': ['2.25rem', { lineHeight: '1.2' }],
				'5xl': ['3rem', { lineHeight: '1.15' }]
			},
			spacing: {
				18: '4.5rem',
				22: '5.5rem',
				26: '6.5rem',
				30: '7.5rem'
			},
			boxShadow: {
				card: '0 20px 45px -20px rgba(17, 24, 39, 0.25)'
			},
			borderRadius: {
				'4xl': '2rem'
			},
			opacity: {
				65: '0.65'
			},
			transitionTimingFunction: {
				'smooth-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
			}
		}
	},
	plugins: []
};
