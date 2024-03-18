"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
exports.Category = {
    async products(parent, _args, ctx) {
        const products = await ctx.prisma.categoriesOnProducts
            .findMany({
            where: {
                categoryId: parent.id,
            },
            include: {
                product: true,
            },
        })
            .then((categoriesOnProducts) => categoriesOnProducts.map((cop) => cop.product));
        return products !== null && products !== void 0 ? products : [];
    },
};
//# sourceMappingURL=Category.js.map