"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartitem = void 0;
const cartitem = async (_parent, _args, _ctx) => {
    const cartItemGet = await _ctx.prisma.cartItem.findUnique({
        where: {
            id: _args.id,
        },
    });
    return cartItemGet;
};
exports.cartitem = cartitem;
//# sourceMappingURL=cartitem.js.map