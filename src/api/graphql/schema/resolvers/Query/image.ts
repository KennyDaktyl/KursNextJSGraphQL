import { PrismaClient } from "@prisma/client";
import { QueryResolvers } from "../../../types.generated";

export const image: NonNullable<QueryResolvers["image"]> = async (
	_parent,
	{ id },
	_ctx,
) => {
	try {
		const prisma = new PrismaClient();

		const foundImage = await prisma.image.findUnique({
			where: { id },
		});

		await prisma.$disconnect();

		return foundImage;
	} catch (error) {
		console.error("Failed to fetch image:", error);
		throw new Error("Failed to fetch image");
	}
};
