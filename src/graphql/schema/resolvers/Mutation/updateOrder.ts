import type { MutationResolvers } from "./../../../types.generated";
export const updateOrder: NonNullable<
	MutationResolvers["updateOrder"]
> = async (
	_parent: any,
	_arg: {
		input: {
			status?: string;
			id?: string;
		};
	},
	_ctx: any,
) => {
	return _ctx.prisma.order.update({
		where: { id: _arg.input.id },
		data: { ..._arg.input },
	});
};
