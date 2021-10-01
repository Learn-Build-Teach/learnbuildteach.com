/** @type {import('@sveltejs/kit').Config} */
import preprocess from 'svelte-preprocess';
import { mdsvex, escapeSvelte } from 'mdsvex';
import hljs from 'highlight.js';
import path from 'path';

const config = {
	preprocess: [
		preprocess(),
		mdsvex({
			highlight: {
				highlighter: (code) => {
					const highlighted = escapeSvelte(hljs.highlightAuto(code).value);
					return `{@html \`<pre class="hljs"><code>${highlighted}</code></pre>\`}`;
				}
			}
		})
	],
	kit: {
		target: '#svelte',
		vite: {
			optimizeDeps: {
				// workaround Vite issue to fix highlighting on cheatsheet
				// https://github.com/metonym/svelte-highlight/issues/158
				include: ['highlight.js/lib/core']
			},
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
