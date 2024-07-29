"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const graphql_1 = require("./graphql/graphql");
const config_1 = require("./database/config");
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config({ path: "./.env" });
const port = Number(process.env.PORT) || 3000;
(0, config_1.connectDB)(); //data base connection
(0, graphql_1.connectGraphQL)(app); //graphql connection
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello Hamza");
});
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});
