import { ResolverFn } from "../../../types.generated";
import { Context } from "../../../../types";

export const categories: ResolverFn<any[], {}, Context, any> = async (
  _parent,
  _arg,
  _ctx,
) => {
  try {

    const allCategories = await _ctx.prisma.category.findMany({
      include: {
        products: {
          select: {
            product: true,
          },
        },
      },
    });

    const categoriesWithProducts = allCategories.map((category) => ({
      ...category,
      products: category.products.map((product) => product.product),
    }));

    console.log("Categories with products:", categoriesWithProducts);

    await _ctx.prisma.$disconnect();

    return categoriesWithProducts;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw new Error(`Failed to fetch categories`);
  }
};