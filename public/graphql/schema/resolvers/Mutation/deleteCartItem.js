"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCartItem = void 0;
const deleteCartItem = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.cartItem.delete({ where: { id: _arg.id } });
};
exports.deleteCartItem = deleteCartItem;
//# sourceMappingURL=deleteCartItem.js.map