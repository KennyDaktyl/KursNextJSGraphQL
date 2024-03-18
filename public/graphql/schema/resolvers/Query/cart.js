"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cart = void 0;
const client_1 = require("@prisma/client");
const cart = async (_parent, { id }, _ctx) => {
    const prisma = new client_1.PrismaClient();
    const cartGet = await prisma.cart.findUnique({
        where: {
            id: id,
        },
        include: {
            items: {
                include: {
                    product: true,
                },
            },
        },
    });
    return cartGet;
};
exports.cart = cart;
//# sourceMappingURL=cart.js.map