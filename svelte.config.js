import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
/** @type {import('@sveltejs/kit').Config} */
import path from 'path';

const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [mdsvex({ extensions: ['.svelte', '.md', '.svx'] })],
	kit: {
		adapter: adapter(),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					$components: path.resolve('./src/lib/components'),
					$layouts: path.resolve('./src/lib/layouts'),
					$utils: path.resolve('./src/lib/utils'),
					$styles: path.resolve('./src/lib/styles'),
					$stores: path.resolve('./src/lib/stores')
				}
			}
		}
	}
};

export default config;
