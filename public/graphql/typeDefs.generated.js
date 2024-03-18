"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = {
    kind: "Document",
    definitions: [
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Mutation", loc: { start: 5, end: 13 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "createCartItem",
                        loc: { start: 18, end: 32 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 33, end: 38 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CartItemInput",
                                        loc: { start: 40, end: 53 },
                                    },
                                    loc: { start: 40, end: 53 },
                                },
                                loc: { start: 40, end: 54 },
                            },
                            directives: [],
                            loc: { start: 33, end: 54 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CartItem",
                                loc: { start: 57, end: 65 },
                            },
                            loc: { start: 57, end: 65 },
                        },
                        loc: { start: 57, end: 66 },
                    },
                    directives: [],
                    loc: { start: 18, end: 66 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "updateCartItem",
                        loc: { start: 69, end: 83 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: { kind: "Name", value: "id", loc: { start: 84, end: 86 } },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 88, end: 90 },
                                    },
                                    loc: { start: 88, end: 90 },
                                },
                                loc: { start: 88, end: 91 },
                            },
                            directives: [],
                            loc: { start: 84, end: 91 },
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 93, end: 98 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CartItemInput",
                                        loc: { start: 100, end: 113 },
                                    },
                                    loc: { start: 100, end: 113 },
                                },
                                loc: { start: 100, end: 114 },
                            },
                            directives: [],
                            loc: { start: 93, end: 114 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CartItem",
                                loc: { start: 117, end: 125 },
                            },
                            loc: { start: 117, end: 125 },
                        },
                        loc: { start: 117, end: 126 },
                    },
                    directives: [],
                    loc: { start: 69, end: 126 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "deleteCartItem",
                        loc: { start: 129, end: 143 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 144, end: 146 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 148, end: 150 },
                                    },
                                    loc: { start: 148, end: 150 },
                                },
                                loc: { start: 148, end: 151 },
                            },
                            directives: [],
                            loc: { start: 144, end: 151 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cart",
                                loc: { start: 154, end: 158 },
                            },
                            loc: { start: 154, end: 158 },
                        },
                        loc: { start: 154, end: 159 },
                    },
                    directives: [],
                    loc: { start: 129, end: 159 },
                },
            ],
            loc: { start: 0, end: 161 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Query", loc: { start: 168, end: 173 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "cartitem",
                        loc: { start: 178, end: 186 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 187, end: 189 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 191, end: 193 },
                                    },
                                    loc: { start: 191, end: 193 },
                                },
                                loc: { start: 191, end: 194 },
                            },
                            directives: [],
                            loc: { start: 187, end: 194 },
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "CartItem",
                            loc: { start: 197, end: 205 },
                        },
                        loc: { start: 197, end: 205 },
                    },
                    directives: [],
                    loc: { start: 178, end: 205 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "cartitems",
                        loc: { start: 208, end: 217 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CartItem",
                                        loc: { start: 220, end: 228 },
                                    },
                                    loc: { start: 220, end: 228 },
                                },
                                loc: { start: 220, end: 229 },
                            },
                            loc: { start: 219, end: 230 },
                        },
                        loc: { start: 219, end: 231 },
                    },
                    directives: [],
                    loc: { start: 208, end: 231 },
                },
            ],
            loc: { start: 163, end: 233 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "CartItem", loc: { start: 240, end: 248 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "id", loc: { start: 253, end: 255 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 257, end: 263 },
                            },
                            loc: { start: 257, end: 263 },
                        },
                        loc: { start: 257, end: 264 },
                    },
                    directives: [],
                    loc: { start: 253, end: 264 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "product",
                        loc: { start: 267, end: 274 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Product",
                                loc: { start: 276, end: 283 },
                            },
                            loc: { start: 276, end: 283 },
                        },
                        loc: { start: 276, end: 284 },
                    },
                    directives: [],
                    loc: { start: 267, end: 284 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "quantity",
                        loc: { start: 287, end: 295 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                                loc: { start: 297, end: 300 },
                            },
                            loc: { start: 297, end: 300 },
                        },
                        loc: { start: 297, end: 301 },
                    },
                    directives: [],
                    loc: { start: 287, end: 301 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "cart", loc: { start: 304, end: 308 } },
                    arguments: [],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cart",
                            loc: { start: 310, end: 314 },
                        },
                        loc: { start: 310, end: 314 },
                    },
                    directives: [],
                    loc: { start: 304, end: 314 },
                },
            ],
            loc: { start: 235, end: 316 },
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "CartItemInput",
                loc: { start: 324, end: 337 },
            },
            directives: [],
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "cartId",
                        loc: { start: 342, end: 348 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 350, end: 356 },
                            },
                            loc: { start: 350, end: 356 },
                        },
                        loc: { start: 350, end: 357 },
                    },
                    directives: [],
                    loc: { start: 342, end: 357 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "productId",
                        loc: { start: 360, end: 369 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 371, end: 377 },
                            },
                            loc: { start: 371, end: 377 },
                        },
                        loc: { start: 371, end: 378 },
                    },
                    directives: [],
                    loc: { start: 360, end: 378 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "quantity",
                        loc: { start: 381, end: 389 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                                loc: { start: 391, end: 394 },
                            },
                            loc: { start: 391, end: 394 },
                        },
                        loc: { start: 391, end: 395 },
                    },
                    directives: [],
                    loc: { start: 381, end: 395 },
                },
            ],
            loc: { start: 318, end: 397 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Mutation", loc: { start: 403, end: 411 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "createCart",
                        loc: { start: 416, end: 426 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 427, end: 432 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CartInput",
                                        loc: { start: 434, end: 443 },
                                    },
                                    loc: { start: 434, end: 443 },
                                },
                                loc: { start: 434, end: 444 },
                            },
                            directives: [],
                            loc: { start: 427, end: 444 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cart",
                                loc: { start: 447, end: 451 },
                            },
                            loc: { start: 447, end: 451 },
                        },
                        loc: { start: 447, end: 452 },
                    },
                    directives: [],
                    loc: { start: 416, end: 452 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "updateCart",
                        loc: { start: 455, end: 465 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 466, end: 468 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 470, end: 472 },
                                    },
                                    loc: { start: 470, end: 472 },
                                },
                                loc: { start: 470, end: 473 },
                            },
                            directives: [],
                            loc: { start: 466, end: 473 },
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 475, end: 480 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CartInput",
                                        loc: { start: 482, end: 491 },
                                    },
                                    loc: { start: 482, end: 491 },
                                },
                                loc: { start: 482, end: 492 },
                            },
                            directives: [],
                            loc: { start: 475, end: 492 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cart",
                                loc: { start: 495, end: 499 },
                            },
                            loc: { start: 495, end: 499 },
                        },
                        loc: { start: 495, end: 500 },
                    },
                    directives: [],
                    loc: { start: 455, end: 500 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "deleteCart",
                        loc: { start: 503, end: 513 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 514, end: 516 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 518, end: 520 },
                                    },
                                    loc: { start: 518, end: 520 },
                                },
                                loc: { start: 518, end: 521 },
                            },
                            directives: [],
                            loc: { start: 514, end: 521 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cart",
                                loc: { start: 524, end: 528 },
                            },
                            loc: { start: 524, end: 528 },
                        },
                        loc: { start: 524, end: 529 },
                    },
                    directives: [],
                    loc: { start: 503, end: 529 },
                },
            ],
            loc: { start: 398, end: 531 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Query", loc: { start: 538, end: 543 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "cart", loc: { start: 548, end: 552 } },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 553, end: 555 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 557, end: 559 },
                                    },
                                    loc: { start: 557, end: 559 },
                                },
                                loc: { start: 557, end: 560 },
                            },
                            directives: [],
                            loc: { start: 553, end: 560 },
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cart",
                            loc: { start: 563, end: 567 },
                        },
                        loc: { start: 563, end: 567 },
                    },
                    directives: [],
                    loc: { start: 548, end: 567 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "carts", loc: { start: 570, end: 575 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Cart",
                                        loc: { start: 578, end: 582 },
                                    },
                                    loc: { start: 578, end: 582 },
                                },
                                loc: { start: 578, end: 583 },
                            },
                            loc: { start: 577, end: 584 },
                        },
                        loc: { start: 577, end: 585 },
                    },
                    directives: [],
                    loc: { start: 570, end: 585 },
                },
            ],
            loc: { start: 533, end: 587 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Cart", loc: { start: 594, end: 598 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "id", loc: { start: 603, end: 605 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 607, end: 613 },
                            },
                            loc: { start: 607, end: 613 },
                        },
                        loc: { start: 607, end: 614 },
                    },
                    directives: [],
                    loc: { start: 603, end: 614 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "items", loc: { start: 617, end: 622 } },
                    arguments: [],
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CartItem",
                                loc: { start: 625, end: 633 },
                            },
                            loc: { start: 625, end: 633 },
                        },
                        loc: { start: 624, end: 634 },
                    },
                    directives: [],
                    loc: { start: 617, end: 634 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "order", loc: { start: 637, end: 642 } },
                    arguments: [],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Order",
                            loc: { start: 644, end: 649 },
                        },
                        loc: { start: 644, end: 649 },
                    },
                    directives: [],
                    loc: { start: 637, end: 649 },
                },
            ],
            loc: { start: 589, end: 651 },
        },
        {
            kind: "InputObjectTypeDefinition",
            name: { kind: "Name", value: "CartInput", loc: { start: 659, end: 668 } },
            directives: [],
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: { kind: "Name", value: "items", loc: { start: 673, end: 678 } },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "CartItemInput",
                                loc: { start: 681, end: 694 },
                            },
                            loc: { start: 681, end: 694 },
                        },
                        loc: { start: 680, end: 695 },
                    },
                    directives: [],
                    loc: { start: 673, end: 695 },
                },
            ],
            loc: { start: 653, end: 697 },
        },
        {
            kind: "ObjectTypeExtension",
            name: { kind: "Name", value: "Query", loc: { start: 710, end: 715 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "category",
                        loc: { start: 720, end: 728 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 729, end: 731 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 733, end: 735 },
                                    },
                                    loc: { start: 733, end: 735 },
                                },
                                loc: { start: 733, end: 736 },
                            },
                            directives: [],
                            loc: { start: 729, end: 736 },
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Category",
                            loc: { start: 739, end: 747 },
                        },
                        loc: { start: 739, end: 747 },
                    },
                    directives: [],
                    loc: { start: 720, end: 747 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "categories",
                        loc: { start: 750, end: 760 },
                    },
                    arguments: [],
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Category",
                                loc: { start: 763, end: 771 },
                            },
                            loc: { start: 763, end: 771 },
                        },
                        loc: { start: 762, end: 772 },
                    },
                    directives: [],
                    loc: { start: 750, end: 772 },
                },
            ],
            loc: { start: 698, end: 774 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Category", loc: { start: 781, end: 789 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "id", loc: { start: 794, end: 796 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                                loc: { start: 798, end: 800 },
                            },
                            loc: { start: 798, end: 800 },
                        },
                        loc: { start: 798, end: 801 },
                    },
                    directives: [],
                    loc: { start: 794, end: 801 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "name", loc: { start: 804, end: 808 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 810, end: 816 },
                            },
                            loc: { start: 810, end: 816 },
                        },
                        loc: { start: 810, end: 817 },
                    },
                    directives: [],
                    loc: { start: 804, end: 817 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "slug", loc: { start: 820, end: 824 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 826, end: 832 },
                            },
                            loc: { start: 826, end: 832 },
                        },
                        loc: { start: 826, end: 833 },
                    },
                    directives: [],
                    loc: { start: 820, end: 833 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "description",
                        loc: { start: 836, end: 847 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 849, end: 855 },
                            },
                            loc: { start: 849, end: 855 },
                        },
                        loc: { start: 849, end: 856 },
                    },
                    directives: [],
                    loc: { start: 836, end: 856 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "products",
                        loc: { start: 859, end: 867 },
                    },
                    arguments: [],
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Product",
                                loc: { start: 870, end: 877 },
                            },
                            loc: { start: 870, end: 877 },
                        },
                        loc: { start: 869, end: 878 },
                    },
                    directives: [],
                    loc: { start: 859, end: 878 },
                },
            ],
            loc: { start: 776, end: 880 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Mutation", loc: { start: 887, end: 895 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "createCategory",
                        loc: { start: 900, end: 914 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 915, end: 920 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CategoryInput",
                                        loc: { start: 922, end: 935 },
                                    },
                                    loc: { start: 922, end: 935 },
                                },
                                loc: { start: 922, end: 936 },
                            },
                            directives: [],
                            loc: { start: 915, end: 936 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Category",
                                loc: { start: 939, end: 947 },
                            },
                            loc: { start: 939, end: 947 },
                        },
                        loc: { start: 939, end: 948 },
                    },
                    directives: [],
                    loc: { start: 900, end: 948 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "updateCategory",
                        loc: { start: 951, end: 965 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 966, end: 968 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 970, end: 972 },
                                    },
                                    loc: { start: 970, end: 972 },
                                },
                                loc: { start: 970, end: 973 },
                            },
                            directives: [],
                            loc: { start: 966, end: 973 },
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 975, end: 980 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CategoryInput",
                                        loc: { start: 982, end: 995 },
                                    },
                                    loc: { start: 982, end: 995 },
                                },
                                loc: { start: 982, end: 996 },
                            },
                            directives: [],
                            loc: { start: 975, end: 996 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Category",
                                loc: { start: 999, end: 1007 },
                            },
                            loc: { start: 999, end: 1007 },
                        },
                        loc: { start: 999, end: 1008 },
                    },
                    directives: [],
                    loc: { start: 951, end: 1008 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "deleteCategory",
                        loc: { start: 1011, end: 1025 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 1026, end: 1028 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 1030, end: 1032 },
                                    },
                                    loc: { start: 1030, end: 1032 },
                                },
                                loc: { start: 1030, end: 1033 },
                            },
                            directives: [],
                            loc: { start: 1026, end: 1033 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Category",
                                loc: { start: 1036, end: 1044 },
                            },
                            loc: { start: 1036, end: 1044 },
                        },
                        loc: { start: 1036, end: 1045 },
                    },
                    directives: [],
                    loc: { start: 1011, end: 1045 },
                },
            ],
            loc: { start: 882, end: 1047 },
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "CategoryInput",
                loc: { start: 1055, end: 1068 },
            },
            directives: [],
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name",
                        loc: { start: 1073, end: 1077 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 1079, end: 1085 },
                            },
                            loc: { start: 1079, end: 1085 },
                        },
                        loc: { start: 1079, end: 1086 },
                    },
                    directives: [],
                    loc: { start: 1073, end: 1086 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "description",
                        loc: { start: 1089, end: 1100 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 1102, end: 1108 },
                            },
                            loc: { start: 1102, end: 1108 },
                        },
                        loc: { start: 1102, end: 1109 },
                    },
                    directives: [],
                    loc: { start: 1089, end: 1109 },
                },
            ],
            loc: { start: 1049, end: 1111 },
        },
        {
            kind: "ObjectTypeExtension",
            name: { kind: "Name", value: "Query", loc: { start: 1124, end: 1129 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "collection",
                        loc: { start: 1134, end: 1144 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 1145, end: 1147 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 1149, end: 1151 },
                                    },
                                    loc: { start: 1149, end: 1151 },
                                },
                                loc: { start: 1149, end: 1152 },
                            },
                            directives: [],
                            loc: { start: 1145, end: 1152 },
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Collection",
                            loc: { start: 1155, end: 1165 },
                        },
                        loc: { start: 1155, end: 1165 },
                    },
                    directives: [],
                    loc: { start: 1134, end: 1165 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "collections",
                        loc: { start: 1168, end: 1179 },
                    },
                    arguments: [],
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Collection",
                                loc: { start: 1182, end: 1192 },
                            },
                            loc: { start: 1182, end: 1192 },
                        },
                        loc: { start: 1181, end: 1193 },
                    },
                    directives: [],
                    loc: { start: 1168, end: 1193 },
                },
            ],
            loc: { start: 1112, end: 1195 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Mutation",
                loc: { start: 1202, end: 1210 },
            },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "createCollection",
                        loc: { start: 1215, end: 1231 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 1232, end: 1237 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CollectionInput",
                                        loc: { start: 1239, end: 1254 },
                                    },
                                    loc: { start: 1239, end: 1254 },
                                },
                                loc: { start: 1239, end: 1255 },
                            },
                            directives: [],
                            loc: { start: 1232, end: 1255 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Collection",
                                loc: { start: 1258, end: 1268 },
                            },
                            loc: { start: 1258, end: 1268 },
                        },
                        loc: { start: 1258, end: 1269 },
                    },
                    directives: [],
                    loc: { start: 1215, end: 1269 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "updateCollection",
                        loc: { start: 1272, end: 1288 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 1289, end: 1291 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 1293, end: 1295 },
                                    },
                                    loc: { start: 1293, end: 1295 },
                                },
                                loc: { start: 1293, end: 1296 },
                            },
                            directives: [],
                            loc: { start: 1289, end: 1296 },
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 1298, end: 1303 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CollectionInput",
                                        loc: { start: 1305, end: 1320 },
                                    },
                                    loc: { start: 1305, end: 1320 },
                                },
                                loc: { start: 1305, end: 1321 },
                            },
                            directives: [],
                            loc: { start: 1298, end: 1321 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Collection",
                                loc: { start: 1324, end: 1334 },
                            },
                            loc: { start: 1324, end: 1334 },
                        },
                        loc: { start: 1324, end: 1335 },
                    },
                    directives: [],
                    loc: { start: 1272, end: 1335 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "deleteCollection",
                        loc: { start: 1338, end: 1354 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 1355, end: 1357 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 1359, end: 1361 },
                                    },
                                    loc: { start: 1359, end: 1361 },
                                },
                                loc: { start: 1359, end: 1362 },
                            },
                            directives: [],
                            loc: { start: 1355, end: 1362 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Collection",
                                loc: { start: 1365, end: 1375 },
                            },
                            loc: { start: 1365, end: 1375 },
                        },
                        loc: { start: 1365, end: 1376 },
                    },
                    directives: [],
                    loc: { start: 1338, end: 1376 },
                },
            ],
            loc: { start: 1197, end: 1378 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 1385, end: 1395 },
            },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "id", loc: { start: 1400, end: 1402 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                                loc: { start: 1404, end: 1406 },
                            },
                            loc: { start: 1404, end: 1406 },
                        },
                        loc: { start: 1404, end: 1407 },
                    },
                    directives: [],
                    loc: { start: 1400, end: 1407 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "name",
                        loc: { start: 1410, end: 1414 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 1416, end: 1422 },
                            },
                            loc: { start: 1416, end: 1422 },
                        },
                        loc: { start: 1416, end: 1423 },
                    },
                    directives: [],
                    loc: { start: 1410, end: 1423 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "slug",
                        loc: { start: 1426, end: 1430 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 1432, end: 1438 },
                            },
                            loc: { start: 1432, end: 1438 },
                        },
                        loc: { start: 1432, end: 1439 },
                    },
                    directives: [],
                    loc: { start: 1426, end: 1439 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "description",
                        loc: { start: 1442, end: 1453 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 1455, end: 1461 },
                            },
                            loc: { start: 1455, end: 1461 },
                        },
                        loc: { start: 1455, end: 1462 },
                    },
                    directives: [],
                    loc: { start: 1442, end: 1462 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "products",
                        loc: { start: 1465, end: 1473 },
                    },
                    arguments: [],
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Product",
                                loc: { start: 1476, end: 1483 },
                            },
                            loc: { start: 1476, end: 1483 },
                        },
                        loc: { start: 1475, end: 1484 },
                    },
                    directives: [],
                    loc: { start: 1465, end: 1484 },
                },
            ],
            loc: { start: 1380, end: 1486 },
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "CollectionInput",
                loc: { start: 1494, end: 1509 },
            },
            directives: [],
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name",
                        loc: { start: 1514, end: 1518 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 1520, end: 1526 },
                            },
                            loc: { start: 1520, end: 1526 },
                        },
                        loc: { start: 1520, end: 1527 },
                    },
                    directives: [],
                    loc: { start: 1514, end: 1527 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "description",
                        loc: { start: 1530, end: 1541 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 1543, end: 1549 },
                            },
                            loc: { start: 1543, end: 1549 },
                        },
                        loc: { start: 1543, end: 1550 },
                    },
                    directives: [],
                    loc: { start: 1530, end: 1550 },
                },
            ],
            loc: { start: 1488, end: 1552 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Mutation",
                loc: { start: 1558, end: 1566 },
            },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "createImage",
                        loc: { start: 1571, end: 1582 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 1583, end: 1588 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ImageInput",
                                        loc: { start: 1590, end: 1600 },
                                    },
                                    loc: { start: 1590, end: 1600 },
                                },
                                loc: { start: 1590, end: 1601 },
                            },
                            directives: [],
                            loc: { start: 1583, end: 1601 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Image",
                                loc: { start: 1604, end: 1609 },
                            },
                            loc: { start: 1604, end: 1609 },
                        },
                        loc: { start: 1604, end: 1610 },
                    },
                    directives: [],
                    loc: { start: 1571, end: 1610 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "updateImage",
                        loc: { start: 1613, end: 1624 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 1625, end: 1627 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 1629, end: 1631 },
                                    },
                                    loc: { start: 1629, end: 1631 },
                                },
                                loc: { start: 1629, end: 1632 },
                            },
                            directives: [],
                            loc: { start: 1625, end: 1632 },
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 1634, end: 1639 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ImageInput",
                                        loc: { start: 1641, end: 1651 },
                                    },
                                    loc: { start: 1641, end: 1651 },
                                },
                                loc: { start: 1641, end: 1652 },
                            },
                            directives: [],
                            loc: { start: 1634, end: 1652 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Image",
                                loc: { start: 1655, end: 1660 },
                            },
                            loc: { start: 1655, end: 1660 },
                        },
                        loc: { start: 1655, end: 1661 },
                    },
                    directives: [],
                    loc: { start: 1613, end: 1661 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "deleteImage",
                        loc: { start: 1664, end: 1675 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 1676, end: 1678 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 1680, end: 1682 },
                                    },
                                    loc: { start: 1680, end: 1682 },
                                },
                                loc: { start: 1680, end: 1683 },
                            },
                            directives: [],
                            loc: { start: 1676, end: 1683 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Image",
                                loc: { start: 1686, end: 1691 },
                            },
                            loc: { start: 1686, end: 1691 },
                        },
                        loc: { start: 1686, end: 1692 },
                    },
                    directives: [],
                    loc: { start: 1664, end: 1692 },
                },
            ],
            loc: { start: 1553, end: 1694 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Query", loc: { start: 1701, end: 1706 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "image",
                        loc: { start: 1711, end: 1716 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 1717, end: 1719 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 1721, end: 1723 },
                                    },
                                    loc: { start: 1721, end: 1723 },
                                },
                                loc: { start: 1721, end: 1724 },
                            },
                            directives: [],
                            loc: { start: 1717, end: 1724 },
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Image",
                            loc: { start: 1727, end: 1732 },
                        },
                        loc: { start: 1727, end: 1732 },
                    },
                    directives: [],
                    loc: { start: 1711, end: 1732 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "images",
                        loc: { start: 1735, end: 1741 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Image",
                                        loc: { start: 1744, end: 1749 },
                                    },
                                    loc: { start: 1744, end: 1749 },
                                },
                                loc: { start: 1744, end: 1750 },
                            },
                            loc: { start: 1743, end: 1751 },
                        },
                        loc: { start: 1743, end: 1752 },
                    },
                    directives: [],
                    loc: { start: 1735, end: 1752 },
                },
            ],
            loc: { start: 1696, end: 1754 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Image", loc: { start: 1761, end: 1766 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "id", loc: { start: 1771, end: 1773 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 1775, end: 1781 },
                            },
                            loc: { start: 1775, end: 1781 },
                        },
                        loc: { start: 1775, end: 1782 },
                    },
                    directives: [],
                    loc: { start: 1771, end: 1782 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "url", loc: { start: 1785, end: 1788 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 1790, end: 1796 },
                            },
                            loc: { start: 1790, end: 1796 },
                        },
                        loc: { start: 1790, end: 1797 },
                    },
                    directives: [],
                    loc: { start: 1785, end: 1797 },
                },
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "alt", loc: { start: 1800, end: 1803 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 1805, end: 1811 },
                            },
                            loc: { start: 1805, end: 1811 },
                        },
                        loc: { start: 1805, end: 1812 },
                    },
                    directives: [],
                    loc: { start: 1800, end: 1812 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "width",
                        loc: { start: 1815, end: 1820 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                                loc: { start: 1822, end: 1825 },
                            },
                            loc: { start: 1822, end: 1825 },
                        },
                        loc: { start: 1822, end: 1826 },
                    },
                    directives: [],
                    loc: { start: 1815, end: 1826 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "height",
                        loc: { start: 1829, end: 1835 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                                loc: { start: 1837, end: 1840 },
                            },
                            loc: { start: 1837, end: 1840 },
                        },
                        loc: { start: 1837, end: 1841 },
                    },
                    directives: [],
                    loc: { start: 1829, end: 1841 },
                },
            ],
            loc: { start: 1756, end: 1843 },
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "ImageInput",
                loc: { start: 1851, end: 1861 },
            },
            directives: [],
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: { kind: "Name", value: "url", loc: { start: 1866, end: 1869 } },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 1871, end: 1877 },
                            },
                            loc: { start: 1871, end: 1877 },
                        },
                        loc: { start: 1871, end: 1878 },
                    },
                    directives: [],
                    loc: { start: 1866, end: 1878 },
                },
                {
                    kind: "InputValueDefinition",
                    name: { kind: "Name", value: "alt", loc: { start: 1881, end: 1884 } },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 1886, end: 1892 },
                            },
                            loc: { start: 1886, end: 1892 },
                        },
                        loc: { start: 1886, end: 1893 },
                    },
                    directives: [],
                    loc: { start: 1881, end: 1893 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "width",
                        loc: { start: 1896, end: 1901 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                                loc: { start: 1903, end: 1906 },
                            },
                            loc: { start: 1903, end: 1906 },
                        },
                        loc: { start: 1903, end: 1907 },
                    },
                    directives: [],
                    loc: { start: 1896, end: 1907 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "height",
                        loc: { start: 1910, end: 1916 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                                loc: { start: 1918, end: 1921 },
                            },
                            loc: { start: 1918, end: 1921 },
                        },
                        loc: { start: 1918, end: 1922 },
                    },
                    directives: [],
                    loc: { start: 1910, end: 1922 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "productId",
                        loc: { start: 1925, end: 1934 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 1936, end: 1942 },
                            },
                            loc: { start: 1936, end: 1942 },
                        },
                        loc: { start: 1936, end: 1943 },
                    },
                    directives: [],
                    loc: { start: 1925, end: 1943 },
                },
            ],
            loc: { start: 1845, end: 1945 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Query", loc: { start: 1951, end: 1956 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "order",
                        loc: { start: 1961, end: 1966 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 1967, end: 1969 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 1971, end: 1973 },
                                    },
                                    loc: { start: 1971, end: 1973 },
                                },
                                loc: { start: 1971, end: 1974 },
                            },
                            directives: [],
                            loc: { start: 1967, end: 1974 },
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Order",
                            loc: { start: 1977, end: 1982 },
                        },
                        loc: { start: 1977, end: 1982 },
                    },
                    directives: [],
                    loc: { start: 1961, end: 1982 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "orders",
                        loc: { start: 1985, end: 1991 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Order",
                                        loc: { start: 1994, end: 1999 },
                                    },
                                    loc: { start: 1994, end: 1999 },
                                },
                                loc: { start: 1994, end: 2000 },
                            },
                            loc: { start: 1993, end: 2001 },
                        },
                        loc: { start: 1993, end: 2002 },
                    },
                    directives: [],
                    loc: { start: 1985, end: 2002 },
                },
            ],
            loc: { start: 1946, end: 2004 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Mutation",
                loc: { start: 2011, end: 2019 },
            },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "createOrder",
                        loc: { start: 2024, end: 2035 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 2036, end: 2041 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "OrderInput",
                                        loc: { start: 2043, end: 2053 },
                                    },
                                    loc: { start: 2043, end: 2053 },
                                },
                                loc: { start: 2043, end: 2054 },
                            },
                            directives: [],
                            loc: { start: 2036, end: 2054 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Order",
                                loc: { start: 2057, end: 2062 },
                            },
                            loc: { start: 2057, end: 2062 },
                        },
                        loc: { start: 2057, end: 2063 },
                    },
                    directives: [],
                    loc: { start: 2024, end: 2063 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "updateOrder",
                        loc: { start: 2066, end: 2077 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 2078, end: 2080 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 2082, end: 2084 },
                                    },
                                    loc: { start: 2082, end: 2084 },
                                },
                                loc: { start: 2082, end: 2085 },
                            },
                            directives: [],
                            loc: { start: 2078, end: 2085 },
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 2087, end: 2092 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "OrderInput",
                                        loc: { start: 2094, end: 2104 },
                                    },
                                    loc: { start: 2094, end: 2104 },
                                },
                                loc: { start: 2094, end: 2105 },
                            },
                            directives: [],
                            loc: { start: 2087, end: 2105 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Order",
                                loc: { start: 2108, end: 2113 },
                            },
                            loc: { start: 2108, end: 2113 },
                        },
                        loc: { start: 2108, end: 2114 },
                    },
                    directives: [],
                    loc: { start: 2066, end: 2114 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "deleteOrder",
                        loc: { start: 2117, end: 2128 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 2129, end: 2131 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 2133, end: 2135 },
                                    },
                                    loc: { start: 2133, end: 2135 },
                                },
                                loc: { start: 2133, end: 2136 },
                            },
                            directives: [],
                            loc: { start: 2129, end: 2136 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Order",
                                loc: { start: 2139, end: 2144 },
                            },
                            loc: { start: 2139, end: 2144 },
                        },
                        loc: { start: 2139, end: 2145 },
                    },
                    directives: [],
                    loc: { start: 2117, end: 2145 },
                },
            ],
            loc: { start: 2006, end: 2147 },
        },
        {
            kind: "EnumTypeDefinition",
            name: {
                kind: "Name",
                value: "OrderStatus",
                loc: { start: 2154, end: 2165 },
            },
            directives: [],
            values: [
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "CREATED",
                        loc: { start: 2170, end: 2177 },
                    },
                    directives: [],
                    loc: { start: 2170, end: 2177 },
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "PROCESSING",
                        loc: { start: 2180, end: 2190 },
                    },
                    directives: [],
                    loc: { start: 2180, end: 2190 },
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "PAID",
                        loc: { start: 2193, end: 2197 },
                    },
                    directives: [],
                    loc: { start: 2193, end: 2197 },
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "COMPLETED",
                        loc: { start: 2200, end: 2209 },
                    },
                    directives: [],
                    loc: { start: 2200, end: 2209 },
                },
                {
                    kind: "EnumValueDefinition",
                    name: {
                        kind: "Name",
                        value: "CANCELLED",
                        loc: { start: 2212, end: 2221 },
                    },
                    directives: [],
                    loc: { start: 2212, end: 2221 },
                },
            ],
            loc: { start: 2149, end: 2223 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Order", loc: { start: 2230, end: 2235 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "id", loc: { start: 2240, end: 2242 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 2244, end: 2250 },
                            },
                            loc: { start: 2244, end: 2250 },
                        },
                        loc: { start: 2244, end: 2251 },
                    },
                    directives: [],
                    loc: { start: 2240, end: 2251 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "createdAt",
                        loc: { start: 2254, end: 2263 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 2265, end: 2271 },
                            },
                            loc: { start: 2265, end: 2271 },
                        },
                        loc: { start: 2265, end: 2272 },
                    },
                    directives: [],
                    loc: { start: 2254, end: 2272 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "updatedAt",
                        loc: { start: 2275, end: 2284 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 2286, end: 2292 },
                            },
                            loc: { start: 2286, end: 2292 },
                        },
                        loc: { start: 2286, end: 2293 },
                    },
                    directives: [],
                    loc: { start: 2275, end: 2293 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "email",
                        loc: { start: 2296, end: 2301 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 2303, end: 2309 },
                            },
                            loc: { start: 2303, end: 2309 },
                        },
                        loc: { start: 2303, end: 2310 },
                    },
                    directives: [],
                    loc: { start: 2296, end: 2310 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "total",
                        loc: { start: 2313, end: 2318 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                                loc: { start: 2320, end: 2323 },
                            },
                            loc: { start: 2320, end: 2323 },
                        },
                        loc: { start: 2320, end: 2324 },
                    },
                    directives: [],
                    loc: { start: 2313, end: 2324 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "status",
                        loc: { start: 2327, end: 2333 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 2335, end: 2341 },
                            },
                            loc: { start: 2335, end: 2341 },
                        },
                        loc: { start: 2335, end: 2342 },
                    },
                    directives: [],
                    loc: { start: 2327, end: 2342 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "items",
                        loc: { start: 2345, end: 2350 },
                    },
                    arguments: [],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String",
                            loc: { start: 2352, end: 2358 },
                        },
                        loc: { start: 2352, end: 2358 },
                    },
                    directives: [],
                    loc: { start: 2345, end: 2358 },
                },
            ],
            loc: { start: 2225, end: 2360 },
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "OrderInput",
                loc: { start: 2368, end: 2378 },
            },
            directives: [],
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "email",
                        loc: { start: 2383, end: 2388 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 2390, end: 2396 },
                            },
                            loc: { start: 2390, end: 2396 },
                        },
                        loc: { start: 2390, end: 2397 },
                    },
                    directives: [],
                    loc: { start: 2383, end: 2397 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "total",
                        loc: { start: 2400, end: 2405 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                                loc: { start: 2407, end: 2410 },
                            },
                            loc: { start: 2407, end: 2410 },
                        },
                        loc: { start: 2407, end: 2411 },
                    },
                    directives: [],
                    loc: { start: 2400, end: 2411 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "status",
                        loc: { start: 2414, end: 2420 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 2422, end: 2428 },
                            },
                            loc: { start: 2422, end: 2428 },
                        },
                        loc: { start: 2422, end: 2429 },
                    },
                    directives: [],
                    loc: { start: 2414, end: 2429 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "cartId",
                        loc: { start: 2432, end: 2438 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 2440, end: 2446 },
                            },
                            loc: { start: 2440, end: 2446 },
                        },
                        loc: { start: 2440, end: 2447 },
                    },
                    directives: [],
                    loc: { start: 2432, end: 2447 },
                },
            ],
            loc: { start: 2362, end: 2449 },
        },
        {
            kind: "ObjectTypeExtension",
            name: { kind: "Name", value: "Query", loc: { start: 2462, end: 2467 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "product",
                        loc: { start: 2472, end: 2479 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 2480, end: 2482 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 2484, end: 2486 },
                                    },
                                    loc: { start: 2484, end: 2486 },
                                },
                                loc: { start: 2484, end: 2487 },
                            },
                            directives: [],
                            loc: { start: 2480, end: 2487 },
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Product",
                            loc: { start: 2490, end: 2497 },
                        },
                        loc: { start: 2490, end: 2497 },
                    },
                    directives: [],
                    loc: { start: 2472, end: 2497 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "products",
                        loc: { start: 2500, end: 2508 },
                    },
                    arguments: [],
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Product",
                                loc: { start: 2511, end: 2518 },
                            },
                            loc: { start: 2511, end: 2518 },
                        },
                        loc: { start: 2510, end: 2519 },
                    },
                    directives: [],
                    loc: { start: 2500, end: 2519 },
                },
            ],
            loc: { start: 2450, end: 2521 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Product", loc: { start: 2528, end: 2535 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "id", loc: { start: 2540, end: 2542 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                                loc: { start: 2544, end: 2546 },
                            },
                            loc: { start: 2544, end: 2546 },
                        },
                        loc: { start: 2544, end: 2547 },
                    },
                    directives: [],
                    loc: { start: 2540, end: 2547 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "name",
                        loc: { start: 2550, end: 2554 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 2556, end: 2562 },
                            },
                            loc: { start: 2556, end: 2562 },
                        },
                        loc: { start: 2556, end: 2563 },
                    },
                    directives: [],
                    loc: { start: 2550, end: 2563 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "description",
                        loc: { start: 2566, end: 2577 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 2579, end: 2585 },
                            },
                            loc: { start: 2579, end: 2585 },
                        },
                        loc: { start: 2579, end: 2586 },
                    },
                    directives: [],
                    loc: { start: 2566, end: 2586 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "categories",
                        loc: { start: 2589, end: 2599 },
                    },
                    arguments: [],
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Category",
                                loc: { start: 2602, end: 2610 },
                            },
                            loc: { start: 2602, end: 2610 },
                        },
                        loc: { start: 2601, end: 2611 },
                    },
                    directives: [],
                    loc: { start: 2589, end: 2611 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "collections",
                        loc: { start: 2614, end: 2625 },
                    },
                    arguments: [],
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Collection",
                                loc: { start: 2628, end: 2638 },
                            },
                            loc: { start: 2628, end: 2638 },
                        },
                        loc: { start: 2627, end: 2639 },
                    },
                    directives: [],
                    loc: { start: 2614, end: 2639 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "price",
                        loc: { start: 2642, end: 2647 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                                loc: { start: 2649, end: 2652 },
                            },
                            loc: { start: 2649, end: 2652 },
                        },
                        loc: { start: 2649, end: 2653 },
                    },
                    directives: [],
                    loc: { start: 2642, end: 2653 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "images",
                        loc: { start: 2656, end: 2662 },
                    },
                    arguments: [],
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Image",
                                loc: { start: 2665, end: 2670 },
                            },
                            loc: { start: 2665, end: 2670 },
                        },
                        loc: { start: 2664, end: 2671 },
                    },
                    directives: [],
                    loc: { start: 2656, end: 2671 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "reviews",
                        loc: { start: 2674, end: 2681 },
                    },
                    arguments: [],
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Review",
                                loc: { start: 2684, end: 2690 },
                            },
                            loc: { start: 2684, end: 2690 },
                        },
                        loc: { start: 2683, end: 2691 },
                    },
                    directives: [],
                    loc: { start: 2674, end: 2691 },
                },
            ],
            loc: { start: 2523, end: 2693 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Mutation",
                loc: { start: 2700, end: 2708 },
            },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "createProduct",
                        loc: { start: 2713, end: 2726 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 2727, end: 2732 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ProductInput",
                                        loc: { start: 2734, end: 2746 },
                                    },
                                    loc: { start: 2734, end: 2746 },
                                },
                                loc: { start: 2734, end: 2747 },
                            },
                            directives: [],
                            loc: { start: 2727, end: 2747 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Product",
                                loc: { start: 2750, end: 2757 },
                            },
                            loc: { start: 2750, end: 2757 },
                        },
                        loc: { start: 2750, end: 2758 },
                    },
                    directives: [],
                    loc: { start: 2713, end: 2758 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "updateProduct",
                        loc: { start: 2761, end: 2774 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 2775, end: 2777 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 2779, end: 2781 },
                                    },
                                    loc: { start: 2779, end: 2781 },
                                },
                                loc: { start: 2779, end: 2782 },
                            },
                            directives: [],
                            loc: { start: 2775, end: 2782 },
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 2784, end: 2789 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ProductInput",
                                        loc: { start: 2791, end: 2803 },
                                    },
                                    loc: { start: 2791, end: 2803 },
                                },
                                loc: { start: 2791, end: 2804 },
                            },
                            directives: [],
                            loc: { start: 2784, end: 2804 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Product",
                                loc: { start: 2807, end: 2814 },
                            },
                            loc: { start: 2807, end: 2814 },
                        },
                        loc: { start: 2807, end: 2815 },
                    },
                    directives: [],
                    loc: { start: 2761, end: 2815 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "deleteProduct",
                        loc: { start: 2818, end: 2831 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 2832, end: 2834 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 2836, end: 2838 },
                                    },
                                    loc: { start: 2836, end: 2838 },
                                },
                                loc: { start: 2836, end: 2839 },
                            },
                            directives: [],
                            loc: { start: 2832, end: 2839 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Product",
                                loc: { start: 2842, end: 2849 },
                            },
                            loc: { start: 2842, end: 2849 },
                        },
                        loc: { start: 2842, end: 2850 },
                    },
                    directives: [],
                    loc: { start: 2818, end: 2850 },
                },
            ],
            loc: { start: 2695, end: 2852 },
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "ProductInput",
                loc: { start: 2860, end: 2872 },
            },
            directives: [],
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "name",
                        loc: { start: 2877, end: 2881 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 2883, end: 2889 },
                            },
                            loc: { start: 2883, end: 2889 },
                        },
                        loc: { start: 2883, end: 2890 },
                    },
                    directives: [],
                    loc: { start: 2877, end: 2890 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "description",
                        loc: { start: 2893, end: 2904 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 2906, end: 2912 },
                            },
                            loc: { start: 2906, end: 2912 },
                        },
                        loc: { start: 2906, end: 2913 },
                    },
                    directives: [],
                    loc: { start: 2893, end: 2913 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "price",
                        loc: { start: 2916, end: 2921 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                                loc: { start: 2923, end: 2926 },
                            },
                            loc: { start: 2923, end: 2926 },
                        },
                        loc: { start: 2923, end: 2927 },
                    },
                    directives: [],
                    loc: { start: 2916, end: 2927 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "categoryIds",
                        loc: { start: 2930, end: 2941 },
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                                loc: { start: 2944, end: 2946 },
                            },
                            loc: { start: 2944, end: 2946 },
                        },
                        loc: { start: 2943, end: 2947 },
                    },
                    directives: [],
                    loc: { start: 2930, end: 2947 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "collectionIds",
                        loc: { start: 2950, end: 2963 },
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                                loc: { start: 2966, end: 2968 },
                            },
                            loc: { start: 2966, end: 2968 },
                        },
                        loc: { start: 2965, end: 2969 },
                    },
                    directives: [],
                    loc: { start: 2950, end: 2969 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "imageIds",
                        loc: { start: 2972, end: 2980 },
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                                loc: { start: 2983, end: 2985 },
                            },
                            loc: { start: 2983, end: 2985 },
                        },
                        loc: { start: 2982, end: 2986 },
                    },
                    directives: [],
                    loc: { start: 2972, end: 2986 },
                },
            ],
            loc: { start: 2854, end: 2988 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "Mutation",
                loc: { start: 2994, end: 3002 },
            },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "createReview",
                        loc: { start: 3007, end: 3019 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 3020, end: 3025 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ReviewInput",
                                        loc: { start: 3027, end: 3038 },
                                    },
                                    loc: { start: 3027, end: 3038 },
                                },
                                loc: { start: 3027, end: 3039 },
                            },
                            directives: [],
                            loc: { start: 3020, end: 3039 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Review",
                                loc: { start: 3042, end: 3048 },
                            },
                            loc: { start: 3042, end: 3048 },
                        },
                        loc: { start: 3042, end: 3049 },
                    },
                    directives: [],
                    loc: { start: 3007, end: 3049 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "updateReview",
                        loc: { start: 3052, end: 3064 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 3065, end: 3067 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 3069, end: 3071 },
                                    },
                                    loc: { start: 3069, end: 3071 },
                                },
                                loc: { start: 3069, end: 3072 },
                            },
                            directives: [],
                            loc: { start: 3065, end: 3072 },
                        },
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "input",
                                loc: { start: 3074, end: 3079 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ReviewInput",
                                        loc: { start: 3081, end: 3092 },
                                    },
                                    loc: { start: 3081, end: 3092 },
                                },
                                loc: { start: 3081, end: 3093 },
                            },
                            directives: [],
                            loc: { start: 3074, end: 3093 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Review",
                                loc: { start: 3096, end: 3102 },
                            },
                            loc: { start: 3096, end: 3102 },
                        },
                        loc: { start: 3096, end: 3103 },
                    },
                    directives: [],
                    loc: { start: 3052, end: 3103 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "deleteReview",
                        loc: { start: 3106, end: 3118 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 3119, end: 3121 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 3123, end: 3125 },
                                    },
                                    loc: { start: 3123, end: 3125 },
                                },
                                loc: { start: 3123, end: 3126 },
                            },
                            directives: [],
                            loc: { start: 3119, end: 3126 },
                        },
                    ],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Review",
                                loc: { start: 3129, end: 3135 },
                            },
                            loc: { start: 3129, end: 3135 },
                        },
                        loc: { start: 3129, end: 3136 },
                    },
                    directives: [],
                    loc: { start: 3106, end: 3136 },
                },
            ],
            loc: { start: 2989, end: 3138 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Query", loc: { start: 3145, end: 3150 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "review",
                        loc: { start: 3155, end: 3161 },
                    },
                    arguments: [
                        {
                            kind: "InputValueDefinition",
                            name: {
                                kind: "Name",
                                value: "id",
                                loc: { start: 3162, end: 3164 },
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "ID",
                                        loc: { start: 3166, end: 3168 },
                                    },
                                    loc: { start: 3166, end: 3168 },
                                },
                                loc: { start: 3166, end: 3169 },
                            },
                            directives: [],
                            loc: { start: 3162, end: 3169 },
                        },
                    ],
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Review",
                            loc: { start: 3172, end: 3178 },
                        },
                        loc: { start: 3172, end: 3178 },
                    },
                    directives: [],
                    loc: { start: 3155, end: 3178 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "reviews",
                        loc: { start: 3181, end: 3188 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "ListType",
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Review",
                                        loc: { start: 3191, end: 3197 },
                                    },
                                    loc: { start: 3191, end: 3197 },
                                },
                                loc: { start: 3191, end: 3198 },
                            },
                            loc: { start: 3190, end: 3199 },
                        },
                        loc: { start: 3190, end: 3200 },
                    },
                    directives: [],
                    loc: { start: 3181, end: 3200 },
                },
            ],
            loc: { start: 3140, end: 3202 },
        },
        {
            kind: "ObjectTypeDefinition",
            name: { kind: "Name", value: "Review", loc: { start: 3209, end: 3215 } },
            interfaces: [],
            directives: [],
            fields: [
                {
                    kind: "FieldDefinition",
                    name: { kind: "Name", value: "id", loc: { start: 3220, end: 3222 } },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                                loc: { start: 3224, end: 3226 },
                            },
                            loc: { start: 3224, end: 3226 },
                        },
                        loc: { start: 3224, end: 3227 },
                    },
                    directives: [],
                    loc: { start: 3220, end: 3227 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "title",
                        loc: { start: 3230, end: 3235 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 3237, end: 3243 },
                            },
                            loc: { start: 3237, end: 3243 },
                        },
                        loc: { start: 3237, end: 3244 },
                    },
                    directives: [],
                    loc: { start: 3230, end: 3244 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "author",
                        loc: { start: 3247, end: 3253 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 3255, end: 3261 },
                            },
                            loc: { start: 3255, end: 3261 },
                        },
                        loc: { start: 3255, end: 3262 },
                    },
                    directives: [],
                    loc: { start: 3247, end: 3262 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "content",
                        loc: { start: 3265, end: 3272 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 3274, end: 3280 },
                            },
                            loc: { start: 3274, end: 3280 },
                        },
                        loc: { start: 3274, end: 3281 },
                    },
                    directives: [],
                    loc: { start: 3265, end: 3281 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "rating",
                        loc: { start: 3284, end: 3290 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                                loc: { start: 3292, end: 3295 },
                            },
                            loc: { start: 3292, end: 3295 },
                        },
                        loc: { start: 3292, end: 3296 },
                    },
                    directives: [],
                    loc: { start: 3284, end: 3296 },
                },
                {
                    kind: "FieldDefinition",
                    name: {
                        kind: "Name",
                        value: "createdAt",
                        loc: { start: 3299, end: 3308 },
                    },
                    arguments: [],
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DateTime",
                                loc: { start: 3310, end: 3318 },
                            },
                            loc: { start: 3310, end: 3318 },
                        },
                        loc: { start: 3310, end: 3319 },
                    },
                    directives: [],
                    loc: { start: 3299, end: 3319 },
                },
            ],
            loc: { start: 3204, end: 3321 },
        },
        {
            kind: "InputObjectTypeDefinition",
            name: {
                kind: "Name",
                value: "ReviewInput",
                loc: { start: 3329, end: 3340 },
            },
            directives: [],
            fields: [
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "title",
                        loc: { start: 3345, end: 3350 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 3352, end: 3358 },
                            },
                            loc: { start: 3352, end: 3358 },
                        },
                        loc: { start: 3352, end: 3359 },
                    },
                    directives: [],
                    loc: { start: 3345, end: 3359 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "author",
                        loc: { start: 3362, end: 3368 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 3370, end: 3376 },
                            },
                            loc: { start: 3370, end: 3376 },
                        },
                        loc: { start: 3370, end: 3377 },
                    },
                    directives: [],
                    loc: { start: 3362, end: 3377 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "content",
                        loc: { start: 3380, end: 3387 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String",
                                loc: { start: 3389, end: 3395 },
                            },
                            loc: { start: 3389, end: 3395 },
                        },
                        loc: { start: 3389, end: 3396 },
                    },
                    directives: [],
                    loc: { start: 3380, end: 3396 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "rating",
                        loc: { start: 3399, end: 3405 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Int",
                                loc: { start: 3407, end: 3410 },
                            },
                            loc: { start: 3407, end: 3410 },
                        },
                        loc: { start: 3407, end: 3411 },
                    },
                    directives: [],
                    loc: { start: 3399, end: 3411 },
                },
                {
                    kind: "InputValueDefinition",
                    name: {
                        kind: "Name",
                        value: "productId",
                        loc: { start: 3414, end: 3423 },
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID",
                                loc: { start: 3425, end: 3427 },
                            },
                            loc: { start: 3425, end: 3427 },
                        },
                        loc: { start: 3425, end: 3428 },
                    },
                    directives: [],
                    loc: { start: 3414, end: 3428 },
                },
            ],
            loc: { start: 3323, end: 3430 },
        },
        {
            kind: "SchemaDefinition",
            directives: [],
            operationTypes: [
                {
                    kind: "OperationTypeDefinition",
                    operation: "query",
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Query",
                            loc: { start: 3449, end: 3454 },
                        },
                        loc: { start: 3449, end: 3454 },
                    },
                    loc: { start: 3442, end: 3454 },
                },
            ],
            loc: { start: 3431, end: 3456 },
        },
        {
            kind: "ScalarTypeDefinition",
            name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 3465, end: 3473 },
            },
            directives: [],
            loc: { start: 3458, end: 3473 },
        },
    ],
    loc: { start: 0, end: 3474 },
};
//# sourceMappingURL=typeDefs.generated.js.map