/**
 * The code snippet below is an example.
 */
/** */

import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const curses = sqliteTable("curses", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  url: text("url"),
  title: text("title"),
  instructor: text("instructor"),
  excerpt: text("excerpt"),
  description: text("description"),
  image: text("image"),
  imageInstructor: text("imageInstructor"),
  date: text("date"),
  duration: text("duration"),
  price: text("price"),
  difficulty: text("difficulty"),
  sections: text("sections"),
  details: text("details"),
  courseIncludes: text("courseIncludes"),
  individualCourse: text("individualCourse"),
  tabsCourse: text("tabsCourse"),
  category: text("category"),
});
