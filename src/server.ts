import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/typeDefs.generated.js";
import { resolvers } from "./graphql/resolvers.generated.js";
import { PrismaClient } from "@prisma/client";


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn'],
});

const { url } = await startStandaloneServer(server, {
  context: async () => { 
    prisma
    return {
      prisma,
    }
  },
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
