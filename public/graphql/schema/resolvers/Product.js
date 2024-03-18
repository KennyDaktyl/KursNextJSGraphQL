"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
exports.Product = {
    async reviews(parent, _args, ctx) {
        const reviews = await ctx.prisma.product
            .findUnique({
            where: {
                id: parent.id,
            },
        })
            .reviews();
        return reviews !== null && reviews !== void 0 ? reviews : [];
    },
    async images(parent, _args, ctx) {
        const images = await ctx.prisma.product
            .findUnique({
            where: {
                id: parent.id,
            },
        })
            .images();
        return images !== null && images !== void 0 ? images : [];
    },
    async categories(parent, _args, ctx) {
        const categories = await ctx.prisma.categoriesOnProducts
            .findMany({
            where: {
                productId: parent.id,
            },
            include: {
                category: true,
            },
        })
            .then((categoriesOnProducts) => categoriesOnProducts.map((cop) => cop.category));
        return categories !== null && categories !== void 0 ? categories : [];
    },
    async collections(parent, _args, ctx) {
        const collections = await ctx.prisma.collectionsOnProducts
            .findMany({
            where: {
                productId: parent.id,
            },
            include: {
                collection: true,
            },
        })
            .then((collectionsOnProducts) => collectionsOnProducts.map((cop) => cop.collection));
        return collections !== null && collections !== void 0 ? collections : [];
    },
};
//# sourceMappingURL=Product.js.map