"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carts = void 0;
const client_1 = require("@prisma/client");
const carts = async (_parent, _args, _ctx) => {
    const prisma = new client_1.PrismaClient();
    const cartsGet = await prisma.cart.findMany({
        include: {
            items: {
                include: {
                    product: true
                }
            }
        }
    });
    return cartsGet;
};
exports.carts = carts;
//# sourceMappingURL=carts.js.map