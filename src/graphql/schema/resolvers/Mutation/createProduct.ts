import type { MutationResolvers } from "./../../../types.generated";
import { PrismaClient } from "@prisma/client";

export const createProduct: NonNullable<
  MutationResolvers["createProduct"]
> = async (_parent, { input }, _ctx) => {
  try {
    const data = {
      name: input.name,
      slug: input.name,
      price: input.price,
      description: input.description,
    };

    const prisma = new PrismaClient();

    const createdProduct = await prisma.product.create({
      data,
    });
    return createdProduct;
  } catch (error) {
    // Obsługa błędów, jeśli wystąpią
    console.error("Failed to create product:", error);
    throw new Error("Failed to create product");
  }
};
