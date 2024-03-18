import { PrismaClient } from "@prisma/client";
import type { QueryResolvers } from "./../../../types.generated";

export const collections: NonNullable<QueryResolvers["collections"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	try {
		const prisma = new PrismaClient();

		const allCollections = await prisma.collection.findMany({
			include: {
				products: {
					include: {
						product: true,
					},
				},
			},
		});

		console.log("All collections:", allCollections);
		await prisma.$disconnect();

		const collectionsWithProducts = allCollections.map((collection) => ({
			...collection,
			products:
				collection.products.length > 0
					? collection.products.map((p) => p.product)
					: [],
		}));

		return collectionsWithProducts;
	} catch (error) {
		console.error("Failed to fetch categories:", error);
		throw new Error("Failed to fetch categories");
	}
};
