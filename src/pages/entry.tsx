import { format } from "date-fns";
import { eq } from "drizzle-orm";
import { css, cx } from "hono/css";
import type { FC } from "hono/jsx";
import { Aside } from "../components/aside";
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

	const tdClass = css`
    padding-right: 30px;
  `;

	const keyClass = css`
    font-weight: bold;
  `;

	return (
		<Layout>
			<Navbar />

			<h1>Entry # {entry.id}</h1>

			<table>
				<tbody>
					<tr>
						<td class={cx(tdClass, keyClass)}>Country Code</td>
						<td class={tdClass}>{entry.countryCode}</td>
					</tr>

					<tr>
						<td class={cx(tdClass, keyClass)}>License Plate</td>
						<td class={tdClass}>{entry.text}</td>
					</tr>

					<tr>
						<td class={cx(tdClass, keyClass)}>EU</td>
						<td class={tdClass}>{entry.eu ? "Yes" : "No"}</td>
					</tr>

					<tr>
						<td class={cx(tdClass, keyClass)}>Notes</td>
						<td class={tdClass}>{entry.notes}</td>
					</tr>

					<tr>
						<td class={cx(tdClass, keyClass)}>Spotted On</td>
						<td class={tdClass}>
							{entry.spottedOn ? format(entry.spottedOn, "MMM yyyy") : "-"}
						</td>
					</tr>

					<tr>
						<td class={cx(tdClass, keyClass)}>Submitted</td>
						<td class={tdClass}>
							{entry.createdAt ? format(entry.createdAt, "MMM yyyy") : "-"}
						</td>
					</tr>
				</tbody>
			</table>

			<Aside text="The spotted date might be approximated. Don't ask how." />
		</Layout>
	);
};
