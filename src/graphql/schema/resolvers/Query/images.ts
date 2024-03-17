import type { QueryResolvers } from "./../../../types.generated";
export const image: NonNullable<QueryResolvers["image"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	return _ctx.prisma.image.findUnique({ where: { id: _arg.id } });
};
