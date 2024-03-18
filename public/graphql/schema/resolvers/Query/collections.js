"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collections = void 0;
const client_1 = require("@prisma/client");
const collections = async (_parent, _arg, _ctx) => {
    try {
        const prisma = new client_1.PrismaClient();
        const allCollections = await prisma.collection.findMany({
            include: {
                products: {
                    include: {
                        product: true,
                    },
                },
            },
        });
        console.log("All collections:", allCollections);
        await prisma.$disconnect();
        const collectionsWithProducts = allCollections.map((collection) => (Object.assign(Object.assign({}, collection), { products: collection.products.length > 0
                ? collection.products.map((p) => p.product)
                : [] })));
        return collectionsWithProducts;
    }
    catch (error) {
        console.error("Failed to fetch categories:", error);
        throw new Error("Failed to fetch categories");
    }
};
exports.collections = collections;
//# sourceMappingURL=collections.js.map