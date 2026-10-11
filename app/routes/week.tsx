import { data } from "react-router";

import type { Route } from "./+types/week";
import { Rich } from "~/components/rich";
import { DAY_KEYS, type Base, type Day, type DayKey, type ListItem, type Uses } from "~/lib/week";
import { getWeek, listWeeks } from "~/weeks";

const SHORT: Record<DayKey, string> = {
  sun: "Sun",
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
  sat: "Sat",
};

export function loader({ params }: Route.LoaderArgs) {
  const week = getWeek(params.slug);
  if (!week) throw data("Week not found", { status: 404 });
  return { slug: params.slug, week, weeks: listWeeks() };
}

export function meta({ loaderData }: Route.MetaArgs) {
  return [{ title: loaderData ? `Week ${loaderData.week.week} Dinners` : "Dinners" }];
}

export default function WeekPage({ loaderData }: Route.ComponentProps) {
  const { slug, week, weeks } = loaderData;
  const { bases } = week;
  const outDays = new Set(week.days.filter((d) => d.out).map((d) => d.key));

  return (
    <>
      <header className="top">
        <p className="eyebrow">
          Week {week.week} · {week.dates}
        </p>
        <h1>Week {week.week} Dinners</h1>
        <p className="lede">{week.lede}</p>
        <div className="legend" aria-label="Who each list is for">
          <span>
            <i className="who everyone"></i>Everyone
          </span>
          <span>
            <i className="who you"></i>You (vegan)
          </span>
          <span>
            <i className="who family"></i>Family
          </span>
        </div>
      </header>

      <nav className="days" aria-label="Jump to a day">
        <a href="#reuse">Reuse</a>
        <a href="#prep">Prep</a>
        {week.days.map((d) => (
          <a key={d.key} href={`#${d.key}`} className={d.out ? "out" : undefined}>
            {SHORT[d.key]}
          </a>
        ))}
      </nav>

      <main>
        <section id="reuse" aria-labelledby="reuse-h">
          <p className="kicker">At a glance</p>
          <h2 id="reuse-h">What comes back during the week</h2>
          <p className="note">{week.reuseNote}</p>
          <div className="scroll">
            <table className="map">
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: "left" }}>
                    Item
                  </th>
                  {DAY_KEYS.map((k) =>
                    outDays.has(k) ? (
                      <th key={k} scope="col" className="out">
                        {SHORT[k]}
                        <small>you're out</small>
                      </th>
                    ) : (
                      <th key={k} scope="col">
                        {SHORT[k]}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                <tr className="group">
                  <th colSpan={8}>Made on Sunday</th>
                </tr>
                {bases.map((b) => (
                  <tr key={b.id} className={`c-${b.color}`}>
                    <th scope="row">
                      <a href={`#b-${b.id}`}>{b.name}</a>
                    </th>
                    <UseCells uses={b.uses} outDays={outDays} />
                  </tr>
                ))}
                <tr className="group">
                  <th colSpan={8}>Bought once, used twice or more</th>
                </tr>
                {week.fresh.map((f) => (
                  <tr key={f.name} className="c-slate">
                    <th scope="row">{f.name}</th>
                    <UseCells uses={f.uses} outDays={outDays} ring />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="prep" aria-labelledby="prep-h">
          <p className="kicker">{week.prep.kicker}</p>
          <h2 id="prep-h">Sunday prep</h2>
          <p>{week.prep.intro}</p>

          <div className="bases">
            {bases.map((b) => (
              <div key={b.id} className={`base c-${b.color}`} id={`b-${b.id}`}>
                <div className="base-head">
                  <h3>{b.name}</h3>
                  <span className="used">
                    <Rich text={b.used} bases={bases} />
                  </span>
                </div>
                <p className="ing">{b.ingredients}</p>
                <p>{b.method}</p>
              </div>
            ))}
          </div>

          <h3>Order of work</h3>
          <ol className="steps">
            {week.prep.steps.map((s, i) => (
              <li key={i}>
                <Rich text={s} bases={bases} />
              </li>
            ))}
          </ol>

          <h3>Fridge, freezer and when to move things</h3>
          <div className="scroll">
            <table className="store">
              <thead>
                <tr>
                  <th scope="col">Base</th>
                  <th scope="col">Store</th>
                  <th scope="col">Move to fridge</th>
                </tr>
              </thead>
              <tbody>
                {bases.map((b) => (
                  <tr key={b.id}>
                    <td>
                      <span className={`pre c-${b.color}`}>{b.name}</span>
                    </td>
                    <td>{b.store}</td>
                    <td>{b.moveToFridge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">{week.prep.storageNote}</p>
        </section>

        {week.days.map((d) => (
          <DayArticle key={d.key} day={d} bases={bases} />
        ))}
      </main>

      <footer>
        <p>
          Built on {week.source.by}{" "}
          <a href={week.source.url} target="_blank" rel="noopener">
            {week.source.title}
          </a>
          , {week.source.note}
        </p>
        <p>{week.servings}</p>
        {weeks.length > 1 && (
          <p>
            Other weeks:{" "}
            {weeks
              .filter((w) => w.slug !== slug)
              .map((w, i) => (
                <span key={w.slug}>
                  {i > 0 && " · "}
                  <a href={`/weeks/${w.slug}`}>Week {w.week}</a>
                </span>
              ))}
          </p>
        )}
      </footer>
    </>
  );
}

function UseCells({ uses, outDays, ring }: { uses: Uses; outDays: Set<DayKey>; ring?: boolean }) {
  return DAY_KEYS.map((k) => {
    const use = uses[k];
    return (
      <td key={k} className={outDays.has(k) ? "out" : undefined}>
        {use && <i className={ring ? "dot ring" : "dot"} aria-label="used"></i>}
        {typeof use === "string" && <span className="lbl">{use}</span>}
      </td>
    );
  });
}

function DayArticle({ day, bases }: { day: Day; bases: Base[] }) {
  const groups = (
    [
      ["everyone", "Everyone", day.everyone],
      ["you", "You", day.you],
      ["family", "Family", day.family],
    ] as const
  ).filter(([, , items]) => items?.length);
  const layout = groups.length === 3 ? "groups three" : groups.length === 2 ? "groups two" : "groups";

  return (
    <article className="day" id={day.key} aria-labelledby={`${day.key}-h`}>
      <div className="day-head">
        <p className="kicker">{day.kicker}</p>
        <h2 id={`${day.key}-h`}>{day.title}</h2>
        <div className="day-meta">
          {day.out && <span className="badge">{day.out}</span>}
          {day.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
        {day.tags && day.tags.length > 0 && (
          <div className="tags">
            {day.tags.map((t) => {
              const base = t.base ? bases.find((b) => b.id === t.base) : undefined;
              return base ? (
                <a key={t.label} className={`tag c-${base.color}`} href={`#b-${base.id}`}>
                  {t.label}
                </a>
              ) : (
                <span key={t.label} className="tag fresh c-slate">
                  {t.label}
                </span>
              );
            })}
          </div>
        )}
      </div>
      <div className={layout}>
        {groups.map(([who, label, items]) => (
          <div key={who} className={`group ${who}`}>
            <h3>
              <i className={`who ${who}`}></i>
              {label}
            </h3>
            <ul>
              {items!.map((item, i) => (
                <Item key={i} item={item} bases={bases} />
              ))}
            </ul>
          </div>
        ))}
      </div>
      {day.steps && (
        <ol className="steps">
          {day.steps.map((s, i) => (
            <li key={i}>
              <Rich text={s} bases={bases} />
            </li>
          ))}
        </ol>
      )}
      {day.note && (
        <p>
          <Rich text={day.note} bases={bases} />
        </p>
      )}
    </article>
  );
}

function Item({ item, bases }: { item: ListItem; bases: Base[] }) {
  if (typeof item === "string") {
    return (
      <li>
        <Rich text={item} bases={bases} />
      </li>
    );
  }
  return (
    <li className="sub">
      <Rich text={item.text} bases={bases} />
    </li>
  );
}
