"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllServices = exports.createService = void 0;
const serviceModel_js_1 = __importDefault(require("../models/serviceModel.js"));
const createService = async (parent, arg) => {
    const service = await serviceModel_js_1.default.create(arg);
    console.log(service);
    //   return service;
    return "Service created successfully";
};
exports.createService = createService;
const getAllServices = async () => {
    const services = serviceModel_js_1.default.find();
    return services;
};
exports.getAllServices = getAllServices;
