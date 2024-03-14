import { PrismaClient } from "@prisma/client";
import type { QueryResolvers } from "./../../../types.generated";
export const collections: NonNullable<QueryResolvers["collections"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  try {
    const prisma = new PrismaClient();

    const allCollections = await prisma.collection.findMany();

    await prisma.$disconnect();

    return allCollections;
  } catch (error) {
    console.error("Failed to fetch collections:", error);
    throw new Error("Failed to fetch collections");
  }
};
