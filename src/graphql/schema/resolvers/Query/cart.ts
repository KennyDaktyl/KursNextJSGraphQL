import type { QueryResolvers } from "./../../../types.generated";
import { PrismaClient } from "@prisma/client";
export const cart: NonNullable<QueryResolvers["cart"]> = async (
	_parent,
	{ id },
	_ctx,
) => {
	const prisma = new PrismaClient();

	const cartGet = await prisma.cart.findUnique({
		where: {
			id: id,
		},
		include: {
			items: {
				include: {
					product: true,
				},
			},
		},
	});

	return cartGet;
};
