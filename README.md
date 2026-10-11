# Weekly Dinners

Sunday prep plus seven dinners for each week. Every dinner has a vegan base, with add-ons for the family. Colour tags on the page show where each Sunday base is reused.

Built with [React Router](https://reactrouter.com/) in framework mode, server-rendered on Cloudflare Workers.

## Adding a week

Each week is one data file in `app/weeks/`, named `<year>-w<week>.ts` (for example `2026-w43.ts`). Copy the latest one and change its contents; the `Week` type in `app/lib/week.ts` documents every field. New files are picked up automatically:

- `/weeks/2026-w43` shows that week.
- `/` redirects to the newest week.

Text fields support two bits of markup: `**bold**`, and `[[baseId|text]]`, which highlights `text` in the colour of the Sunday base with that `id`. Bases pick a colour from `amber`, `teal`, `red`, `green` and `magenta`.

## Develop

This project uses [bun](https://bun.sh) as its package manager.

```sh
bun install
bun run dev        # local dev server, running in the Workers runtime
bun run typecheck
```

## Deploy to Cloudflare

```sh
bun run deploy
```

Or connect this repo in the Cloudflare dashboard (Workers & Pages → Create → Import a repository). Workers Builds sees `bun.lock` and installs with bun. Set the build command to `bun run build`; the deploy commands (`npx wrangler deploy`, and `npx wrangler preview` for branches) can stay as they are.
