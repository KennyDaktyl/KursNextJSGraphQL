"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.images = void 0;
const images = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.image.findMany();
};
exports.images = images;
//# sourceMappingURL=images.js.map