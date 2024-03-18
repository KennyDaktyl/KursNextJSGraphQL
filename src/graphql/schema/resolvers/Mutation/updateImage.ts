import type { MutationResolvers } from "./../../../types.generated";
export const updateImage: NonNullable<
	MutationResolvers["updateImage"]
> = async (_parent, _arg, _ctx) => {
	return _ctx.prisma.image.update({
		where: { id: _arg.id },
		data: { ..._arg.input },
	});
};
