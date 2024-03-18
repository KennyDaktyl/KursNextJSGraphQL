import type { QueryResolvers } from "./../../../types.generated";
export const review: NonNullable<QueryResolvers["review"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	return _ctx.prisma.review.findUnique({
		where: { id: _arg.id },
	});
};
