import type { QueryResolvers } from "./../../../types.generated";
export const reviews: NonNullable<QueryResolvers["reviews"]> = async (
	_parent: any,
	_arg: any,
	_ctx: any,
) => {
	return _ctx.prisma.review.findMany();
};
