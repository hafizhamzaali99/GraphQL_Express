"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLResolver = void 0;
const serviceController_1 = require("../../controllers/serviceController");
const userController_js_1 = require("../../controllers/userController.js");
const propertyController_1 = require("../../controllers/propertyController");
exports.GraphQLResolver = {
    Mutation: {
        newService: serviceController_1.createService,
    },
    Query: {
        users: userController_js_1.getAllUsers,
        user: userController_js_1.getUserByID,
        properties: propertyController_1.getAllProperties,
        services: serviceController_1.getAllServices,
    },
};
