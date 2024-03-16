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
      include: {
        categories: {
          select: {
            category: true,
          },
        },
        collections: {
          select: { collection: true },
        },
        images: true,
      },
    });

    await prisma.$disconnect();

    const categories = foundProduct?.categories.map(categoryOnProduct => categoryOnProduct.category) ?? [];
    const collections = foundProduct?.collections.map(collectionOnProduct => collectionOnProduct.collection) ?? [];


    // Zwracanie produktu z listą kategorii
    foundProduct.categories = categories;
    foundProduct.collections = collections;
    console.log(foundProduct);
    return foundProduct;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    throw new Error("Failed to fetch product");
  }
};
