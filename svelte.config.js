import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess({
            postcss: {}
        })
    ],

    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
        }),
        paths: {
            base: process.env.BASE_PATH || "",
        }
    }
};;

export default config;
