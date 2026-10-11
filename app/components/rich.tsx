import type { ReactNode } from "react";
import type { Base } from "~/lib/week";

// Renders the small inline markup used in week files:
//   **bold**  and  [[baseId|text]] (text highlighted in that base's colour).
export function Rich({ text, bases }: { text: string; bases: Base[] }) {
  const parts: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[\[(\w+)\|(.+?)\]\]/g;
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      parts.push(<b key={m.index}>{m[1]}</b>);
    } else {
      const base = bases.find((b) => b.id === m[2]);
      parts.push(
        <span key={m.index} className={`pre c-${base?.color ?? "slate"}`}>
          {m[3]}
        </span>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
