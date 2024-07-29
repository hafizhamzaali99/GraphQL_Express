import { schema } from "../graphql/schema/schema";
import { GraphQLResolver } from "../graphql/resolvers/resolvers";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

export const connectGraphQL = async (app:any) => {
  const server = new ApolloServer({
    //creating server
    typeDefs: schema, //schema define
    resolvers: GraphQLResolver, // actions performed accordingly
  });
  await server.start();

  app.use("/graphql", expressMiddleware(server));

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
