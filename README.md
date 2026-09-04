[![Deploy Documentation](https://github.com/noproductab/cursor-test/actions/workflows/docs.yml/badge.svg)](https://github.com/noproductab/cursor-test/actions/workflows/docs.yml)

# Northline

A small static site built with [Zensical](https://zensical.org/) and published to GitHub Pages.

## Pages

- **Home** — branded landing page (`docs/index.md` + `overrides/home.html`)
- **About** — sample content with lorem text
- **Guide** — sample content with lorem text

## Local development

```bash
pip install -r requirements.txt
zensical serve
```

Build the static site:

```bash
zensical build --clean
```

Output is written to `site/`.

## GitHub Pages

On every push to `main`, [`.github/workflows/docs.yml`](.github/workflows/docs.yml) builds the site with Zensical and deploys it via GitHub Actions.

Enable Pages in the repository settings:

1. **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
