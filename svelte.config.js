import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const isDev = process.argv.includes('dev');

/** @type {import('mdsevx').MdsvexOptions} */
const markdownConfig = {
	extensions: ['.md'],
	layout: './src/routes/blog/posts/markdown-layout.svelte'
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(markdownConfig)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			//This should always match the name of the repository
			base: isDev ? '' : '/website'
		}
	}
};

export default config;
