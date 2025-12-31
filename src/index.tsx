import { zValidator } from "@hono/zod-validator";
import { parse } from "date-fns";
import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";
import { serveStatic } from "hono/bun";
import z from "zod";
import { IndexPage } from "./pages/index";
import { SubmitPage } from "./pages/submit";

const app = new Hono();

const auth = basicAuth({
	username: process.env.USERNAME!,
	password: process.env.PASSWORD!,
});

app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
	return c.html(<IndexPage />);
});

app.get("/submit", auth, (c) => {
	return c.html(<SubmitPage />);
});

app.post(
	"/submit",
	auth,
	zValidator(
		"form",
		z.object({
			countryCode: z.string(),
			eu: z.stringbool({ truthy: ["on"] }).default(false),
			text: z.string(),
			date: z
				.string()
				.transform((value) => parse(value, "yyyy-MM-dd'T'HH:mm", new Date())),
			notes: z.string(),
		}),
	),
	(c) => {
		const form = c.req.valid("form");

		console.log({ form });

		return c.html(<SubmitPage />);
	},
);

export default app;
