import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

import postcssNormalize from 'postcss-normalize';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
		preprocess({
			postcss: {
                plugins: [
                    postcssNormalize(),
                    postcssNested(),
                    autoprefixer()
                ]
            }
		})
	],

	kit: {
		adapter: adapter({
            pages: 'build',
            assets: 'build',
        }),
        paths: {
            base: process.env.BASE_PATH || "/",
        },
        prerender: {
            default: true
        }
	}
};;

export default config;
