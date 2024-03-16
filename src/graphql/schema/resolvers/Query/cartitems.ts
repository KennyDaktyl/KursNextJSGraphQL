import { PrismaClient } from "@prisma/client";
import type { QueryResolvers } from "./../../../types.generated";
export const cartitems: NonNullable<QueryResolvers["cartitems"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const prisma = new PrismaClient();

  const cartItemsGet = await prisma.cartItem.findMany({
    include: {
      product: true,
      cart: true,
    },
  });

  return cartItemsGet;
};
