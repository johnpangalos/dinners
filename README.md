# Week 42 Dinners

Sunday prep plus seven dinners for week 42 (11–17 October 2026). Every dinner has a vegan base, with add-ons for the family. Colour tags on the page show where each Sunday base is reused.

Based on ICA's [Söndagspreppen – Hett och grönt](https://www.ica.se/artikel/sondagspreppen-hett-och-gront/).

## Deploy to Cloudflare

The site is a single static page in `public/`, configured as a Worker with static assets in `wrangler.jsonc`.

```sh
npx wrangler deploy
```

Or connect this repo in the Cloudflare dashboard (Workers & Pages → Create → Import a repository) with the deploy command `npx wrangler deploy`.
