import type { MutationResolvers } from "./../../../types.generated";
export const updateCategory: NonNullable<
	MutationResolvers["updateCategory"]
> = async (_parent, _arg, _ctx) => {
	return _ctx.prisma.category.update({
		where: { id: _arg.id },
		data: { ..._arg.input },
	});
};
