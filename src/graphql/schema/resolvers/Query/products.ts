import { type QueryResolvers } from "./../../../types.generated";

export const products: NonNullable<QueryResolvers["products"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
		
	const products = await _ctx.prisma.product.findMany();
	return products.map((product) => ({
			...product,
			categories: [],
			collections: [],
			reviews: [],
			images: [],
	}));
};
