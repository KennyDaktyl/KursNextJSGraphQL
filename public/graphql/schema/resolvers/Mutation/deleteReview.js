"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = void 0;
const deleteReview = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.review.delete({ where: { id: _arg.id } });
};
exports.deleteReview = deleteReview;
//# sourceMappingURL=deleteReview.js.map