import { PrismaClient } from "@prisma/client";
import type { MutationResolvers } from "./../../../types.generated";

export const createReview: NonNullable<
	MutationResolvers["createReview"]
> = async (_parent, { input }, _ctx) => {
	const createdReview = await _ctx.prisma.review.create({
		data: {
			...input,
		},
	});

	return createdReview;
};
