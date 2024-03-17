import type { MutationResolvers } from "./../../../types.generated";

export const deleteCartItem: NonNullable<
	MutationResolvers["deleteCartItem"]
> = async (_parent, _arg, _ctx) => {
	return _ctx.prisma.cartItem.delete({ where: { id: _arg.id } });
};
