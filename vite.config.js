import { sveltekit } from '@sveltejs/kit/vite';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],

	ssr: {
		noExternal: dev ? [] : ['@supabase/supabase-js']
	}
};

export default config;
