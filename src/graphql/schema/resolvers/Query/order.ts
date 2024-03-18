import type { QueryResolvers } from "./../../../types.generated";
export const order: NonNullable<QueryResolvers["order"]> = async (
	_parent: any,
	_arg: { id: string },
	_ctx: any,
) => {
	try {
		const order = await _ctx.prisma.order.findUnique({
			where: { id: _arg.id },
		});
		return order;
	} catch (error) {
		console.error("Failed to fetch order:", error);
		throw new Error("Failed to fetch order");
	}
};
