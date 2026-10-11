// The shape of one week's dinner plan. Each week lives in its own file under
// app/weeks/ (named like 2026-w42.ts) and default-exports a `Week`.
//
// Text fields accept two bits of inline markup, rendered by <Rich>:
//   **Mon**                 bold
//   [[herb|Green sauce]]    highlights "Green sauce" in the colour of the base with id "herb"

export const DAY_KEYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"] as const;
export type DayKey = (typeof DAY_KEYS)[number];

/** Colour slots defined in app.css. Fresh (bought) items always use "slate". */
export type BaseColor = "amber" | "teal" | "red" | "green" | "magenta";

/** Which days an item is used. `true` shows a dot; a string shows a dot with a small label under it. */
export type Uses = Partial<Record<DayKey, true | string>>;

export interface Base {
  /** Short id used in links (#b-<id>), tags and [[id|text]] markup. */
  id: string;
  name: string;
  color: BaseColor;
  /** Line under the name, e.g. "Used **Mon** and **Fri**". */
  used: string;
  ingredients: string;
  method: string;
  uses: Uses;
  /** Row in the fridge/freezer table. */
  store: string;
  moveToFridge: string;
}

/** Something bought once and used on several nights. */
export interface FreshItem {
  name: string;
  uses: Uses;
}

/** A coloured chip under a day's title. Links to the base when `base` is set, otherwise a dashed "fresh" chip. */
export interface Tag {
  base?: string;
  label: string;
}

export type ListItem = string | { text: string; sub: true };

export interface Day {
  key: DayKey;
  /** e.g. "Sunday 11 Oct" */
  kicker: string;
  title: string;
  meta: string[];
  /** When set, this is a night the vegan is out; shown as a badge and greyed in the day strip and reuse map. */
  out?: string;
  tags?: Tag[];
  everyone?: ListItem[];
  you?: ListItem[];
  family?: ListItem[];
  steps?: string[];
  /** A short paragraph instead of (or after) numbered steps. */
  note?: string;
}

export interface Week {
  year: number;
  week: number;
  /** e.g. "Sunday 11 to Saturday 17 October" */
  dates: string;
  lede: string;
  reuseNote: string;
  prep: {
    kicker: string;
    intro: string;
    steps: string[];
    storageNote: string;
  };
  bases: Base[];
  fresh: FreshItem[];
  days: Day[];
  /** Footer credit: "Built on <by> <title>, <note>" */
  source: { by: string; title: string; url: string; note: string };
  servings: string;
}

export interface WeekSummary {
  slug: string;
  year: number;
  week: number;
  dates: string;
}
