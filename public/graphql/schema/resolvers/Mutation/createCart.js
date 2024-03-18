"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCart = void 0;
const createCart = async (_parent, _arg, _ctx) => {
    try {
        // Najpierw tworzymy pusty koszyk
        const cartCreated = await _ctx.prisma.cart.create({
            data: {
                items: {} // Pusty koszyk
            },
            include: {
                items: true
            }
        });
        console.log("cartCreated", cartCreated);
        await _ctx.prisma.cartItem.create({
            data: {
                productId: _arg.input.item.productId,
                quantity: _arg.input.item.quantity,
                cartId: cartCreated.id
            },
        });
        const cartItem = await _ctx.prisma.cartItem.create({
            data: {
                quantity: _arg.input.item.quantity,
                productId: _arg.input.item.productId,
                cartId: cartCreated.id
            }
        });
        console.log("cartItem", cartItem);
        return cartCreated;
    }
    catch (error) {
        console.error("Failed to create cart:", error);
        throw new Error("Failed to create cart");
    }
};
exports.createCart = createCart;
//# sourceMappingURL=createCart.js.map