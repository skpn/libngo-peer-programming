// svelte.config.js
import node from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default {
	kit: {
		adapter: node({ out: 'node-build' }),
		// add from here, plus the import path from 'path'
		vite: {
			optimizeDeps: {
				exclude: ['firebase', 'firebase-admin']
			},
			// plugins: [svelte()],
			server: {
				strictPort: false
			},
			ssr: {
				externals: ['firebase']
			}
		}
	},
	onwarn: (warning, handler) => {
		const { code } = warning;
		if (code === 'css-unused-selector' || code === 'a11y-mouse-events-have-key-events') return;
		handler(warning);
	},
	preprocess: preprocess({
		scss: {
			// prependData: `@import '${filePathsrc/styles/scss/_main.scss';`
		}
	})
};
