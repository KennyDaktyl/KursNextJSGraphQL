import { CartItemInput, MutationResolvers } from "./../../../types.generated";

export const createCart: MutationResolvers["createCart"] = async (
  _parent: any,
  _arg: { input: { item: CartItemInput } },
  _ctx: any
) => {
  try {
    // Najpierw tworzymy pusty koszyk
	const cartCreated = await _ctx.prisma.cart.create({
		data: {
			items: {} // Pusty koszyk
		},
		include: {
			items: true
		}
	});

	console.log("cartCreated", cartCreated);

	await _ctx.prisma.cartItem.create({
		data: {
			productId: _arg.input.item.productId,
			quantity: _arg.input.item.quantity,
			cartId: cartCreated.id
		},
	});

	const cartItem = await _ctx.prisma.cartItem.create({
		data: {
			quantity: _arg.input.item.quantity,
			productId: _arg.input.item.productId,
			cartId: cartCreated.id
		}
	});

	console.log("cartItem", cartItem);
	return 	cartCreated;
  } catch (error) {
    console.error("Failed to create cart:", error);
    throw new Error("Failed to create cart");
  }
};
