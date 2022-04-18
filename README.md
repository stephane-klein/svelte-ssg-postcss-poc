# Svelte + SSG + PostCSS

This is what the repository includes:

- Svelte Kit with:
  - [SSG](https://kit.svelte.dev/docs/appendix#ssg) mode enabled
  - [PostCSS](https://postcss.org/) enabled
- [GitHub Actions](./github/workflows/build-and-push-to-github-page.yml) to complite and publish website to Git Pages: https://stephane-klein.github.io/svelte-ssg-postcss-poc/

## Getting started

```sh
$ yarn install
$ yarn run dev
```

Go to http://127.0.0.1:3000/

Build SSG site:

```
$ yarn run build
```

Browse SSG site:

```
$ yarn preview
```

Go to http://127.0.0.1:3000/


## Test build version

```
$ docker compose build
$ docker compose up -d
```

Go to http://127.0.0.1:8080/
