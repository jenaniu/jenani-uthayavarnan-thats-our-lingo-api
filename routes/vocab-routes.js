import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const db = knex ({
    client: "mysql2",
    connection: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
    },
});

router.get("/", async (_req, res) => {
  try {
    const data = await knex("language");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
});

router.get("/:language/categories", async (req, res) => {
    const { language } = req.params;
    
    db.select("*")
    .from("language")
    .where ({ language: language})
    .then((rows) => {
        if (rows.length > 0) {
            res.status(200).json(rows);
        } else {
            res.status(404).send("categories not found");
        }
    })
    .catch((error) => {
        console.error("Unable to process query:", error);
        res.status(500).send('Error retrieving language data');

    })
    // try {
    //   const data = await knex("vocabulary_content");
    //   res.status(200).json(data);
    // } catch (err) {
    //   res.status(400).send(`Error retrieving Users: ${err}`);
    // }
  });

export default router;