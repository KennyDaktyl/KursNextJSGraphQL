"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
const products = async (_parent, _arg, _ctx) => {
    const products = await _ctx.prisma.product.findMany();
    return products.map((product) => (Object.assign(Object.assign({}, product), { categories: [], collections: [], reviews: [], images: [] })));
};
exports.products = products;
//# sourceMappingURL=products.js.map