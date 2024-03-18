"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.image = void 0;
const client_1 = require("@prisma/client");
const image = async (_parent, { id }, _ctx) => {
    try {
        const prisma = new client_1.PrismaClient();
        const foundImage = await prisma.image.findUnique({
            where: { id },
        });
        await prisma.$disconnect();
        return foundImage;
    }
    catch (error) {
        console.error("Failed to fetch image:", error);
        throw new Error("Failed to fetch image");
    }
};
exports.image = image;
//# sourceMappingURL=image.js.map