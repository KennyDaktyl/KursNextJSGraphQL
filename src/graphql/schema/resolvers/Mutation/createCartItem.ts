import { PrismaClient } from "@prisma/client";
import type { MutationResolvers } from "./../../../types.generated";

export const createCartItem: NonNullable<
  MutationResolvers["createCartItem"]
> = async (_parent, { input }, _ctx) => {
  const prisma = new PrismaClient();

  const createdCartItem = await prisma.cartItem.create({
    data: {
      product: {
        connect: {
          id: input.productId,
        },
      },
      quantity: input.quantity,
      cart: {
        connect: {
          id: input.cartId,
        },
      },
    },
    include: {
      product: true,
      cart: true,
    },
  });

  return createdCartItem;
};
