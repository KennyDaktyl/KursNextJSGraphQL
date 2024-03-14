import { PrismaClient } from "@prisma/client";
import type { QueryResolvers } from "./../../../types.generated";
export const categories: NonNullable<QueryResolvers["categories"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  try {
    const prisma = new PrismaClient();

    const allCategories = await prisma.category.findMany();

    await prisma.$disconnect();

    return allCategories;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error("Failed to fetch categories");
  }
};
