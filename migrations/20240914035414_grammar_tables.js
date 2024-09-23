/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema
      .createTable("grammar", (table) => {
        table.increments("id").primary();
        table.string("grammar_concept").notNullable();
        table.string("language").notNullable();
        table.text("concept_text").notNullable();
        table.integer("level").notNullable();  
      })
      
      .createTable("grammar_quiz", (table) => {
        table.increments("id").primary();
        table.string("question").notNullable();
        table.string("image").notNullable();
        table.string("options").notNullable();
        table.string("correct_answer").notNullable();
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
    return knex.schema.dropTable("grammar").dropTable("grammar_quiz");
  }