"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = void 0;
const client_1 = require("@prisma/client");
const categories = async (_parent, _arg, _ctx) => {
    try {
        const prisma = new client_1.PrismaClient();
        const allCategories = await prisma.category.findMany({
            include: {
                products: {
                    select: {
                        product: true,
                    },
                },
            },
        });
        await prisma.$disconnect();
        const categoriesWithProducts = allCategories.map((category) => (Object.assign(Object.assign({}, category), { products: category.products.map((product) => product.product) })));
        console.log("Categories with products:", categoriesWithProducts);
        await prisma.$disconnect();
        return categoriesWithProducts;
    }
    catch (error) {
        console.error("Failed to fetch categories:", error);
        throw new Error(`Failed to fetch categories`);
    }
};
exports.categories = categories;
//# sourceMappingURL=categories.js.map