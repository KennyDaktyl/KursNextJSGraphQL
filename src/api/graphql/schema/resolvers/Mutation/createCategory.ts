import { Category, PrismaClient } from "@prisma/client";
import type { MutationResolvers } from "../../../types.generated";
import slugify from "slugify";

export const createCategory: NonNullable<
	MutationResolvers["createCategory"]
> = async (_parent, { input }, _ctx): Promise<Category> => {
	const prisma = new PrismaClient();

	const createdCategory = await prisma.category.create({
		data: {
			name: input.name,
			slug: slugify(input.name.toLocaleLowerCase()),
			description: input.description,
		},
		include: {
			products: true,
		},
	});

	return createdCategory;
};
