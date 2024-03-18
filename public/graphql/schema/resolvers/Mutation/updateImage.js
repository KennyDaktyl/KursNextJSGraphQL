"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateImage = void 0;
const updateImage = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.image.update({
        where: { id: _arg.id },
        data: Object.assign({}, _arg.input),
    });
};
exports.updateImage = updateImage;
//# sourceMappingURL=updateImage.js.map