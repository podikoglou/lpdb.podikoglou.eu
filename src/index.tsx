import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { IndexPage } from "./pages/index";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  return c.html(<IndexPage />);
});

export default app;
