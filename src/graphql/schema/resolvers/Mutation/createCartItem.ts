import type { MutationResolvers } from "./../../../types.generated";

export const createCartItem: NonNullable<
	MutationResolvers["createCartItem"]
> = async (
	_parent: any,
	 _arg,
	 _ctx: any
	) => {
	const createdCartItem = await _ctx.prisma.cartItem.create({
		data: {
			..._arg.input,
		},
		include: {
			product: true,
		},
	});

	return createdCartItem;
};
