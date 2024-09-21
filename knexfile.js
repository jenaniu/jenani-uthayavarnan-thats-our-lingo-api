import "dotenv/config";
import knex from "knex";

const config = {
  client: "mysql2",
  connection: process.env.JAWSDB_URL,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};

const db = knex(config);

db.raw('SELECT 1')
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

export default db;
