import { PrismaClient } from "@prisma/client";
import type { QueryResolvers } from "./../../../types.generated";
export const category: NonNullable<QueryResolvers["category"]> = async (
	_parent,
	{ id },
	_ctx,
) => {
	try {
		const prisma = new PrismaClient();

		const foundCategory = await prisma.category.findUnique({
			where: { id },
		});

		await prisma.$disconnect();

		return foundCategory;
	} catch (error) {
		console.error("Failed to fetch category:", error);
		throw new Error("Failed to fetch category");
	}
};
