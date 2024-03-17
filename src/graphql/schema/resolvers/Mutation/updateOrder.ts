import type { MutationResolvers } from "./../../../types.generated";
export const updateOrder: NonNullable<
	MutationResolvers["updateOrder"]
> = async (_parent, _arg, _ctx) => {
		return _ctx.prisma.order.update({ where: { id: _arg.id }, data: { ..._arg.input } });
};
