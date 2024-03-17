import type { CategoryResolvers } from "./../../types.generated";

export const Category: CategoryResolvers = {
	async products(parent, _args, ctx) {
		const products = await ctx.prisma.categoriesOnProducts
			.findMany({
				where: {
					categoryId: parent.id,
				},
				include: {
					product: true,
				},
			})
			.then((categoriesOnProducts) =>
				categoriesOnProducts.map((cop) => cop.product),
			);
		return products ?? [];
	},
};
