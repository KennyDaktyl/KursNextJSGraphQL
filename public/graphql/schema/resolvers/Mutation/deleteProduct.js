"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = void 0;
const deleteProduct = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.product.delete({ where: { id: _arg.id } });
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=deleteProduct.js.map