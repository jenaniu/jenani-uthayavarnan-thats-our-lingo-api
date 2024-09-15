import "dotenv/config";
import express from "express";
const app = express();

const PORT = process.env.PORT || 5050;

import vocabRoutes from "./routes/vocab-routes.js";

// all users routes
app.use("/vocabulary", vocabRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});