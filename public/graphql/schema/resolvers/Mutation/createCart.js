"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCart = void 0;
const createCart = async (_parent, _arg, _ctx) => {
    try {
        const cart = await _ctx.prisma.cart.create({
            data: {
                items: _arg.input.items,
            },
        });
        return cart;
    }
    catch (error) {
        console.error("Failed to create cart:", error);
        throw new Error("Failed to create cart");
    }
};
exports.createCart = createCart;
//# sourceMappingURL=createCart.js.map