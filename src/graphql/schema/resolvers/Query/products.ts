import { PrismaClient } from "@prisma/client";
import { type QueryResolvers } from "./../../../types.generated";

export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  try {
    const prisma = new PrismaClient();

    const allProducts = await prisma.product.findMany({
      include: {
        categories: {
          select: { category: true },
        },
        collections: {
          select: { collection: true },
        },
        images: true,
      },
    });

    await prisma.$disconnect();

    console.log("All products:", allProducts);

    const productsWithRelations = allProducts.map((product) => ({
      ...product,
      categories: product.categories.map((category) => category.category),
      collections: product.collections.map(
        (collection) => collection.collection,
      ),
      images: product.images.map((image) => image),
    }));

    return productsWithRelations;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Error("Failed to fetch products");
  }
};
