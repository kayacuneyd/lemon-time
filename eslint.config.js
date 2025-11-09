import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import tailwindcss from 'eslint-plugin-tailwindcss';
import prettier from 'eslint-config-prettier';

const projectSettings = {
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: import.meta.dirname
	},
	globals: {
		...globals.browser,
		...globals.node
	}
};

const tsTypeCheckedRules = Object.assign(
	{},
	...tseslint.configs.recommendedTypeChecked.map((config) => config.rules ?? {})
);
const tsStylisticRules = Object.assign(
	{},
	...tseslint.configs.stylisticTypeChecked.map((config) => config.rules ?? {})
);
const svelteRecommended = svelte.configs['flat/recommended'];

export default [
	{
		ignores: ['.svelte-kit', 'build', 'dist', 'node_modules', 'eslint.config.js', 'svelte.config.js']
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			sourceType: 'module',
			...projectSettings,
			parser: tseslint.parser,
			globals: {
				...projectSettings.globals
			}
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			tailwindcss
		},
		rules: {
			...js.configs.recommended.rules,
			...tsTypeCheckedRules,
			...tsStylisticRules,
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'tailwindcss/classnames-order': 'warn',
			'tailwindcss/no-custom-classname': 'off'
		},
		settings: {
			tailwindcss: {
				config: 'tailwind.config.cjs',
				callees: ['cn']
			}
		}
	},
	...svelteRecommended,
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				...projectSettings.parserOptions,
				extraFileExtensions: ['.svelte'],
				parser: tseslint.parser
			},
			globals: {
				...projectSettings.globals
			}
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			tailwindcss
		},
		rules: {
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'svelte/no-navigation-without-resolve': 'off',
			'tailwindcss/classnames-order': 'warn',
			'tailwindcss/no-custom-classname': 'off'
		},
		settings: {
			tailwindcss: {
				config: 'tailwind.config.cjs',
				callees: ['cn']
			}
		}
	},
	prettier
];
