import express from "express";
import { connectGraphQL } from "./graphql/graphql";

import { connectDB } from "./database/config";
import dotenv from "dotenv";
const app = express();

dotenv.config({ path: "./.env" });
const port = Number(process.env.PORT) || 3000;

connectDB(); //data base connection
connectGraphQL(app); //graphql connection
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Hamza");
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
