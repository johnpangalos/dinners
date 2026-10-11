import { redirect } from "react-router";
import { latestSlug } from "~/weeks";

// The home page always shows the newest week.
export function loader() {
  const slug = latestSlug();
  if (!slug) throw new Response("No weeks yet", { status: 404 });
  return redirect(`/weeks/${slug}`);
}
