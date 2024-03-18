"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = void 0;
const deleteCategory = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.category.delete({ where: { id: _arg.id } });
};
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=deleteCategory.js.map