import type { MutationResolvers, Order, ResolverTypeWrapper } from "./../../../types.generated";
export const updateOrder: NonNullable<
	MutationResolvers["updateOrder"]
> = async (_parent, _arg, _ctx): Promise<ResolverTypeWrapper<Order>> => {
		return _ctx.prisma.order.update({ where: { id: _arg.id }, data: { ..._arg.input, email: "", status: "" } });
};
