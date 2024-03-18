"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
const product = async (_parent, { id }, _ctx) => {
    try {
        const foundProduct = await _ctx.prisma.product.findUnique({
            where: { id },
        });
        await _ctx.prisma.$disconnect();
        return foundProduct;
    }
    catch (error) {
        console.error("Failed to fetch product:", error);
        throw new Error("Failed to fetch product");
    }
};
exports.product = product;
//# sourceMappingURL=product.js.map