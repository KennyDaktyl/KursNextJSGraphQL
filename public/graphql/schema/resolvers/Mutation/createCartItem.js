"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCartItem = void 0;
const createCartItem = async (_parent, _arg, _ctx) => {
    const createdImage = await _ctx.prisma.cartItem.create({
        data: Object.assign({}, _arg.input),
    });
    return createdImage;
};
exports.createCartItem = createCartItem;
//# sourceMappingURL=createCartItem.js.map