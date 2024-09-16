import "dotenv/config";
import express from "express";
const app = express();

const PORT = process.env.PORT || 5050;

import vocabRoutes from "./routes/vocab-routes.js";
import grammarRoutes from "./routes/grammar-routes.js";

// all users routes
app.use("/vocabulary", vocabRoutes);

app.use("/grammar", grammarRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});