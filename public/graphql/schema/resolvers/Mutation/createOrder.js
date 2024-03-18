"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const createOrder = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.order.create({
        data: Object.assign({}, _arg.input),
    });
};
exports.createOrder = createOrder;
//# sourceMappingURL=createOrder.js.map