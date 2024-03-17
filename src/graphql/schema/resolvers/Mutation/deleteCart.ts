import type { MutationResolvers } from "./../../../types.generated";
export const deleteCart: NonNullable<MutationResolvers["deleteCart"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	return _ctx.prisma.cart.delete({ where: { id: _arg.id } });
};
