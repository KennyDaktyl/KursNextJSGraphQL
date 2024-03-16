import { Collection, PrismaClient } from "@prisma/client";
import type { MutationResolvers } from "./../../../types.generated";
import slugify from "slugify";

export const createCollection: NonNullable<
  MutationResolvers["createCollection"]
> = async (_parent, { input }, _ctx): Promise<Collection> => {
  const prisma = new PrismaClient();

  const createCollection = await prisma.collection.create({
    data: {
      name: input.name,
      slug: slugify(input.name.toLowerCase()),
      description: input.description,
    },
    include: {
      products: true,
    },
  });

  return createCollection;
};
