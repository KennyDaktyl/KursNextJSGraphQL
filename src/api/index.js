import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../graphql/typeDefs.generated.js';
import { resolvers } from '../../graphql/resolvers.generated.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn'],
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => ({
    prisma,
  }),
});

export default apolloServer.createHandler({ path: '/api/graphql' });
