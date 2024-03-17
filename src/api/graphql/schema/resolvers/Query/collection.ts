import { PrismaClient } from "@prisma/client";
import type { QueryResolvers } from "../../../types.generated";
export const collection: NonNullable<QueryResolvers["collection"]> = async (
	_parent,
	{ id },
	_ctx,
) => {
	try {
		const prisma = new PrismaClient();

		const foundCollection = await prisma.collection.findUnique({
			where: { id },
		});

		await prisma.$disconnect();

		return foundCollection;
	} catch (error) {
		console.error("Failed to fetch collection:", error);
		throw new Error("Failed to fetch collection");
	}
};
