import { CartItem, PrismaClient } from "@prisma/client";
import type {
  Maybe,
  QuerycartitemArgs,
  RequireFields,
  Resolver,
  ResolverTypeWrapper,
} from "./../../../types.generated";

export const cartitem: NonNullable<QueryResolvers["cartitem"]> = async (
  _parent,
  _args,
  _ctx,
) => {
  const prisma = new PrismaClient();

  const cartItemGet = await prisma.cartItem.findUnique({
    where: {
      id: _args.id,
    },
  });

  return cartItemGet || null;
};
