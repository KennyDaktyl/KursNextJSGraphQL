import type {
	QueryResolvers,
} from "../../../types.generated";

export const cartitem: NonNullable<QueryResolvers["cartitem"]> = async (
	_parent,
	_args,
	_ctx,
) => {

	const cartItemGet = await _ctx.prisma.cartItem.findUnique({
		where: {
			id: _args.id,
		},
	});

	return cartItemGet;
};
