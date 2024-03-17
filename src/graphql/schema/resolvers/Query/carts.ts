import { PrismaClient } from "@prisma/client";
import type { QueryResolvers } from "./../../../types.generated";
export const carts: NonNullable<QueryResolvers["carts"]> = async (
	_parent,
	_args,
	_ctx,
) => {
	const prisma = new PrismaClient();

	const cartsGet = await prisma.cart.findMany();

	return cartsGet;
};
