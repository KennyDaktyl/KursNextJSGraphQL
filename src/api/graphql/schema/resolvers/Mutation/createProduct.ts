import slugify from "slugify";
import type { MutationResolvers } from "../../../types.generated";

export const createProduct: NonNullable<
	MutationResolvers["createProduct"]
> = async (_parent, { input }, _ctx) => {
	try {
		const createdProduct = await _ctx.prisma.product.create({
			data: {
				name: input.name,
				description: input.description,
				price: input.price,
				slug: slugify(input.name, { lower: true }),
			},
		});

		const categoryIds =
			input.categoryIds?.filter(
				(categoryId): categoryId is string => categoryId !== undefined,
			) ?? [];
		await _ctx.prisma.category.findMany({
			where: {
				id: {
					in: categoryIds,
				},
			},
		});

		await Promise.all(
			input.categoryIds?.map(async (categoryId) => {
				if (categoryId !== null && categoryId !== undefined) {
					try {
						const createdCategoriesOnProduct =
							await _ctx.prisma.categoriesOnProducts.create({
								data: {
									productId: createdProduct.id,
									categoryId: categoryId,
								},
							});
						return createdCategoriesOnProduct;
					} catch (error) {
						console.error(
							`Failed to create CategoriesOnProducts for category ${categoryId}:`,
							error,
						);
						throw new Error(
							`Failed to create CategoriesOnProducts for category ${categoryId}.`,
						);
					}
				}
			}) ?? [],
		);

		await Promise.all(
			input.collectionIds?.map(async (collectionId) => {
				if (collectionId !== null && collectionId !== undefined) {
					try {
						const createdCollectionsOnProduct =
							await _ctx.prisma.collectionsOnProducts.create({
								data: {
									productId: createdProduct.id,
									collectionId: collectionId,
								},
							});
						return createdCollectionsOnProduct;
					} catch (error) {
						console.error(
							`Failed to create CollectionsOnProducts for collection ${collectionId}:`,
							error,
						);
						throw new Error(
							`Failed to create CollectionsOnProducts for collection ${collectionId}.`,
						);
					}
				}
			}) ?? [],
		);

		await _ctx.prisma.$disconnect();
		return createdProduct;
	} catch (error) {
		console.error("Failed to create product:", error);
		throw new Error(`Failed to create product.`);
	}
};
