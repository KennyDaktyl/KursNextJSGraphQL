import { PrismaClient } from "@prisma/client";
import type { MutationResolvers } from "./../../../types.generated";

export const createCollection: NonNullable<
  MutationResolvers["createCollection"]
> = async (_parent, { input }, _ctx) => {
  try {
    const data = {
      name: input.name,
      slug: input.name,
      description: input.description,
    };

    const prisma = new PrismaClient();

    const createdCollection = await prisma.collection.create({
      data,
    });
    return createdCollection;
  } catch (error) {
    console.error("Failed to create collection:", error);
    throw new Error("Failed to create collection");
  }
};
