import {
  createService,
  getAllServices,
} from "../../controllers/serviceController";
import { getAllUsers, getUserByID } from "../../controllers/userController.js";
import { getAllProperties } from "../../controllers/propertyController";

export const GraphQLResolver = {
  Mutation: {
    newService: createService,
  },
  Query: {
    users: getAllUsers,
    user: getUserByID,
    properties: getAllProperties,
    services: getAllServices,
  },
};
