import type { MutationResolvers } from "./../../../types.generated";
export const updateReview: NonNullable<
	MutationResolvers["updateReview"]
> = async (_parent, _arg, _ctx) => {
	return _ctx.prisma.review.update({
		where: { id: _arg.id },
		data: {
			..._arg.input,
		},
	});
};
