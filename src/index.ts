import express from "express";
import { connectGraphQL } from "./graphql/graphql";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./database/config";
import dotenv from "dotenv";
const app = express();

dotenv.config({ path: "./.env" });
const port = Number(process.env.PORT) || 3000;

connectDB(); //data base connection
connectGraphQL(app); //graphql connection
app.use(express.json());
app.use(cors({ origin: " * ", credentials: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello Hamza");
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
