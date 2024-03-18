import type { MutationResolvers } from "./../../../types.generated";
export const updateCollection: NonNullable<
	MutationResolvers["updateCollection"]
> = async (_parent, _arg, _ctx) => {
	return _ctx.prisma.collection.update({
		where: { id: _arg.id },
		data: { ..._arg.input },
	});
};
