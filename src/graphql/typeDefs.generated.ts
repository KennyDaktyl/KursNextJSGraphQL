import type { DocumentNode } from "graphql";
export const typeDefs = {
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
                    value: "CartItemInput",
                    loc: { start: 1590, end: 1603 },
                  },
                  loc: { start: 1590, end: 1603 },
                },
                loc: { start: 1590, end: 1604 },
              },
              directives: [],
              loc: { start: 1583, end: 1604 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CartItem",
                loc: { start: 1607, end: 1615 },
              },
              loc: { start: 1607, end: 1615 },
            },
            loc: { start: 1607, end: 1616 },
          },
          directives: [],
          loc: { start: 1571, end: 1616 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateImage",
            loc: { start: 1619, end: 1630 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1631, end: 1633 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1635, end: 1637 },
                  },
                  loc: { start: 1635, end: 1637 },
                },
                loc: { start: 1635, end: 1638 },
              },
              directives: [],
              loc: { start: 1631, end: 1638 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1640, end: 1645 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CartItemInput",
                    loc: { start: 1647, end: 1660 },
                  },
                  loc: { start: 1647, end: 1660 },
                },
                loc: { start: 1647, end: 1661 },
              },
              directives: [],
              loc: { start: 1640, end: 1661 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CartItem",
                loc: { start: 1664, end: 1672 },
              },
              loc: { start: 1664, end: 1672 },
            },
            loc: { start: 1664, end: 1673 },
          },
          directives: [],
          loc: { start: 1619, end: 1673 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteImage",
            loc: { start: 1676, end: 1687 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1688, end: 1690 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1692, end: 1694 },
                  },
                  loc: { start: 1692, end: 1694 },
                },
                loc: { start: 1692, end: 1695 },
              },
              directives: [],
              loc: { start: 1688, end: 1695 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Cart",
                loc: { start: 1698, end: 1702 },
              },
              loc: { start: 1698, end: 1702 },
            },
            loc: { start: 1698, end: 1703 },
          },
          directives: [],
          loc: { start: 1676, end: 1703 },
        },
      ],
      loc: { start: 1553, end: 1705 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1712, end: 1717 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "image",
            loc: { start: 1722, end: 1727 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1728, end: 1730 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1732, end: 1734 },
                  },
                  loc: { start: 1732, end: 1734 },
                },
                loc: { start: 1732, end: 1735 },
              },
              directives: [],
              loc: { start: 1728, end: 1735 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "CartItem",
              loc: { start: 1738, end: 1746 },
            },
            loc: { start: 1738, end: 1746 },
          },
          directives: [],
          loc: { start: 1722, end: 1746 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 1749, end: 1755 },
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
                    loc: { start: 1758, end: 1766 },
                  },
                  loc: { start: 1758, end: 1766 },
                },
                loc: { start: 1758, end: 1767 },
              },
              loc: { start: 1757, end: 1768 },
            },
            loc: { start: 1757, end: 1769 },
          },
          directives: [],
          loc: { start: 1749, end: 1769 },
        },
      ],
      loc: { start: 1707, end: 1771 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Image", loc: { start: 1778, end: 1783 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1788, end: 1790 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1792, end: 1798 },
              },
              loc: { start: 1792, end: 1798 },
            },
            loc: { start: 1792, end: 1799 },
          },
          directives: [],
          loc: { start: 1788, end: 1799 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 1802, end: 1805 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1807, end: 1813 },
              },
              loc: { start: 1807, end: 1813 },
            },
            loc: { start: 1807, end: 1814 },
          },
          directives: [],
          loc: { start: 1802, end: 1814 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "alt", loc: { start: 1817, end: 1820 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1822, end: 1828 },
              },
              loc: { start: 1822, end: 1828 },
            },
            loc: { start: 1822, end: 1829 },
          },
          directives: [],
          loc: { start: 1817, end: 1829 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 1832, end: 1837 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1839, end: 1842 },
              },
              loc: { start: 1839, end: 1842 },
            },
            loc: { start: 1839, end: 1843 },
          },
          directives: [],
          loc: { start: 1832, end: 1843 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 1846, end: 1852 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1854, end: 1857 },
              },
              loc: { start: 1854, end: 1857 },
            },
            loc: { start: 1854, end: 1858 },
          },
          directives: [],
          loc: { start: 1846, end: 1858 },
        },
      ],
      loc: { start: 1773, end: 1860 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ImageInput",
        loc: { start: 1868, end: 1878 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "url", loc: { start: 1883, end: 1886 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1888, end: 1894 },
              },
              loc: { start: 1888, end: 1894 },
            },
            loc: { start: 1888, end: 1895 },
          },
          directives: [],
          loc: { start: 1883, end: 1895 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "alt", loc: { start: 1898, end: 1901 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1903, end: 1909 },
              },
              loc: { start: 1903, end: 1909 },
            },
            loc: { start: 1903, end: 1910 },
          },
          directives: [],
          loc: { start: 1898, end: 1910 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 1913, end: 1918 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1920, end: 1923 },
              },
              loc: { start: 1920, end: 1923 },
            },
            loc: { start: 1920, end: 1924 },
          },
          directives: [],
          loc: { start: 1913, end: 1924 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 1927, end: 1933 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1935, end: 1938 },
              },
              loc: { start: 1935, end: 1938 },
            },
            loc: { start: 1935, end: 1939 },
          },
          directives: [],
          loc: { start: 1927, end: 1939 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "productId",
            loc: { start: 1942, end: 1951 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1953, end: 1959 },
              },
              loc: { start: 1953, end: 1959 },
            },
            loc: { start: 1953, end: 1960 },
          },
          directives: [],
          loc: { start: 1942, end: 1960 },
        },
      ],
      loc: { start: 1862, end: 1962 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1968, end: 1973 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "order",
            loc: { start: 1978, end: 1983 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1984, end: 1986 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1988, end: 1990 },
                  },
                  loc: { start: 1988, end: 1990 },
                },
                loc: { start: 1988, end: 1991 },
              },
              directives: [],
              loc: { start: 1984, end: 1991 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 1994, end: 1999 },
            },
            loc: { start: 1994, end: 1999 },
          },
          directives: [],
          loc: { start: 1978, end: 1999 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orders",
            loc: { start: 2002, end: 2008 },
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
                    loc: { start: 2011, end: 2016 },
                  },
                  loc: { start: 2011, end: 2016 },
                },
                loc: { start: 2011, end: 2017 },
              },
              loc: { start: 2010, end: 2018 },
            },
            loc: { start: 2010, end: 2019 },
          },
          directives: [],
          loc: { start: 2002, end: 2019 },
        },
      ],
      loc: { start: 1963, end: 2021 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2028, end: 2036 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrder",
            loc: { start: 2041, end: 2052 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2053, end: 2058 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "OrderInput",
                    loc: { start: 2060, end: 2070 },
                  },
                  loc: { start: 2060, end: 2070 },
                },
                loc: { start: 2060, end: 2071 },
              },
              directives: [],
              loc: { start: 2053, end: 2071 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Order",
                loc: { start: 2074, end: 2079 },
              },
              loc: { start: 2074, end: 2079 },
            },
            loc: { start: 2074, end: 2080 },
          },
          directives: [],
          loc: { start: 2041, end: 2080 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrder",
            loc: { start: 2083, end: 2094 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2095, end: 2097 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2099, end: 2101 },
                  },
                  loc: { start: 2099, end: 2101 },
                },
                loc: { start: 2099, end: 2102 },
              },
              directives: [],
              loc: { start: 2095, end: 2102 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2104, end: 2109 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "OrderInput",
                    loc: { start: 2111, end: 2121 },
                  },
                  loc: { start: 2111, end: 2121 },
                },
                loc: { start: 2111, end: 2122 },
              },
              directives: [],
              loc: { start: 2104, end: 2122 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Order",
                loc: { start: 2125, end: 2130 },
              },
              loc: { start: 2125, end: 2130 },
            },
            loc: { start: 2125, end: 2131 },
          },
          directives: [],
          loc: { start: 2083, end: 2131 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrder",
            loc: { start: 2134, end: 2145 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2146, end: 2148 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2150, end: 2152 },
                  },
                  loc: { start: 2150, end: 2152 },
                },
                loc: { start: 2150, end: 2153 },
              },
              directives: [],
              loc: { start: 2146, end: 2153 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Order",
                loc: { start: 2156, end: 2161 },
              },
              loc: { start: 2156, end: 2161 },
            },
            loc: { start: 2156, end: 2162 },
          },
          directives: [],
          loc: { start: 2134, end: 2162 },
        },
      ],
      loc: { start: 2023, end: 2164 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "OrderStatus",
        loc: { start: 2171, end: 2182 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CREATED",
            loc: { start: 2187, end: 2194 },
          },
          directives: [],
          loc: { start: 2187, end: 2194 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PROCESSING",
            loc: { start: 2197, end: 2207 },
          },
          directives: [],
          loc: { start: 2197, end: 2207 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PAID",
            loc: { start: 2210, end: 2214 },
          },
          directives: [],
          loc: { start: 2210, end: 2214 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "COMPLETED",
            loc: { start: 2217, end: 2226 },
          },
          directives: [],
          loc: { start: 2217, end: 2226 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CANCELLED",
            loc: { start: 2229, end: 2238 },
          },
          directives: [],
          loc: { start: 2229, end: 2238 },
        },
      ],
      loc: { start: 2166, end: 2240 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Order", loc: { start: 2247, end: 2252 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2257, end: 2259 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2261, end: 2267 },
              },
              loc: { start: 2261, end: 2267 },
            },
            loc: { start: 2261, end: 2268 },
          },
          directives: [],
          loc: { start: 2257, end: 2268 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2271, end: 2280 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2282, end: 2288 },
              },
              loc: { start: 2282, end: 2288 },
            },
            loc: { start: 2282, end: 2289 },
          },
          directives: [],
          loc: { start: 2271, end: 2289 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 2292, end: 2301 },
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
          loc: { start: 2292, end: 2310 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 2313, end: 2318 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2320, end: 2326 },
              },
              loc: { start: 2320, end: 2326 },
            },
            loc: { start: 2320, end: 2327 },
          },
          directives: [],
          loc: { start: 2313, end: 2327 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "total",
            loc: { start: 2330, end: 2335 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2337, end: 2340 },
              },
              loc: { start: 2337, end: 2340 },
            },
            loc: { start: 2337, end: 2341 },
          },
          directives: [],
          loc: { start: 2330, end: 2341 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 2344, end: 2350 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2352, end: 2358 },
              },
              loc: { start: 2352, end: 2358 },
            },
            loc: { start: 2352, end: 2359 },
          },
          directives: [],
          loc: { start: 2344, end: 2359 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "items",
            loc: { start: 2362, end: 2367 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2369, end: 2375 },
            },
            loc: { start: 2369, end: 2375 },
          },
          directives: [],
          loc: { start: 2362, end: 2375 },
        },
      ],
      loc: { start: 2242, end: 2377 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "OrderInput",
        loc: { start: 2385, end: 2395 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 2400, end: 2405 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2407, end: 2413 },
              },
              loc: { start: 2407, end: 2413 },
            },
            loc: { start: 2407, end: 2414 },
          },
          directives: [],
          loc: { start: 2400, end: 2414 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "total",
            loc: { start: 2417, end: 2422 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2424, end: 2427 },
              },
              loc: { start: 2424, end: 2427 },
            },
            loc: { start: 2424, end: 2428 },
          },
          directives: [],
          loc: { start: 2417, end: 2428 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 2431, end: 2437 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2439, end: 2445 },
              },
              loc: { start: 2439, end: 2445 },
            },
            loc: { start: 2439, end: 2446 },
          },
          directives: [],
          loc: { start: 2431, end: 2446 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "cartId",
            loc: { start: 2449, end: 2455 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2457, end: 2463 },
              },
              loc: { start: 2457, end: 2463 },
            },
            loc: { start: 2457, end: 2464 },
          },
          directives: [],
          loc: { start: 2449, end: 2464 },
        },
      ],
      loc: { start: 2379, end: 2466 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 2479, end: 2484 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 2489, end: 2496 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2497, end: 2499 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2501, end: 2503 },
                  },
                  loc: { start: 2501, end: 2503 },
                },
                loc: { start: 2501, end: 2504 },
              },
              directives: [],
              loc: { start: 2497, end: 2504 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 2507, end: 2514 },
            },
            loc: { start: 2507, end: 2514 },
          },
          directives: [],
          loc: { start: 2489, end: 2514 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 2517, end: 2525 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 2528, end: 2535 },
              },
              loc: { start: 2528, end: 2535 },
            },
            loc: { start: 2527, end: 2536 },
          },
          directives: [],
          loc: { start: 2517, end: 2536 },
        },
      ],
      loc: { start: 2467, end: 2538 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 2545, end: 2552 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2557, end: 2559 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2561, end: 2563 },
              },
              loc: { start: 2561, end: 2563 },
            },
            loc: { start: 2561, end: 2564 },
          },
          directives: [],
          loc: { start: 2557, end: 2564 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2567, end: 2571 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2573, end: 2579 },
              },
              loc: { start: 2573, end: 2579 },
            },
            loc: { start: 2573, end: 2580 },
          },
          directives: [],
          loc: { start: 2567, end: 2580 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 2583, end: 2587 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2589, end: 2595 },
              },
              loc: { start: 2589, end: 2595 },
            },
            loc: { start: 2589, end: 2596 },
          },
          directives: [],
          loc: { start: 2583, end: 2596 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 2599, end: 2610 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2612, end: 2618 },
              },
              loc: { start: 2612, end: 2618 },
            },
            loc: { start: 2612, end: 2619 },
          },
          directives: [],
          loc: { start: 2599, end: 2619 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 2622, end: 2632 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 2635, end: 2643 },
              },
              loc: { start: 2635, end: 2643 },
            },
            loc: { start: 2634, end: 2644 },
          },
          directives: [],
          loc: { start: 2622, end: 2644 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 2647, end: 2658 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 2661, end: 2671 },
              },
              loc: { start: 2661, end: 2671 },
            },
            loc: { start: 2660, end: 2672 },
          },
          directives: [],
          loc: { start: 2647, end: 2672 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 2675, end: 2680 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2682, end: 2685 },
              },
              loc: { start: 2682, end: 2685 },
            },
            loc: { start: 2682, end: 2686 },
          },
          directives: [],
          loc: { start: 2675, end: 2686 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 2689, end: 2695 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Image",
                loc: { start: 2698, end: 2703 },
              },
              loc: { start: 2698, end: 2703 },
            },
            loc: { start: 2697, end: 2704 },
          },
          directives: [],
          loc: { start: 2689, end: 2704 },
        },
      ],
      loc: { start: 2540, end: 2706 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2713, end: 2721 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createProduct",
            loc: { start: 2726, end: 2739 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2740, end: 2745 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 2747, end: 2759 },
                  },
                  loc: { start: 2747, end: 2759 },
                },
                loc: { start: 2747, end: 2760 },
              },
              directives: [],
              loc: { start: 2740, end: 2760 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 2763, end: 2770 },
              },
              loc: { start: 2763, end: 2770 },
            },
            loc: { start: 2763, end: 2771 },
          },
          directives: [],
          loc: { start: 2726, end: 2771 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProduct",
            loc: { start: 2774, end: 2787 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2788, end: 2790 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2792, end: 2794 },
                  },
                  loc: { start: 2792, end: 2794 },
                },
                loc: { start: 2792, end: 2795 },
              },
              directives: [],
              loc: { start: 2788, end: 2795 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2797, end: 2802 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 2804, end: 2816 },
                  },
                  loc: { start: 2804, end: 2816 },
                },
                loc: { start: 2804, end: 2817 },
              },
              directives: [],
              loc: { start: 2797, end: 2817 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 2820, end: 2827 },
              },
              loc: { start: 2820, end: 2827 },
            },
            loc: { start: 2820, end: 2828 },
          },
          directives: [],
          loc: { start: 2774, end: 2828 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteProduct",
            loc: { start: 2831, end: 2844 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2845, end: 2847 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2849, end: 2851 },
                  },
                  loc: { start: 2849, end: 2851 },
                },
                loc: { start: 2849, end: 2852 },
              },
              directives: [],
              loc: { start: 2845, end: 2852 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 2855, end: 2862 },
              },
              loc: { start: 2855, end: 2862 },
            },
            loc: { start: 2855, end: 2863 },
          },
          directives: [],
          loc: { start: 2831, end: 2863 },
        },
      ],
      loc: { start: 2708, end: 2865 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductInput",
        loc: { start: 2873, end: 2885 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2890, end: 2894 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2896, end: 2902 },
              },
              loc: { start: 2896, end: 2902 },
            },
            loc: { start: 2896, end: 2903 },
          },
          directives: [],
          loc: { start: 2890, end: 2903 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 2906, end: 2917 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2919, end: 2925 },
              },
              loc: { start: 2919, end: 2925 },
            },
            loc: { start: 2919, end: 2926 },
          },
          directives: [],
          loc: { start: 2906, end: 2926 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 2929, end: 2934 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2936, end: 2939 },
              },
              loc: { start: 2936, end: 2939 },
            },
            loc: { start: 2936, end: 2940 },
          },
          directives: [],
          loc: { start: 2929, end: 2940 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "categoryIds",
            loc: { start: 2943, end: 2954 },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2957, end: 2959 },
              },
              loc: { start: 2957, end: 2959 },
            },
            loc: { start: 2956, end: 2960 },
          },
          directives: [],
          loc: { start: 2943, end: 2960 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "collectionIds",
            loc: { start: 2963, end: 2976 },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2979, end: 2981 },
              },
              loc: { start: 2979, end: 2981 },
            },
            loc: { start: 2978, end: 2982 },
          },
          directives: [],
          loc: { start: 2963, end: 2982 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "imageIds",
            loc: { start: 2985, end: 2993 },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2996, end: 2998 },
              },
              loc: { start: 2996, end: 2998 },
            },
            loc: { start: 2995, end: 2999 },
          },
          directives: [],
          loc: { start: 2985, end: 2999 },
        },
      ],
      loc: { start: 2867, end: 3001 },
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
              loc: { start: 3020, end: 3025 },
            },
            loc: { start: 3020, end: 3025 },
          },
          loc: { start: 3013, end: 3025 },
        },
      ],
      loc: { start: 3002, end: 3027 },
    },
  ],
  loc: { start: 0, end: 3028 },
} as unknown as DocumentNode;
