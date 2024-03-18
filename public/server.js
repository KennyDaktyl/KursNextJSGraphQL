"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const typeDefs_generated_js_1 = require("./graphql/typeDefs.generated.js");
const resolvers_generated_js_1 = require("./graphql/resolvers.generated.js");
const client_1 = require("@prisma/client");
const server = new server_1.ApolloServer({
    typeDefs: typeDefs_generated_js_1.typeDefs,
    resolvers: resolvers_generated_js_1.resolvers,
});
const prisma = new client_1.PrismaClient({
    log: ['query', 'info', 'warn'],
});
const startServer = async () => {
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000 },
        context: async () => {
            prisma;
            return {
                prisma,
            };
        },
    });
    console.log(`🚀  Server ready at: ${url}`);
};
startServer();
//# sourceMappingURL=server.js.map