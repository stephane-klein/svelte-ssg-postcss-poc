# Svelte + SSG + PostCSS

This is what the repository includes:

- Svelte Kit with:
  - [SSG](https://kit.svelte.dev/docs/appendix#ssg) mode enabled
  - [PostCSS](https://postcss.org/) enabled
- [postcss-cli](https://github.com/postcss/postcss-cli) setup in `package.json` to build a css file aside SvelteKit (`src/yellow.css`)
- [GitHub Actions](./github/workflows/build-and-push-to-github-page.yml) to complite and publish website to Git Pages: https://stephane-klein.github.io/svelte-ssg-postcss-poc/

If you want a project example without `postcss-cli` support, see [`main` branch](https://github.com/stephane-klein/svelte-ssg-postcss-poc).

## Getting started

```sh
$ pnpm install
$ pnpm run dev
```

Go to http://127.0.0.1:3000/

Build SSG site:

```
$ pnpm run build
```

Browse SSG site:

```
$ pnpm run preview
```

Go to http://127.0.0.1:3000/


## Test build version

```
$ docker compose build
$ docker compose up -d
```

Go to http://127.0.0.1:8080/
