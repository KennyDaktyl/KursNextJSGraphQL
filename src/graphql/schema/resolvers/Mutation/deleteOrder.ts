import type { MutationResolvers } from "./../../../types.generated";
export const deleteOrder: NonNullable<
	MutationResolvers["deleteOrder"]
> = async (_parent: any, _arg: { id: string }, _ctx: any) => {
	return _ctx.prisma.order.delete({ where: { id: _arg.id } });
};
