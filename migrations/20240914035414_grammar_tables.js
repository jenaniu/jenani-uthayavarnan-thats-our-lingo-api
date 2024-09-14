/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema
      .createTable("grammar", (table) => {
        table.integer("id").primary();
        table.string("grammar_concept").notNullable();
        table.string("language").notNullable();
        table.integer("level").notNullable();
  
      })
      .createTable("grammar_content", (table) => {
        table.integer("id").primary();
        table.string("concept_title").notNullable();
        table.string("concept_text").notNullable();
        table
        .integer("grammar_id")
        .unsigned() 
        .notNullable()
        .references("id") 
        .inTable("grammar") 
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      })
      
      .createTable("grammar_quiz", (table) => {
        table.integer("id").primary();
        table.string("quiz_question").notNullable();
        table.string("correct_answer").notNullable();
        table.string("incorrect_answers").notNullable();
        table
        .integer("grammar_id")
        .unsigned() 
        .notNullable()
        .references("id") 
        .inTable("grammar") 
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable("grammar").dropTable("grammar_content").dropTable("grammar_quiz");
  }