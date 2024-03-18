"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategory = void 0;
const updateCategory = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.category.update({
        where: { id: _arg.id },
        data: Object.assign({}, _arg.input),
    });
};
exports.updateCategory = updateCategory;
//# sourceMappingURL=updateCategory.js.map