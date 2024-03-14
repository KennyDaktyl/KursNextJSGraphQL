import { PrismaClient } from "@prisma/client";
import { QueryResolvers } from "./../../../types.generated";

export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  try {
    const prisma = new PrismaClient();

    const allProducts = await prisma.product.findMany();

    await prisma.$disconnect();

    return allProducts;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products");
  }
};
