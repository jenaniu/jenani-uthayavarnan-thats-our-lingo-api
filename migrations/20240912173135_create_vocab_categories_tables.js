/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema
      .createTable("language", (table) => {
          table.string("vocab_category").notNullable();
          table.increments("id").primary();
        table.string("language").notNullable();
      })
      .createTable("vocabulary_content", (table) => {
        table.increments("id").primary();
        table.string("vocab_word").notNullable();
        table.string("translation").notNullable();
        table
          .integer("category_id")
          .unsigned()
          .inTable("language")
          .references("language.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable("vocabulary_content").dropTable("language");
  }