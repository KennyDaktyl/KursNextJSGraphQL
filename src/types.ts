type optionalKeys<T> = {
    [K in keyof T]-?: T[K] extends
    | { __typename?: string }
    | Array<{ __typename?: string }>
    ? K
    : never;
}[keyof T];

export type Mapper<T> = T;

export type Context = {
    prisma: import('@prisma/client').PrismaClient;
}