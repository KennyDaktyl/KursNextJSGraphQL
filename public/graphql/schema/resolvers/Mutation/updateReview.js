"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReview = void 0;
const updateReview = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.review.update({
        where: { id: _arg.id },
        data: Object.assign({}, _arg.input),
    });
};
exports.updateReview = updateReview;
//# sourceMappingURL=updateReview.js.map