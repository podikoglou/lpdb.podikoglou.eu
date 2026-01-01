import { desc } from "drizzle-orm";
import type { FC } from "hono/jsx";
import { db } from "../db";
import { entriesTable } from "../db/schema";
import { EntriesTable } from "./entries-table";

const recentEntriesQuery = db
	.select()
	.from(entriesTable)
	.orderBy(desc(entriesTable.spottedOn))
	.limit(20)
	.prepare();

export const RecentEntries: FC = async () => {
	const entries = await recentEntriesQuery.execute();

	return <EntriesTable entries={entries} />;
};
