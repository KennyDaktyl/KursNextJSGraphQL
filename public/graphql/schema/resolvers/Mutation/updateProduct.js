"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = void 0;
const updateProduct = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.product.update({
        where: { id: _arg.id },
        data: Object.assign({}, _arg.input),
    });
};
exports.updateProduct = updateProduct;
//# sourceMappingURL=updateProduct.js.map