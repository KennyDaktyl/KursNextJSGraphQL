"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = void 0;
const deleteOrder = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.order.delete({ where: { id: _arg.id } });
};
exports.deleteOrder = deleteOrder;
//# sourceMappingURL=deleteOrder.js.map