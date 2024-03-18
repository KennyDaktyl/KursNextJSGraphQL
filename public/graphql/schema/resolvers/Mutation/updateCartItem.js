"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartItem = void 0;
const updateCartItem = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.cartItem.update({
        where: { id: _arg.id },
        data: Object.assign({}, _arg.input),
    });
};
exports.updateCartItem = updateCartItem;
//# sourceMappingURL=updateCartItem.js.map