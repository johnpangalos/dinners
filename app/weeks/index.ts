import type { Week, WeekSummary } from "~/lib/week";

// Every app/weeks/<year>-w<week>.ts file is picked up automatically, so adding
// a week is just adding a file.
const modules = import.meta.glob<{ default: Week }>("./*-w*.ts", { eager: true });

const weeks = new Map<string, Week>(
  Object.entries(modules)
    .map(([path, mod]) => [path.replace(/^\.\/(.*)\.ts$/, "$1"), mod.default] as const)
    .sort(([, a], [, b]) => a.year - b.year || a.week - b.week),
);

export function getWeek(slug: string): Week | undefined {
  return weeks.get(slug);
}

/** All weeks, oldest first. */
export function listWeeks(): WeekSummary[] {
  return [...weeks].map(([slug, { year, week, dates }]) => ({ slug, year, week, dates }));
}

export function latestSlug(): string | undefined {
  return [...weeks.keys()].at(-1);
}
