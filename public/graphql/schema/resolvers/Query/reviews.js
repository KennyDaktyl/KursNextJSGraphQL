"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviews = void 0;
const reviews = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.review.findMany();
};
exports.reviews = reviews;
//# sourceMappingURL=reviews.js.map