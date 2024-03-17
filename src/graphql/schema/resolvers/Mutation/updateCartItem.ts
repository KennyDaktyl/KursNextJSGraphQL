import type { MutationResolvers } from "./../../../types.generated";
export const updateCartItem: NonNullable<
	MutationResolvers["updateCartItem"]
> = async (_parent, _arg, _ctx) => {
	return _ctx.prisma.cartItem.update({	where: { id: _arg.id }, data: { ..._arg.input } });
};
