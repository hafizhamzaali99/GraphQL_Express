"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectGraphQL = void 0;
const schema_1 = require("../graphql/schema/schema");
const resolvers_1 = require("../graphql/resolvers/resolvers");
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const connectGraphQL = async (app) => {
    const server = new server_1.ApolloServer({
        //creating server
        typeDefs: schema_1.schema, //schema define
        resolvers: resolvers_1.GraphQLResolver, // actions performed accordingly
    });
    await server.start();
    app.use("/graphql", (0, express4_1.expressMiddleware)(server));
    return server;
    //   startStandaloneServer(server, { //running server for separately using graphql
    //     listen: {
    //       port,
    //     },
    //   })
    //     .then(() => {
    //       console.log(`server is working on PORT:${port}`);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
};
exports.connectGraphQL = connectGraphQL;
