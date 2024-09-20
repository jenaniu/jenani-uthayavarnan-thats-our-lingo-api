import "dotenv/config";
import express from "express";
import cors from 'cors';

const app = express();
const { CORS_ORIGIN } = process.env;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors())

const PORT = process.env.PORT || 5050;

import vocabRoutes from "../routes/vocab-routes.js";
import grammarRoutes from "../routes/grammar-routes.js";

// all users routes
app.use("/vocabulary", vocabRoutes);

app.use("/grammar", grammarRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});