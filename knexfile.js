import "dotenv/config";

export default {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: "utf8",
  },
  production: {
    client: "mysql2",
    connection: {
      connection: process.env.JAWSDB_URL,
    }
  }
//  vercel
}