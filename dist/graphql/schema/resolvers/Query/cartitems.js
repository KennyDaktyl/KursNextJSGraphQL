"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartitems = void 0;
const client_1 = require("@prisma/client");
const cartitems = async (_parent, _arg, _ctx) => {
    const prisma = new client_1.PrismaClient();
    const cartItemsGet = await prisma.cartItem.findMany({
        include: {
            product: true,
            cart: true,
        },
    });
    return cartItemsGet;
};
exports.cartitems = cartitems;
//# sourceMappingURL=cartitems.js.map