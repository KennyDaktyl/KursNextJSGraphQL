import type { QueryResolvers } from "./../../../types.generated";

export const cartitem: NonNullable<QueryResolvers["cartitem"]> = async (
	_parent: any,
	_args: { id: string },
	_ctx: any,
) => {
	const cartItemGet = await _ctx.prisma.cartItem.findUnique({
		where: {
			id: _args.id,
		},
		include: {
			product: true,
		},
	});

	return cartItemGet;
};
