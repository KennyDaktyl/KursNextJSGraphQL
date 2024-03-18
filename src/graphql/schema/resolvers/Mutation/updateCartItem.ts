import type { MutationResolvers } from "./../../../types.generated";
export const updateCartItem: NonNullable<
	MutationResolvers["updateCartItem"]
> = async (_parent: any, _arg, _ctx: any) => {
	return _ctx.prisma.cartItem.update({
		where: { id: _arg.id },
		data: { ..._arg.input },
	});
};
