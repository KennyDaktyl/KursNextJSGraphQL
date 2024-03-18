"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collection = void 0;
const client_1 = require("@prisma/client");
const collection = async (_parent, { id }, _ctx) => {
    try {
        const prisma = new client_1.PrismaClient();
        const foundCollection = await prisma.collection.findUnique({
            where: { id },
        });
        await prisma.$disconnect();
        return foundCollection;
    }
    catch (error) {
        console.error("Failed to fetch collection:", error);
        throw new Error("Failed to fetch collection");
    }
};
exports.collection = collection;
//# sourceMappingURL=collection.js.map