"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCart = void 0;
const deleteCart = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.cart.delete({ where: { id: _arg.id } });
};
exports.deleteCart = deleteCart;
//# sourceMappingURL=deleteCart.js.map