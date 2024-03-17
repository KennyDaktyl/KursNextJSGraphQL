import { PrismaClient } from "@prisma/client";
import { type QueryResolvers } from "./../../../types.generated";

export const products: NonNullable<QueryResolvers["products"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	try {
		const prisma = new PrismaClient();

		const products = await prisma.product.findMany();
		return products.map((product) => ({
			...product,
			categories: [],
			collections: [],
			reviews: [],
			images: [],
		}));

	} catch (error) {
		console.error("Failed to fetch products:", error);
		throw new Error("Failed to fetch products");
	}
};
