import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const db = initKnex(configuration);

router.get("/:language", async (req, res) => {
  const { language } = req.params;

  db.select()
    .from("grammar")
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

router.get("/concept/:id", async (req, res) => {
    const { id } = req.params;
  
    db.select()
      .from("grammar")
      .where({ id: id })
      .debug(true) // Enable query debugging
      .then((rows) => {
        if (rows.length > 0) {
          res.status(200).json(rows);
        } else {
          res.status(404).send("Grammar concept not found");
        }
      })
      .catch((error) => {
        console.error("Unable to process query:", error);
        res.status(500).send('Error retrieving grammar concept data');
      });
  });

router.get("/:language/quiz/:level", async (req, res) => {
  const { level, language } = req.params;

  db.select()
    .from("grammar_quiz")
    .whereIn("grammar_id", function() {
      this.select("id")
        .from("grammar")
        .where({ level }) 
        .andWhere({ language }) ;
    })
    .debug(true) // Enable query debugging
    .then((rows) => {
      if (rows.length > 0) {
        res.status(200).json(rows);
      } else {
        res.status(404).send("Grammar quiz content not found");
      }
    })
    .catch((error) => {
      console.error("Unable to process query:", error);
      res.status(500).send('Error retrieving quiz data');
    });
});


export default router;