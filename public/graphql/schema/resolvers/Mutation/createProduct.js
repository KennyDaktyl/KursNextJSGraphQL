"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const slugify_1 = __importDefault(require("slugify"));
const createProduct = async (_parent, { input }, _ctx) => {
    var _a, _b, _c, _d, _e, _f;
    try {
        const createdProduct = await _ctx.prisma.product.create({
            data: {
                name: input.name,
                description: input.description,
                price: input.price,
                slug: (0, slugify_1.default)(input.name, { lower: true }),
            },
        });
        const categoryIds = (_b = (_a = input.categoryIds) === null || _a === void 0 ? void 0 : _a.filter((categoryId) => categoryId !== undefined)) !== null && _b !== void 0 ? _b : [];
        await _ctx.prisma.category.findMany({
            where: {
                id: {
                    in: categoryIds,
                },
            },
        });
        await Promise.all((_d = (_c = input.categoryIds) === null || _c === void 0 ? void 0 : _c.map(async (categoryId) => {
            if (categoryId !== null && categoryId !== undefined) {
                try {
                    const createdCategoriesOnProduct = await _ctx.prisma.categoriesOnProducts.create({
                        data: {
                            productId: createdProduct.id,
                            categoryId: categoryId,
                        },
                    });
                    return createdCategoriesOnProduct;
                }
                catch (error) {
                    console.error(`Failed to create CategoriesOnProducts for category ${categoryId}:`, error);
                    throw new Error(`Failed to create CategoriesOnProducts for category ${categoryId}.`);
                }
            }
        })) !== null && _d !== void 0 ? _d : []);
        await Promise.all((_f = (_e = input.collectionIds) === null || _e === void 0 ? void 0 : _e.map(async (collectionId) => {
            if (collectionId !== null && collectionId !== undefined) {
                try {
                    const createdCollectionsOnProduct = await _ctx.prisma.collectionsOnProducts.create({
                        data: {
                            productId: createdProduct.id,
                            collectionId: collectionId,
                        },
                    });
                    return createdCollectionsOnProduct;
                }
                catch (error) {
                    console.error(`Failed to create CollectionsOnProducts for collection ${collectionId}:`, error);
                    throw new Error(`Failed to create CollectionsOnProducts for collection ${collectionId}.`);
                }
            }
        })) !== null && _f !== void 0 ? _f : []);
        await _ctx.prisma.$disconnect();
        return createdProduct;
    }
    catch (error) {
        console.error("Failed to create product:", error);
        throw new Error(`Failed to create product.`);
    }
};
exports.createProduct = createProduct;
//# sourceMappingURL=createProduct.js.map