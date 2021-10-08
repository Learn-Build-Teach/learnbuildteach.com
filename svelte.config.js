import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
/** @type {import('@sveltejs/kit').Config} */
import path from 'path';

const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
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
	},

    preprocess: [mdsvex(mdsvexConfig)]
};

export default config;
