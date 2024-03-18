"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = void 0;
const deleteImage = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.image.delete({ where: { id: _arg.id } });
};
exports.deleteImage = deleteImage;
//# sourceMappingURL=deleteImage.js.map