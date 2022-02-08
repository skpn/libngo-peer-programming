module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['svelte3'],
	rules: {
		'no-use-before-define': ['error', 'nofunc'],
		'sort-keys': ['error']
	},
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
			settings: {
				'svelte3/ignore-styles': () => true,
				'svelte3/ignore-warnings': (warning) =>
					warning.code.includes('a11y') || warning.code.includes('A11y')
			}
		}
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
