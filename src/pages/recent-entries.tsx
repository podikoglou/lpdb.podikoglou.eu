import { format } from "date-fns";
import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { Country } from "../components/country";
import { findRecentEntries } from "../services/entry";

export const RecentEntriesPage: FC<{ page: number }> = async ({ page }) => {
	const entries = await findRecentEntries(page);
	return (
		<>
			{entries.map((entry, idx) => {
				const props =
					idx === 19
						? {
								"hx-get": `/recent-entries/${page + 1}`,
								"hx-trigger": "revealed",
								"hx-swap": "afterend",
							}
						: {};

				return (
					<tr {...props}>
						<td>
							<a href={`/entry/${entry.id}`}>#{entry.id}</a>
						</td>

						<td>
							{entry.countryCode ? (
								<Country plateCountryCode={entry.countryCode} />
							) : null}
						</td>

						<td>{entry.text ?? "-"}</td>

						<td>
							{entry.spottedOn ? format(entry.spottedOn, "MMM yyyy") : ""}
						</td>
					</tr>
				);
			})}
		</>
	);
};
