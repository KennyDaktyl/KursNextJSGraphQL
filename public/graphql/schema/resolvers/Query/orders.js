"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders = void 0;
const orders = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.order.findMany();
};
exports.orders = orders;
//# sourceMappingURL=orders.js.map