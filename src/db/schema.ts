import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";

export const usersTable = sqliteTable("users", {
	id: text().primaryKey().$defaultFn(nanoid),
	username: text().notNull(),
	password: text().notNull(),
});
