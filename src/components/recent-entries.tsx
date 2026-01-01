import type { FC } from "hono/jsx";
import { findRecentEntries } from "../services/entry";
import { EntriesTable } from "./entries-table";

export const RecentEntries: FC = async () => {
	const entries = await findRecentEntries();

	return <EntriesTable entries={entries} />;
};
