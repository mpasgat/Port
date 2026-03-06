// import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	preprocess:vitePreprocess(),
// 	kit: {

// 		adapter: adapter({

// 		}),
// 		paths: {
// 			base: '/Port'
// 		}
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),

		paths: {
			base: dev ? '' : '/Port'
		}
	}
};

export default config;
