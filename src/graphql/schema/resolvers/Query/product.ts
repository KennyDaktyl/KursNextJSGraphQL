import { PrismaClient } from "@prisma/client";
import { QueryResolvers } from "./../../../types.generated";

export const product: NonNullable<QueryResolvers["product"]> = async (
  _parent,
  { id },
  _ctx,
) => {
  try {
    const prisma = new PrismaClient();

    const foundProduct = await prisma.product.findUnique({
      where: { id },
    });

    await prisma.$disconnect();

    return foundProduct;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw new Error("Failed to fetch product");
  }
};
