import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({ typeDefs, resolvers });

await server.listen({ port: 4000 });
