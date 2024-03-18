"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReview = void 0;
const createReview = async (_parent, _arg, _ctx) => {
    return _ctx.prisma.review.create({
        data: Object.assign({}, _arg.input),
    });
};
exports.createReview = createReview;
//# sourceMappingURL=createReview.js.map