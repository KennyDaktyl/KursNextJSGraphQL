"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = void 0;
const client_1 = require("@prisma/client");
const category = async (_parent, { id }, _ctx) => {
    try {
        const prisma = new client_1.PrismaClient();
        const foundCategory = await prisma.category.findUnique({
            where: { id },
        });
        await prisma.$disconnect();
        return foundCategory;
    }
    catch (error) {
        console.error("Failed to fetch category:", error);
        throw new Error("Failed to fetch category");
    }
};
exports.category = category;
//# sourceMappingURL=category.js.map