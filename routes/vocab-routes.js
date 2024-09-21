import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, } = process.env;

const db = initKnex(configuration);

// router.get("/", async (_req, res) => {
//   try {
//     const data = await knex("language");
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(400).send(`Error retrieving vocabulary categories: ${err}`);
//   }
// });

router.get("/:language", async (req, res) => {
  console.log('Vocab route hit');
  const { language } = req.params;

  db.select()
    .from("language")
    .where({ language: language })
    .debug(true) // Enable query debugging
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
    });
});

router.get("/:language/:category_id", async (req, res) => {
  const {category_id } = req.params;
  const {language } = req.params;
  console.log("JAWSDB_URL:", process.env.JAWSDB_URL);


  db.select()
    .from("vocabulary_content")
    .where({ category_id: category_id }, { language: language })
    .debug(true) // Enable query debugging
    .then((rows) => {
      if (rows.length > 0) {
        res.status(200).json(rows);
      } else {
        res.status(404).send("Vocabulary content not found");
      }
    })
    .catch((error) => {
      console.error("Unable to process query:", error);
      res.status(500).send('Error retrieving language data');
    });
});


export default router;