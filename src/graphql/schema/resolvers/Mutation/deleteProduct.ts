import type { MutationResolvers } from "./../../../types.generated";
export const deleteProduct: NonNullable<
	MutationResolvers["deleteProduct"]
> = async (_parent, _arg, _ctx) => {
	return _ctx.prisma.product.delete({ where: { id: _arg.id } });
};
