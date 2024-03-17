import type { QueryResolvers } from "./../../../types.generated";
export const images: NonNullable<QueryResolvers["images"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	return _ctx.prisma.image.findMany();
};
