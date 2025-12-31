PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`countryCode` text,
	`eu` integer,
	`text` text,
	`date` integer,
	`notes` text
);
--> statement-breakpoint
INSERT INTO `__new_entries`("id", "countryCode", "eu", "text", "date", "notes") SELECT "id", "countryCode", "eu", "text", "date", "notes" FROM `entries`;--> statement-breakpoint
DROP TABLE `entries`;--> statement-breakpoint
ALTER TABLE `__new_entries` RENAME TO `entries`;--> statement-breakpoint
PRAGMA foreign_keys=ON;