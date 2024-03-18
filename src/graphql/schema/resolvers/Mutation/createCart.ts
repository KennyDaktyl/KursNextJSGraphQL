import type {
	MutationResolvers,
	MutationcreateCartArgs,
} from "./../../../types.generated";

export const createCart: NonNullable<MutationResolvers["createCart"]> = async (
	_parent: any,
	_arg: MutationcreateCartArgs,
	_ctx: any,
) => {
	try {
		const cart = await _ctx.prisma.cart.create({
			data: {
				items: _arg.input.items,
			},
		});
		return cart;
	} catch (error) {
		console.error("Failed to create cart:", error);
		throw new Error("Failed to create cart");
	}
};
