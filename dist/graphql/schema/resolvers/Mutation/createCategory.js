"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const client_1 = require("@prisma/client");
const slugify_1 = __importDefault(require("slugify"));
const createCategory = async (_parent, { input }, _ctx) => {
    const prisma = new client_1.PrismaClient();
    const createdCategory = await prisma.category.create({
        data: {
            name: input.name,
            slug: (0, slugify_1.default)(input.name.toLocaleLowerCase()),
            description: input.description,
        },
        include: {
            products: true,
        },
    });
    return createdCategory;
};
exports.createCategory = createCategory;
//# sourceMappingURL=createCategory.js.map