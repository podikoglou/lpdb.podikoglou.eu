import { eq } from "drizzle-orm";
import type { FC } from "hono/jsx";
import { Layout } from "../components/layout";
import { Navbar } from "../components/navbar";
import { db } from "../db";
import { entriesTable } from "../db/schema";

export const EntryPage: FC<{ entryId: number }> = async ({ entryId }) => {
	const results = await db
		.select()
		.from(entriesTable)
		.where(eq(entriesTable.id, entryId))
		.limit(1)
		.execute();

	if (results.length === 0) {
		// TODO: 404
		return (
			<Layout>
				<Navbar />

				<h1>404</h1>
			</Layout>
		);
	}

	const entry = results[0]!; // NOTE: this sucks

	return (
		<Layout>
			<Navbar />

			<h1>Entry # {entry.id}</h1>

			<p>
				<b>Country Code</b>: {entry.countryCode}
			</p>

			<p>
				<b>License Plate</b>: {entry.text}
			</p>
		</Layout>
	);
};
