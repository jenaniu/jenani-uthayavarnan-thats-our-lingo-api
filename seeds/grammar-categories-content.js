// import seed data files, arrays of objects
import grammarCategories from "../seed-data/grammarCategories.js";
import grammarContent from "../seed-data/grammarContent.js";
import grammarQuiz from "../seed-data/grammarQuiz.js";


export async function seed(knex) {
  await knex("grammar").del();
  await knex("grammar_quiz").del();
  await knex("grammar").insert(grammarCategories);
  await knex("grammar_quiz").insert(grammarQuiz);
}
