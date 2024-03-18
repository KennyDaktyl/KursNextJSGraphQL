import type { MutationResolvers } from "./../../../types.generated";

export const createOrder: NonNullable<
	MutationResolvers["createOrder"]
> = async (_parent: any, _arg: { input: any }, _ctx: any) => {
	return _ctx.prisma.order.create({
		data: {
			..._arg.input,
		},
	});
};
