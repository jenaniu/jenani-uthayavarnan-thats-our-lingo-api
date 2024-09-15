import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const data = await knex("language");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
});

router.get("/category/:id", async (req, res) => {
    const categoryID = req.params.id;
    
    try {
      const data = await knex("vocabulary_content");
      res.status(200).json(data);
    } catch (err) {
      res.status(400).send(`Error retrieving Users: ${err}`);
    }
  });

export default router;