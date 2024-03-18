"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrder = void 0;
const updateOrder = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.order.update({
        where: { id: _arg.input.id },
        data: Object.assign({}, _arg.input),
    });
};
exports.updateOrder = updateOrder;
//# sourceMappingURL=updateOrder.js.map