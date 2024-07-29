"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "../../.env") });
const uri = String(process.env.MONGODB_LOCAL_URL);
const options = {
    dbName: "PaintReady",
};
const connectDB = async () => {
    try {
        console.log(uri);
        const response = await mongoose_1.default.connect(uri, options);
        console.log(`connected with ${response.connection.name}`);
    }
    catch (error) {
        console.log(`error occured`, error);
    }
};
exports.connectDB = connectDB;
