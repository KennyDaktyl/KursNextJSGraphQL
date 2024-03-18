"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
exports.Collection = {
    async products(parent, _args, ctx) {
        const products = await ctx.prisma.collectionsOnProducts
            .findMany({
            where: {
                collectionId: parent.id,
            },
            include: {
                product: true,
            },
        })
            .then((collectionsOnProducts) => collectionsOnProducts.map((cop) => cop.product));
        return products !== null && products !== void 0 ? products : [];
    },
};
//# sourceMappingURL=Collection.js.map