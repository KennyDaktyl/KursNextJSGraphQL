import { PrismaClient } from "@prisma/client";
import slugify from "slugify";
import type { MutationResolvers } from "./../../../types.generated";
import { tr } from "@faker-js/faker";

export const createProduct: NonNullable<
  MutationResolvers["createProduct"]
> = async (_parent, { input }, _ctx) => {
  try {
    const prisma = new PrismaClient();

    // Pobieranie kategorii i kolekcji na podstawie przekazanych identyfikatorów
    const categories = await prisma.category.findMany({
      where: {
        id: {
          in: input.categoryIds,
        },
      },
    });

    const collections = await prisma.collection.findMany({
      where: {
        id: {
          in: input.collectionIds,
        },
      },
    });

    console.log(categories[0].id);

    // Tworzenie produktu
    const createdProduct = await prisma.product.create({
      data: {
        name: input.name,
        description: input.description,
        price: input.price,
        slug: slugify(input.name, { lower: true }),
      },
    });

    const categoriesOnProducts = await Promise.all(
      categories.map(async category => {
        return await prisma.categoriesOnProducts.create({
          data: {
            product: { connect: { id: createdProduct.id } },
            category: { connect: { id: category.id } },
          },
        });
      })
    );

    const collectionsOnProducts = await Promise.all(
      collections.map(async collection => {
        await prisma.collectionsOnProducts.create({
          data: {
            product: { connect: { id: createdProduct.id } },
            collection: { connect: { id: collection.id } },
          },
        });
      })
    );

    await prisma.$disconnect();

    return createdProduct;
  } catch (error) {
    console.error("Failed to create product:", error);
    throw new Error(`Failed to create product.`);
  }
};
