import type { QueryResolvers } from "./../../../types.generated";
export const card: NonNullable<QueryResolvers["card"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return _ctx.prisma.card.findUnique({
    where: { id: _arg.id },
  });
};
