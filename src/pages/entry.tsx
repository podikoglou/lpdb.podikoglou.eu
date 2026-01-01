import { format } from "date-fns";
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

			<table>
				<tbody>
					<tr>
						<td>Country Code</td>
						<td>{entry.countryCode}</td>
					</tr>

					<tr>
						<td>License Plate</td>
						<td>{entry.text}</td>
					</tr>

					<tr>
						<td>EU</td>
						<td>{entry.eu ? "Yes" : "No"}</td>
					</tr>

					<tr>
						<td>Notes</td>
						<td>{entry.notes}</td>
					</tr>

					<tr>
						<td>Spotted On</td>
						<td>
							{entry.spottedOn ? format(entry.spottedOn, "MMM yyyy") : "-"}
						</td>
					</tr>

					<tr>
						<td>Submitted</td>
						<td>
							{entry.createdAt ? format(entry.createdAt, "MMM yyyy") : "-"}
						</td>
					</tr>
				</tbody>
			</table>
		</Layout>
	);
};
