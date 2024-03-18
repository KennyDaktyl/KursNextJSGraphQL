import type { QueryResolvers } from "./../../../types.generated";
export const review: NonNullable<QueryResolvers["review"]> = async (
	_parent: any,
	_arg: { id: string },
	_ctx: any,
) => {
	return _ctx.prisma.review.findUnique({
		where: { id: _arg.id },
	});
};
