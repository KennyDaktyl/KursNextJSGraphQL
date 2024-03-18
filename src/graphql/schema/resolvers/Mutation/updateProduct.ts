import type { MutationResolvers } from "./../../../types.generated";
export const updateProduct: NonNullable<
	MutationResolvers["updateProduct"]
> = async (_parent, _arg, _ctx) => {
	return _ctx.prisma.product.update({
		where: { id: _arg.id },
		data: { ..._arg.input },
	});
};
