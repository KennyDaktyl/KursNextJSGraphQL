import { PrismaClient } from "@prisma/client";
import { type QueryResolvers } from "./../../../types.generated";

export const categories: NonNullable<QueryResolvers["categories"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  try {
    const prisma = new PrismaClient();

    const allCategories = await prisma.category.findMany({
      include: {
        products: {
          select: {
            product: true,
          },
        },
      },
    });

    await prisma.$disconnect();

    const categoriesWithProducts = allCategories.map((category) => ({
      ...category,
      products: category.products.map((product) => product.product),
    }));

    console.log("Categories with products:", categoriesWithProducts);

    await prisma.$disconnect();

    return categoriesWithProducts;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error(`Failed to fetch categories`);
  }
};
