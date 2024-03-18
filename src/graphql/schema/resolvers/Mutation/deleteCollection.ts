import type { MutationResolvers } from "./../../../types.generated";
export const deleteCollection: NonNullable<
	MutationResolvers["deleteCollection"]
> = async (_parent, _arg, _ctx) => {
	return _ctx.prisma.collection.delete({ where: { id: _arg.id } });
};
