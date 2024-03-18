import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/typeDefs.generated.js";
import { resolvers } from "./graphql/resolvers.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });



startServer();
