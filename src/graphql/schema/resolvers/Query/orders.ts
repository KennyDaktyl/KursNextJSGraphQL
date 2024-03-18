import type { QueryResolvers } from "./../../../types.generated";
export const orders: NonNullable<QueryResolvers["orders"]> = async (
	_parent: any,
	_arg: any,
	_ctx: any,
) => {
	return _ctx.prisma.order.findMany();
};
