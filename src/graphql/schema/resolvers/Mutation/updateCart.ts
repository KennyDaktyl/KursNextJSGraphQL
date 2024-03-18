import type { MutationResolvers } from "./../../../types.generated";
export const updateCart: NonNullable<MutationResolvers["updateCart"]> = async (
	_parent: any,
	_arg: any,
	_ctx: any,
) => {
	return _ctx.prisma.cart.update({
		where: { id: _arg.id },
		data: { quantity: _arg.quantity },
	});
};
