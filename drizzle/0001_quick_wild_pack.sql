CREATE TABLE `curses` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`url` text,
	`title` text,
	`instructor` text,
	`excerpt` text,
	`description` text,
	`image` blob,
	`imageInstructor` blob,
	`date` text,
	`duration` text,
	`price` text,
	`difficulty` text,
	`sections` text,
	`details` text,
	`courseIncludes` text,
	`individualCourse` text,
	`tabsCourse` text
);
--> statement-breakpoint
DROP TABLE `profiles`;