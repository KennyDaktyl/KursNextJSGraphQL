import type { CollectionResolvers } from "../../types.generated";

export const Collection: CollectionResolvers = {
	async products(parent, _args, ctx) {
		const products = await ctx.prisma.collectionsOnProducts
			.findMany({
				where: {
					collectionId: parent.id,
				},
				include: {
					product: true,
				},
			})
			.then((collectionsOnProducts) =>
				collectionsOnProducts.map((cop) => cop.product),
			);
		return products ?? [];
	},
};
