import type { MutationResolvers } from "./../../../types.generated";
export const deleteImage: NonNullable<
	MutationResolvers["deleteImage"]
> = async (_parent, _arg, _ctx) => {
	return _ctx.prisma.image.delete({ where: { id: _arg.id } });
};
