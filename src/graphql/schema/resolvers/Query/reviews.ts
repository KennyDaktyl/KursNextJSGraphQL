import type { QueryResolvers } from "./../../../types.generated";
export const reviews: NonNullable<QueryResolvers["reviews"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	return _ctx.prisma.review.findMany();
};
