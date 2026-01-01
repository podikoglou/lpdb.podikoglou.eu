import { desc, eq, sql } from "drizzle-orm";
import { db } from "../db";
import { entriesTable } from "../db/schema";

type EntrySelect = typeof entriesTable.$inferSelect;
type EntryInsert = typeof entriesTable.$inferInsert;

const entryQuery = db
	.select()
	.from(entriesTable)
	.where(eq(entriesTable.id, sql.placeholder("id")))
	.limit(1)
	.prepare();

const recentEntriesQuery = db
	.select()
	.from(entriesTable)
	.orderBy(desc(entriesTable.id))
	.limit(20)
	.prepare();

export const findEntry = async (
	id: number,
): Promise<EntrySelect | undefined> => {
	const results = await entryQuery.execute({ id });

	return results[0];
};

export const findRecentEntries = async (): Promise<EntrySelect[]> => {
	return recentEntriesQuery.execute();
};

export const insertEntry = async (data: EntryInsert) => {
	return db.insert(entriesTable).values(data).execute();
};
