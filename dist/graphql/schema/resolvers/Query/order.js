"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
const order = async (_parent, _arg, _ctx) => {
    try {
        const order = await _ctx.prisma.order.findUnique({
            where: { id: _arg.id },
        });
        return order;
    }
    catch (error) {
        console.error("Failed to fetch order:", error);
        throw new Error("Failed to fetch order");
    }
};
exports.order = order;
//# sourceMappingURL=order.js.map