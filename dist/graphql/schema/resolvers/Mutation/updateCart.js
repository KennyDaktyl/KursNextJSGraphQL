"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCart = void 0;
const updateCart = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.cart.update({
        where: { id: _arg.id },
        data: { quantity: _arg.quantity },
    });
};
exports.updateCart = updateCart;
//# sourceMappingURL=updateCart.js.map