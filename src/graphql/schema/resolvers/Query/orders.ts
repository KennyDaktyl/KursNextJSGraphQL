import type { QueryResolvers } from "./../../../types.generated";
export const orders: NonNullable<QueryResolvers["orders"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	return _ctx.prisma.order.findMany();
};
