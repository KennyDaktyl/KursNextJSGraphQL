import type { MutationResolvers } from "./../../../types.generated";

export const createReview: NonNullable<
	MutationResolvers["createReview"]
> = async (_parent: any, _arg: { input: any }, _ctx: any) => {
	return _ctx.prisma.review.create({
		data: {
			..._arg.input,
		},
	});
};
