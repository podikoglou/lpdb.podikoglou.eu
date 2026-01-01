import { format } from "date-fns";
import { css } from "hono/css";
import type { FC } from "hono/jsx";
import type { entriesTable } from "../db/schema";

export const EntriesTable: FC<{
	entries: (typeof entriesTable.$inferSelect)[];
}> = async ({ entries }) => {
	const thClass = css`
    font-weight: normal;
    /*border-bottom: 1px solid #ddd;*/
    padding-left: 15px;
    padding-right: 15px;
  `;

	const tableClass = css`
    /*border-spacing: 5px;*/
  `;

	return (
		<table class={tableClass}>
			<thead>
				<tr>
					<th class={thClass}>ID</th>
					<th class={thClass}>Country Code</th>
					<th class={thClass}>License Plate</th>
					<th class={thClass}>Spotted On</th>
				</tr>
			</thead>

			<tbody>
				{entries.map((entry) => (
					<tr>
						<td class={thClass}>
							<a href="/entry/">#{entry.id}</a>
						</td>
						<td class={thClass}>{entry.countryCode ?? "-"}</td>
						<td class={thClass}>{entry.text ?? "-"}</td>
						<td class={thClass}>
							{entry.spottedOn ? format(entry.spottedOn, "MM yyyy") : ""}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
