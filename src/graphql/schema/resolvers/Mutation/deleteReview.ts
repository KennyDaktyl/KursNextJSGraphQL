import type { MutationResolvers } from "./../../../types.generated";
export const deleteReview: NonNullable<
	MutationResolvers["deleteReview"]
> = async (_parent, _arg, _ctx) => {
	return _ctx.prisma.review.delete({ where: { id: _arg.id } });
};
