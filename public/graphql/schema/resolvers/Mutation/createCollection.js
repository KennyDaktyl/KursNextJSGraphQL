"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCollection = void 0;
const client_1 = require("@prisma/client");
const slugify_1 = __importDefault(require("slugify"));
const createCollection = async (_parent, { input }, _ctx) => {
    const prisma = new client_1.PrismaClient();
    const createCollection = await prisma.collection.create({
        data: {
            name: input.name,
            slug: (0, slugify_1.default)(input.name.toLowerCase()),
            description: input.description,
        },
        include: {
            products: true,
        },
    });
    return createCollection;
};
exports.createCollection = createCollection;
//# sourceMappingURL=createCollection.js.map