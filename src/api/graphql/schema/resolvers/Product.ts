import type { ProductResolvers } from "../../types.generated";
export const Product: ProductResolvers = {
	async reviews(parent, _args, ctx) {
		const reviews = await ctx.prisma.product
			.findUnique({
				where: {
					id: parent.id,
				},
			})
			.reviews();
		return reviews ?? [];
	},

	async images(parent, _args, ctx) {
		const images = await ctx.prisma.product
			.findUnique({
				where: {
					id: parent.id,
				},
			})
			.images();
		return images ?? [];
	},

	async categories(parent, _args, ctx) {
		const categories = await ctx.prisma.categoriesOnProducts
			.findMany({
				where: {
					productId: parent.id,
				},
				include: {
					category: true,
				},
			})
			.then((categoriesOnProducts) =>
				categoriesOnProducts.map((cop) => cop.category),
			);
		return categories ?? [];
	},

	async collections(parent, _args, ctx) {
		const collections = await ctx.prisma.collectionsOnProducts
			.findMany({
				where: {
					productId: parent.id,
				},
				include: {
					collection: true,
				},
			})
			.then((collectionsOnProducts) =>
				collectionsOnProducts.map((cop) => cop.collection),
			);
		return collections ?? [];
	},
};
