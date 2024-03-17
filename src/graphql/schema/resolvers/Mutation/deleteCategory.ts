import type { MutationResolvers } from "./../../../types.generated";
export const deleteCategory: NonNullable<
	MutationResolvers["deleteCategory"]
> = async (_parent, _arg, _ctx) => {
	return _ctx.prisma.category.delete({ where: { id: _arg.id } });
}
