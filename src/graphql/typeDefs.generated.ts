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
            value: "slug",
            loc: { start: 1089, end: 1093 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1095, end: 1101 },
              },
              loc: { start: 1095, end: 1101 },
            },
            loc: { start: 1095, end: 1102 },
          },
          directives: [],
          loc: { start: 1089, end: 1102 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1105, end: 1116 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1118, end: 1124 },
              },
              loc: { start: 1118, end: 1124 },
            },
            loc: { start: 1118, end: 1125 },
          },
          directives: [],
          loc: { start: 1105, end: 1125 },
        },
      ],
      loc: { start: 1049, end: 1127 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 1140, end: 1145 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collection",
            loc: { start: 1150, end: 1160 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1161, end: 1163 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1165, end: 1167 },
                  },
                  loc: { start: 1165, end: 1167 },
                },
                loc: { start: 1165, end: 1168 },
              },
              directives: [],
              loc: { start: 1161, end: 1168 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 1171, end: 1181 },
            },
            loc: { start: 1171, end: 1181 },
          },
          directives: [],
          loc: { start: 1150, end: 1181 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 1184, end: 1195 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 1198, end: 1208 },
              },
              loc: { start: 1198, end: 1208 },
            },
            loc: { start: 1197, end: 1209 },
          },
          directives: [],
          loc: { start: 1184, end: 1209 },
        },
      ],
      loc: { start: 1128, end: 1211 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1218, end: 1226 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createCollection",
            loc: { start: 1231, end: 1247 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1248, end: 1253 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CollectionInput",
                    loc: { start: 1255, end: 1270 },
                  },
                  loc: { start: 1255, end: 1270 },
                },
                loc: { start: 1255, end: 1271 },
              },
              directives: [],
              loc: { start: 1248, end: 1271 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 1274, end: 1284 },
              },
              loc: { start: 1274, end: 1284 },
            },
            loc: { start: 1274, end: 1285 },
          },
          directives: [],
          loc: { start: 1231, end: 1285 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateCollection",
            loc: { start: 1288, end: 1304 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1305, end: 1307 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1309, end: 1311 },
                  },
                  loc: { start: 1309, end: 1311 },
                },
                loc: { start: 1309, end: 1312 },
              },
              directives: [],
              loc: { start: 1305, end: 1312 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1314, end: 1319 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CollectionInput",
                    loc: { start: 1321, end: 1336 },
                  },
                  loc: { start: 1321, end: 1336 },
                },
                loc: { start: 1321, end: 1337 },
              },
              directives: [],
              loc: { start: 1314, end: 1337 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 1340, end: 1350 },
              },
              loc: { start: 1340, end: 1350 },
            },
            loc: { start: 1340, end: 1351 },
          },
          directives: [],
          loc: { start: 1288, end: 1351 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteCollection",
            loc: { start: 1354, end: 1370 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1371, end: 1373 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1375, end: 1377 },
                  },
                  loc: { start: 1375, end: 1377 },
                },
                loc: { start: 1375, end: 1378 },
              },
              directives: [],
              loc: { start: 1371, end: 1378 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 1381, end: 1391 },
              },
              loc: { start: 1381, end: 1391 },
            },
            loc: { start: 1381, end: 1392 },
          },
          directives: [],
          loc: { start: 1354, end: 1392 },
        },
      ],
      loc: { start: 1213, end: 1394 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Collection",
        loc: { start: 1401, end: 1411 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1416, end: 1418 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1420, end: 1422 },
              },
              loc: { start: 1420, end: 1422 },
            },
            loc: { start: 1420, end: 1423 },
          },
          directives: [],
          loc: { start: 1416, end: 1423 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
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
            value: "slug",
            loc: { start: 1442, end: 1446 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1448, end: 1454 },
              },
              loc: { start: 1448, end: 1454 },
            },
            loc: { start: 1448, end: 1455 },
          },
          directives: [],
          loc: { start: 1442, end: 1455 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1458, end: 1469 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1471, end: 1477 },
              },
              loc: { start: 1471, end: 1477 },
            },
            loc: { start: 1471, end: 1478 },
          },
          directives: [],
          loc: { start: 1458, end: 1478 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 1481, end: 1489 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 1492, end: 1499 },
              },
              loc: { start: 1492, end: 1499 },
            },
            loc: { start: 1491, end: 1500 },
          },
          directives: [],
          loc: { start: 1481, end: 1500 },
        },
      ],
      loc: { start: 1396, end: 1502 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CollectionInput",
        loc: { start: 1510, end: 1525 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1530, end: 1534 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1536, end: 1542 },
              },
              loc: { start: 1536, end: 1542 },
            },
            loc: { start: 1536, end: 1543 },
          },
          directives: [],
          loc: { start: 1530, end: 1543 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1546, end: 1550 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1552, end: 1558 },
              },
              loc: { start: 1552, end: 1558 },
            },
            loc: { start: 1552, end: 1559 },
          },
          directives: [],
          loc: { start: 1546, end: 1559 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1562, end: 1573 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1575, end: 1581 },
              },
              loc: { start: 1575, end: 1581 },
            },
            loc: { start: 1575, end: 1582 },
          },
          directives: [],
          loc: { start: 1562, end: 1582 },
        },
      ],
      loc: { start: 1504, end: 1584 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1590, end: 1595 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 1600, end: 1606 },
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
                    value: "Images",
                    loc: { start: 1609, end: 1615 },
                  },
                  loc: { start: 1609, end: 1615 },
                },
                loc: { start: 1609, end: 1616 },
              },
              loc: { start: 1608, end: 1617 },
            },
            loc: { start: 1608, end: 1618 },
          },
          directives: [],
          loc: { start: 1600, end: 1618 },
        },
      ],
      loc: { start: 1585, end: 1620 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1627, end: 1635 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createImage",
            loc: { start: 1640, end: 1651 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1652, end: 1657 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ImageInput",
                    loc: { start: 1659, end: 1669 },
                  },
                  loc: { start: 1659, end: 1669 },
                },
                loc: { start: 1659, end: 1670 },
              },
              directives: [],
              loc: { start: 1652, end: 1670 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Images",
                loc: { start: 1673, end: 1679 },
              },
              loc: { start: 1673, end: 1679 },
            },
            loc: { start: 1673, end: 1680 },
          },
          directives: [],
          loc: { start: 1640, end: 1680 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateImage",
            loc: { start: 1683, end: 1694 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1695, end: 1697 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1699, end: 1701 },
                  },
                  loc: { start: 1699, end: 1701 },
                },
                loc: { start: 1699, end: 1702 },
              },
              directives: [],
              loc: { start: 1695, end: 1702 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1704, end: 1709 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ImageInput",
                    loc: { start: 1711, end: 1721 },
                  },
                  loc: { start: 1711, end: 1721 },
                },
                loc: { start: 1711, end: 1722 },
              },
              directives: [],
              loc: { start: 1704, end: 1722 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Images",
                loc: { start: 1725, end: 1731 },
              },
              loc: { start: 1725, end: 1731 },
            },
            loc: { start: 1725, end: 1732 },
          },
          directives: [],
          loc: { start: 1683, end: 1732 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteImage",
            loc: { start: 1735, end: 1746 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1747, end: 1749 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1751, end: 1753 },
                  },
                  loc: { start: 1751, end: 1753 },
                },
                loc: { start: 1751, end: 1754 },
              },
              directives: [],
              loc: { start: 1747, end: 1754 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Images",
                loc: { start: 1757, end: 1763 },
              },
              loc: { start: 1757, end: 1763 },
            },
            loc: { start: 1757, end: 1764 },
          },
          directives: [],
          loc: { start: 1735, end: 1764 },
        },
      ],
      loc: { start: 1622, end: 1766 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Images", loc: { start: 1773, end: 1779 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 1784, end: 1787 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1789, end: 1795 },
              },
              loc: { start: 1789, end: 1795 },
            },
            loc: { start: 1789, end: 1796 },
          },
          directives: [],
          loc: { start: 1784, end: 1796 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "alt", loc: { start: 1799, end: 1802 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1804, end: 1810 },
              },
              loc: { start: 1804, end: 1810 },
            },
            loc: { start: 1804, end: 1811 },
          },
          directives: [],
          loc: { start: 1799, end: 1811 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 1814, end: 1819 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1821, end: 1824 },
              },
              loc: { start: 1821, end: 1824 },
            },
            loc: { start: 1821, end: 1825 },
          },
          directives: [],
          loc: { start: 1814, end: 1825 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 1828, end: 1834 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1836, end: 1839 },
              },
              loc: { start: 1836, end: 1839 },
            },
            loc: { start: 1836, end: 1840 },
          },
          directives: [],
          loc: { start: 1828, end: 1840 },
        },
      ],
      loc: { start: 1768, end: 1842 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ImageInput",
        loc: { start: 1850, end: 1860 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "url", loc: { start: 1865, end: 1868 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1870, end: 1876 },
              },
              loc: { start: 1870, end: 1876 },
            },
            loc: { start: 1870, end: 1877 },
          },
          directives: [],
          loc: { start: 1865, end: 1877 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "alt", loc: { start: 1880, end: 1883 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1885, end: 1891 },
              },
              loc: { start: 1885, end: 1891 },
            },
            loc: { start: 1885, end: 1892 },
          },
          directives: [],
          loc: { start: 1880, end: 1892 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 1895, end: 1900 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1902, end: 1905 },
              },
              loc: { start: 1902, end: 1905 },
            },
            loc: { start: 1902, end: 1906 },
          },
          directives: [],
          loc: { start: 1895, end: 1906 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 1909, end: 1915 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1917, end: 1920 },
              },
              loc: { start: 1917, end: 1920 },
            },
            loc: { start: 1917, end: 1921 },
          },
          directives: [],
          loc: { start: 1909, end: 1921 },
        },
      ],
      loc: { start: 1844, end: 1923 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1929, end: 1934 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "order",
            loc: { start: 1939, end: 1944 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1945, end: 1947 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1949, end: 1951 },
                  },
                  loc: { start: 1949, end: 1951 },
                },
                loc: { start: 1949, end: 1952 },
              },
              directives: [],
              loc: { start: 1945, end: 1952 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 1955, end: 1960 },
            },
            loc: { start: 1955, end: 1960 },
          },
          directives: [],
          loc: { start: 1939, end: 1960 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orders",
            loc: { start: 1963, end: 1969 },
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
                    loc: { start: 1972, end: 1977 },
                  },
                  loc: { start: 1972, end: 1977 },
                },
                loc: { start: 1972, end: 1978 },
              },
              loc: { start: 1971, end: 1979 },
            },
            loc: { start: 1971, end: 1980 },
          },
          directives: [],
          loc: { start: 1963, end: 1980 },
        },
      ],
      loc: { start: 1924, end: 1982 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 1989, end: 1997 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrder",
            loc: { start: 2002, end: 2013 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2014, end: 2019 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "OrderInput",
                    loc: { start: 2021, end: 2031 },
                  },
                  loc: { start: 2021, end: 2031 },
                },
                loc: { start: 2021, end: 2032 },
              },
              directives: [],
              loc: { start: 2014, end: 2032 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Order",
                loc: { start: 2035, end: 2040 },
              },
              loc: { start: 2035, end: 2040 },
            },
            loc: { start: 2035, end: 2041 },
          },
          directives: [],
          loc: { start: 2002, end: 2041 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrder",
            loc: { start: 2044, end: 2055 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2056, end: 2058 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2060, end: 2062 },
                  },
                  loc: { start: 2060, end: 2062 },
                },
                loc: { start: 2060, end: 2063 },
              },
              directives: [],
              loc: { start: 2056, end: 2063 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2065, end: 2070 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "OrderInput",
                    loc: { start: 2072, end: 2082 },
                  },
                  loc: { start: 2072, end: 2082 },
                },
                loc: { start: 2072, end: 2083 },
              },
              directives: [],
              loc: { start: 2065, end: 2083 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Order",
                loc: { start: 2086, end: 2091 },
              },
              loc: { start: 2086, end: 2091 },
            },
            loc: { start: 2086, end: 2092 },
          },
          directives: [],
          loc: { start: 2044, end: 2092 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrder",
            loc: { start: 2095, end: 2106 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2107, end: 2109 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2111, end: 2113 },
                  },
                  loc: { start: 2111, end: 2113 },
                },
                loc: { start: 2111, end: 2114 },
              },
              directives: [],
              loc: { start: 2107, end: 2114 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Order",
                loc: { start: 2117, end: 2122 },
              },
              loc: { start: 2117, end: 2122 },
            },
            loc: { start: 2117, end: 2123 },
          },
          directives: [],
          loc: { start: 2095, end: 2123 },
        },
      ],
      loc: { start: 1984, end: 2125 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "OrderStatus",
        loc: { start: 2132, end: 2143 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CREATED",
            loc: { start: 2148, end: 2155 },
          },
          directives: [],
          loc: { start: 2148, end: 2155 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PROCESSING",
            loc: { start: 2158, end: 2168 },
          },
          directives: [],
          loc: { start: 2158, end: 2168 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PAID",
            loc: { start: 2171, end: 2175 },
          },
          directives: [],
          loc: { start: 2171, end: 2175 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "COMPLETED",
            loc: { start: 2178, end: 2187 },
          },
          directives: [],
          loc: { start: 2178, end: 2187 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CANCELLED",
            loc: { start: 2190, end: 2199 },
          },
          directives: [],
          loc: { start: 2190, end: 2199 },
        },
      ],
      loc: { start: 2127, end: 2201 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Order", loc: { start: 2208, end: 2213 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2218, end: 2220 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2222, end: 2228 },
              },
              loc: { start: 2222, end: 2228 },
            },
            loc: { start: 2222, end: 2229 },
          },
          directives: [],
          loc: { start: 2218, end: 2229 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2232, end: 2241 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2243, end: 2249 },
              },
              loc: { start: 2243, end: 2249 },
            },
            loc: { start: 2243, end: 2250 },
          },
          directives: [],
          loc: { start: 2232, end: 2250 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 2253, end: 2262 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2264, end: 2270 },
              },
              loc: { start: 2264, end: 2270 },
            },
            loc: { start: 2264, end: 2271 },
          },
          directives: [],
          loc: { start: 2253, end: 2271 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 2274, end: 2279 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2281, end: 2287 },
              },
              loc: { start: 2281, end: 2287 },
            },
            loc: { start: 2281, end: 2288 },
          },
          directives: [],
          loc: { start: 2274, end: 2288 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "total",
            loc: { start: 2291, end: 2296 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2298, end: 2301 },
              },
              loc: { start: 2298, end: 2301 },
            },
            loc: { start: 2298, end: 2302 },
          },
          directives: [],
          loc: { start: 2291, end: 2302 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 2305, end: 2311 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2313, end: 2319 },
              },
              loc: { start: 2313, end: 2319 },
            },
            loc: { start: 2313, end: 2320 },
          },
          directives: [],
          loc: { start: 2305, end: 2320 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "items",
            loc: { start: 2323, end: 2328 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "String",
              loc: { start: 2330, end: 2336 },
            },
            loc: { start: 2330, end: 2336 },
          },
          directives: [],
          loc: { start: 2323, end: 2336 },
        },
      ],
      loc: { start: 2203, end: 2338 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "OrderInput",
        loc: { start: 2346, end: 2356 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 2361, end: 2366 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2368, end: 2374 },
              },
              loc: { start: 2368, end: 2374 },
            },
            loc: { start: 2368, end: 2375 },
          },
          directives: [],
          loc: { start: 2361, end: 2375 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "total",
            loc: { start: 2378, end: 2383 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2385, end: 2388 },
              },
              loc: { start: 2385, end: 2388 },
            },
            loc: { start: 2385, end: 2389 },
          },
          directives: [],
          loc: { start: 2378, end: 2389 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 2392, end: 2398 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2400, end: 2406 },
              },
              loc: { start: 2400, end: 2406 },
            },
            loc: { start: 2400, end: 2407 },
          },
          directives: [],
          loc: { start: 2392, end: 2407 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "cartId",
            loc: { start: 2410, end: 2416 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2418, end: 2424 },
              },
              loc: { start: 2418, end: 2424 },
            },
            loc: { start: 2418, end: 2425 },
          },
          directives: [],
          loc: { start: 2410, end: 2425 },
        },
      ],
      loc: { start: 2340, end: 2427 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 2440, end: 2445 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 2450, end: 2457 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2458, end: 2460 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2462, end: 2464 },
                  },
                  loc: { start: 2462, end: 2464 },
                },
                loc: { start: 2462, end: 2465 },
              },
              directives: [],
              loc: { start: 2458, end: 2465 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 2468, end: 2475 },
            },
            loc: { start: 2468, end: 2475 },
          },
          directives: [],
          loc: { start: 2450, end: 2475 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 2478, end: 2486 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 2489, end: 2496 },
              },
              loc: { start: 2489, end: 2496 },
            },
            loc: { start: 2488, end: 2497 },
          },
          directives: [],
          loc: { start: 2478, end: 2497 },
        },
      ],
      loc: { start: 2428, end: 2499 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 2506, end: 2513 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 2518, end: 2520 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2522, end: 2524 },
              },
              loc: { start: 2522, end: 2524 },
            },
            loc: { start: 2522, end: 2525 },
          },
          directives: [],
          loc: { start: 2518, end: 2525 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2528, end: 2532 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2534, end: 2540 },
              },
              loc: { start: 2534, end: 2540 },
            },
            loc: { start: 2534, end: 2541 },
          },
          directives: [],
          loc: { start: 2528, end: 2541 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 2544, end: 2548 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2550, end: 2556 },
              },
              loc: { start: 2550, end: 2556 },
            },
            loc: { start: 2550, end: 2557 },
          },
          directives: [],
          loc: { start: 2544, end: 2557 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 2560, end: 2571 },
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
          loc: { start: 2560, end: 2580 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 2583, end: 2593 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 2596, end: 2604 },
              },
              loc: { start: 2596, end: 2604 },
            },
            loc: { start: 2595, end: 2605 },
          },
          directives: [],
          loc: { start: 2583, end: 2605 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 2608, end: 2619 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 2622, end: 2632 },
              },
              loc: { start: 2622, end: 2632 },
            },
            loc: { start: 2621, end: 2633 },
          },
          directives: [],
          loc: { start: 2608, end: 2633 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 2636, end: 2641 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2643, end: 2646 },
              },
              loc: { start: 2643, end: 2646 },
            },
            loc: { start: 2643, end: 2647 },
          },
          directives: [],
          loc: { start: 2636, end: 2647 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 2650, end: 2656 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Images",
                loc: { start: 2659, end: 2665 },
              },
              loc: { start: 2659, end: 2665 },
            },
            loc: { start: 2658, end: 2666 },
          },
          directives: [],
          loc: { start: 2650, end: 2666 },
        },
      ],
      loc: { start: 2501, end: 2668 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2675, end: 2683 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createProduct",
            loc: { start: 2688, end: 2701 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2702, end: 2707 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 2709, end: 2721 },
                  },
                  loc: { start: 2709, end: 2721 },
                },
                loc: { start: 2709, end: 2722 },
              },
              directives: [],
              loc: { start: 2702, end: 2722 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 2725, end: 2732 },
              },
              loc: { start: 2725, end: 2732 },
            },
            loc: { start: 2725, end: 2733 },
          },
          directives: [],
          loc: { start: 2688, end: 2733 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProduct",
            loc: { start: 2736, end: 2749 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2750, end: 2752 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2754, end: 2756 },
                  },
                  loc: { start: 2754, end: 2756 },
                },
                loc: { start: 2754, end: 2757 },
              },
              directives: [],
              loc: { start: 2750, end: 2757 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2759, end: 2764 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 2766, end: 2778 },
                  },
                  loc: { start: 2766, end: 2778 },
                },
                loc: { start: 2766, end: 2779 },
              },
              directives: [],
              loc: { start: 2759, end: 2779 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 2782, end: 2789 },
              },
              loc: { start: 2782, end: 2789 },
            },
            loc: { start: 2782, end: 2790 },
          },
          directives: [],
          loc: { start: 2736, end: 2790 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteProduct",
            loc: { start: 2793, end: 2806 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2807, end: 2809 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2811, end: 2813 },
                  },
                  loc: { start: 2811, end: 2813 },
                },
                loc: { start: 2811, end: 2814 },
              },
              directives: [],
              loc: { start: 2807, end: 2814 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 2817, end: 2824 },
              },
              loc: { start: 2817, end: 2824 },
            },
            loc: { start: 2817, end: 2825 },
          },
          directives: [],
          loc: { start: 2793, end: 2825 },
        },
      ],
      loc: { start: 2670, end: 2827 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductInput",
        loc: { start: 2835, end: 2847 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 2852, end: 2856 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2858, end: 2864 },
              },
              loc: { start: 2858, end: 2864 },
            },
            loc: { start: 2858, end: 2865 },
          },
          directives: [],
          loc: { start: 2852, end: 2865 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 2868, end: 2872 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2874, end: 2880 },
              },
              loc: { start: 2874, end: 2880 },
            },
            loc: { start: 2874, end: 2881 },
          },
          directives: [],
          loc: { start: 2868, end: 2881 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 2884, end: 2895 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2897, end: 2903 },
              },
              loc: { start: 2897, end: 2903 },
            },
            loc: { start: 2897, end: 2904 },
          },
          directives: [],
          loc: { start: 2884, end: 2904 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 2907, end: 2912 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2914, end: 2917 },
              },
              loc: { start: 2914, end: 2917 },
            },
            loc: { start: 2914, end: 2918 },
          },
          directives: [],
          loc: { start: 2907, end: 2918 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "categoryIds",
            loc: { start: 2921, end: 2932 },
          },
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
                    value: "ID",
                    loc: { start: 2935, end: 2937 },
                  },
                  loc: { start: 2935, end: 2937 },
                },
                loc: { start: 2935, end: 2938 },
              },
              loc: { start: 2934, end: 2939 },
            },
            loc: { start: 2934, end: 2940 },
          },
          directives: [],
          loc: { start: 2921, end: 2940 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "collectionIds",
            loc: { start: 2943, end: 2956 },
          },
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
                    value: "ID",
                    loc: { start: 2959, end: 2961 },
                  },
                  loc: { start: 2959, end: 2961 },
                },
                loc: { start: 2959, end: 2962 },
              },
              loc: { start: 2958, end: 2963 },
            },
            loc: { start: 2958, end: 2964 },
          },
          directives: [],
          loc: { start: 2943, end: 2964 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 2967, end: 2973 },
          },
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
                    value: "ImageInput",
                    loc: { start: 2976, end: 2986 },
                  },
                  loc: { start: 2976, end: 2986 },
                },
                loc: { start: 2976, end: 2987 },
              },
              loc: { start: 2975, end: 2988 },
            },
            loc: { start: 2975, end: 2989 },
          },
          directives: [],
          loc: { start: 2967, end: 2989 },
        },
      ],
      loc: { start: 2829, end: 2991 },
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
              loc: { start: 3010, end: 3015 },
            },
            loc: { start: 3010, end: 3015 },
          },
          loc: { start: 3003, end: 3015 },
        },
      ],
      loc: { start: 2992, end: 3017 },
    },
  ],
  loc: { start: 0, end: 3018 },
} as unknown as DocumentNode;
