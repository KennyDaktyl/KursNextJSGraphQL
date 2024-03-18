"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCollection = void 0;
const deleteCollection = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.collection.delete({ where: { id: _arg.id } });
};
exports.deleteCollection = deleteCollection;
//# sourceMappingURL=deleteCollection.js.map