import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	assetsInclude: ['**/*.vtt'],

	logLevel: 'info',

	plugins: [
		sveltekit()
	],

	ssr: {
		noExternal: ['@sveltejs/site-kit']
	},
	optimizeDeps: {
		exclude: ['@sveltejs/site-kit']
	},

	server: {
		fs: {
			strict: false
		}
	}
};

export default config;
