import type { MutationResolvers } from "./../../../types.generated";

export const createImage: NonNullable<
	MutationResolvers["createImage"]
> = async (_parent, { input }, _ctx) => {
	const createdImage = await _ctx.prisma.image.create({
		data: {
			...input,
		},
	});

	return createdImage;
};
