"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImage = void 0;
const createImage = async (_parent, { input }, _ctx) => {
    const createdImage = await _ctx.prisma.image.create({
        data: Object.assign({}, input),
    });
    return createdImage;
};
exports.createImage = createImage;
//# sourceMappingURL=createImage.js.map