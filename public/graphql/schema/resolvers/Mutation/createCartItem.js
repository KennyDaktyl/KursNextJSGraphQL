"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCartItem = void 0;
const client_1 = require("@prisma/client");
const createCartItem = async (_parent, { input }, _ctx) => {
    const prisma = new client_1.PrismaClient();
    const createdCartItem = await prisma.cartItem.create({
        data: {
            product: {
                connect: {
                    id: input.productId,
                },
            },
            quantity: input.quantity,
            cart: {
                connect: {
                    id: input.cartId,
                },
            },
        },
        include: {
            product: true,
            cart: true,
        },
    });
    return createdCartItem;
};
exports.createCartItem = createCartItem;
//# sourceMappingURL=createCartItem.js.map