"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.review = void 0;
const review = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.review.findUnique({
        where: { id: _arg.id },
    });
};
exports.review = review;
//# sourceMappingURL=review.js.map