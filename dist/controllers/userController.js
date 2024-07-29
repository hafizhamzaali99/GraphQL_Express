"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByID = exports.getAllUsers = void 0;
const userModel_js_1 = __importDefault(require("../models/userModel.js"));
const getAllUsers = async () => {
    try {
        let usersData = await userModel_js_1.default.find();
        //   usersData = tokenRemover(usersData);
        return usersData;
    }
    catch (error) {
        return console.log("error", error);
    }
};
exports.getAllUsers = getAllUsers;
const getUserByID = async (parent, arg) => {
    let user = await userModel_js_1.default.findById(arg.id);
    return user;
};
exports.getUserByID = getUserByID;
