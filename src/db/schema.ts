import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const entriesTable = sqliteTable("entries", {
	id: integer().primaryKey({ autoIncrement: true }),
	countryCode: text(),
	eu: integer({ mode: "boolean" }),
	text: text(),
	spottedOn: integer({ mode: "timestamp" }),
	notes: text(),
	createdAt: integer({ mode: "timestamp" }).$defaultFn(() => new Date()),
});
