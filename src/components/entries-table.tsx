import type { FC } from "hono/jsx";
import { RecentEntriesPage } from "../pages/recent-entries";

export const EntriesTable: FC = async () => {
	return (
		<table id="recent-entries-table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Country</th>
					<th>License Plate</th>
					<th>Spotted On</th>
				</tr>
			</thead>

			<tbody>
				<RecentEntriesPage page={0} />
			</tbody>
		</table>
	);
};
