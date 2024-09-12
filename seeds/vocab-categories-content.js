// import seed data files, arrays of objects
import vocabCategories from "../seed-data/vocabCategories.js";
import vocabContent from "../seed-data/vocabContent.js";

export async function seed(knex) {
  await knex("language").del();
  await knex("vocabulary_content").del();
  await knex("language").insert(vocabCategories);
  await knex("vocabulary_content").insert(vocabContent);
}
