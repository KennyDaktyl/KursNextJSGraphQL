"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCollection = void 0;
const updateCollection = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.collection.update({
        where: { id: _arg.id },
        data: Object.assign({}, _arg.input),
    });
};
exports.updateCollection = updateCollection;
//# sourceMappingURL=updateCollection.js.map