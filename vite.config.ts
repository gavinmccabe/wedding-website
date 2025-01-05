import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [
				'/Users/gavin/node_modules/@sveltejs/kit/src/runtime/client'
			]
		}
	}
});
