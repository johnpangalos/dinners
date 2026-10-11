import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("weeks/:slug", "routes/week.tsx"),
] satisfies RouteConfig;
