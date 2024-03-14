import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collection",
            loc: { start: 22, end: 32 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 33, end: 35 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 37, end: 39 },
                  },
                  loc: { start: 37, end: 39 },
                },
                loc: { start: 37, end: 40 },
              },
              directives: [],
              loc: { start: 33, end: 40 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Collection",
              loc: { start: 43, end: 53 },
            },
            loc: { start: 43, end: 53 },
          },
          directives: [],
          loc: { start: 22, end: 53 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 56, end: 67 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 70, end: 80 },
              },
              loc: { start: 70, end: 80 },
            },
            loc: { start: 69, end: 81 },
          },
          directives: [],
          loc: { start: 56, end: 81 },
        },
      ],
      loc: { start: 0, end: 83 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Collection", loc: { start: 90, end: 100 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 105, end: 107 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 109, end: 111 },
              },
              loc: { start: 109, end: 111 },
            },
            loc: { start: 109, end: 112 },
          },
          directives: [],
          loc: { start: 105, end: 112 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 115, end: 119 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 121, end: 127 },
              },
              loc: { start: 121, end: 127 },
            },
            loc: { start: 121, end: 128 },
          },
          directives: [],
          loc: { start: 115, end: 128 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 131, end: 135 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 137, end: 143 },
              },
              loc: { start: 137, end: 143 },
            },
            loc: { start: 137, end: 144 },
          },
          directives: [],
          loc: { start: 131, end: 144 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 147, end: 158 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 160, end: 166 },
              },
              loc: { start: 160, end: 166 },
            },
            loc: { start: 160, end: 167 },
          },
          directives: [],
          loc: { start: 147, end: 167 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 170, end: 178 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 181, end: 188 },
              },
              loc: { start: 181, end: 188 },
            },
            loc: { start: 180, end: 189 },
          },
          directives: [],
          loc: { start: 170, end: 189 },
        },
      ],
      loc: { start: 85, end: 191 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 205, end: 210 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 215, end: 223 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 224, end: 226 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 228, end: 230 },
                  },
                  loc: { start: 228, end: 230 },
                },
                loc: { start: 228, end: 231 },
              },
              directives: [],
              loc: { start: 224, end: 231 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Category",
              loc: { start: 234, end: 242 },
            },
            loc: { start: 234, end: 242 },
          },
          directives: [],
          loc: { start: 215, end: 242 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 245, end: 255 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 258, end: 266 },
              },
              loc: { start: 258, end: 266 },
            },
            loc: { start: 257, end: 267 },
          },
          directives: [],
          loc: { start: 245, end: 267 },
        },
      ],
      loc: { start: 193, end: 269 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Category", loc: { start: 276, end: 284 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 289, end: 291 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 293, end: 295 },
              },
              loc: { start: 293, end: 295 },
            },
            loc: { start: 293, end: 296 },
          },
          directives: [],
          loc: { start: 289, end: 296 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 299, end: 303 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 305, end: 311 },
              },
              loc: { start: 305, end: 311 },
            },
            loc: { start: 305, end: 312 },
          },
          directives: [],
          loc: { start: 299, end: 312 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 315, end: 319 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 321, end: 327 },
              },
              loc: { start: 321, end: 327 },
            },
            loc: { start: 321, end: 328 },
          },
          directives: [],
          loc: { start: 315, end: 328 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 331, end: 342 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 344, end: 350 },
              },
              loc: { start: 344, end: 350 },
            },
            loc: { start: 344, end: 351 },
          },
          directives: [],
          loc: { start: 331, end: 351 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 354, end: 362 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 365, end: 372 },
              },
              loc: { start: 365, end: 372 },
            },
            loc: { start: 364, end: 373 },
          },
          directives: [],
          loc: { start: 354, end: 373 },
        },
      ],
      loc: { start: 271, end: 375 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 389, end: 394 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 399, end: 406 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 407, end: 409 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 411, end: 413 },
                  },
                  loc: { start: 411, end: 413 },
                },
                loc: { start: 411, end: 414 },
              },
              directives: [],
              loc: { start: 407, end: 414 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 417, end: 424 },
            },
            loc: { start: 417, end: 424 },
          },
          directives: [],
          loc: { start: 399, end: 424 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 427, end: 435 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 438, end: 445 },
              },
              loc: { start: 438, end: 445 },
            },
            loc: { start: 437, end: 446 },
          },
          directives: [],
          loc: { start: 427, end: 446 },
        },
      ],
      loc: { start: 377, end: 448 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Images", loc: { start: 455, end: 461 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 466, end: 469 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 471, end: 477 },
              },
              loc: { start: 471, end: 477 },
            },
            loc: { start: 471, end: 478 },
          },
          directives: [],
          loc: { start: 466, end: 478 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "alt", loc: { start: 481, end: 484 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 486, end: 492 },
              },
              loc: { start: 486, end: 492 },
            },
            loc: { start: 486, end: 493 },
          },
          directives: [],
          loc: { start: 481, end: 493 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "width", loc: { start: 496, end: 501 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 503, end: 506 },
              },
              loc: { start: 503, end: 506 },
            },
            loc: { start: 503, end: 507 },
          },
          directives: [],
          loc: { start: 496, end: 507 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 510, end: 516 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 518, end: 521 },
              },
              loc: { start: 518, end: 521 },
            },
            loc: { start: 518, end: 522 },
          },
          directives: [],
          loc: { start: 510, end: 522 },
        },
      ],
      loc: { start: 450, end: 524 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 531, end: 538 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 543, end: 545 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 547, end: 549 },
              },
              loc: { start: 547, end: 549 },
            },
            loc: { start: 547, end: 550 },
          },
          directives: [],
          loc: { start: 543, end: 550 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 553, end: 557 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 559, end: 565 },
              },
              loc: { start: 559, end: 565 },
            },
            loc: { start: 559, end: 566 },
          },
          directives: [],
          loc: { start: 553, end: 566 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 569, end: 573 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 575, end: 581 },
              },
              loc: { start: 575, end: 581 },
            },
            loc: { start: 575, end: 582 },
          },
          directives: [],
          loc: { start: 569, end: 582 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 585, end: 596 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 598, end: 604 },
              },
              loc: { start: 598, end: 604 },
            },
            loc: { start: 598, end: 605 },
          },
          directives: [],
          loc: { start: 585, end: 605 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "categories",
            loc: { start: 608, end: 618 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 621, end: 629 },
              },
              loc: { start: 621, end: 629 },
            },
            loc: { start: 620, end: 630 },
          },
          directives: [],
          loc: { start: 608, end: 630 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "collections",
            loc: { start: 633, end: 644 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 647, end: 657 },
              },
              loc: { start: 647, end: 657 },
            },
            loc: { start: 646, end: 658 },
          },
          directives: [],
          loc: { start: 633, end: 658 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 661, end: 666 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 668, end: 671 },
              },
              loc: { start: 668, end: 671 },
            },
            loc: { start: 668, end: 672 },
          },
          directives: [],
          loc: { start: 661, end: 672 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 675, end: 681 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Images",
                loc: { start: 684, end: 690 },
              },
              loc: { start: 684, end: 690 },
            },
            loc: { start: 683, end: 691 },
          },
          directives: [],
          loc: { start: 675, end: 691 },
        },
      ],
      loc: { start: 526, end: 693 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 700, end: 708 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createCollection",
            loc: { start: 713, end: 729 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 730, end: 735 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CollectionInput",
                    loc: { start: 737, end: 752 },
                  },
                  loc: { start: 737, end: 752 },
                },
                loc: { start: 737, end: 753 },
              },
              directives: [],
              loc: { start: 730, end: 753 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 756, end: 766 },
              },
              loc: { start: 756, end: 766 },
            },
            loc: { start: 756, end: 767 },
          },
          directives: [],
          loc: { start: 713, end: 767 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateCollection",
            loc: { start: 770, end: 786 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 787, end: 789 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 791, end: 793 },
                  },
                  loc: { start: 791, end: 793 },
                },
                loc: { start: 791, end: 794 },
              },
              directives: [],
              loc: { start: 787, end: 794 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 796, end: 801 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CollectionInput",
                    loc: { start: 803, end: 818 },
                  },
                  loc: { start: 803, end: 818 },
                },
                loc: { start: 803, end: 819 },
              },
              directives: [],
              loc: { start: 796, end: 819 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 822, end: 832 },
              },
              loc: { start: 822, end: 832 },
            },
            loc: { start: 822, end: 833 },
          },
          directives: [],
          loc: { start: 770, end: 833 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteCollection",
            loc: { start: 836, end: 852 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 853, end: 855 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 857, end: 859 },
                  },
                  loc: { start: 857, end: 859 },
                },
                loc: { start: 857, end: 860 },
              },
              directives: [],
              loc: { start: 853, end: 860 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Collection",
                loc: { start: 863, end: 873 },
              },
              loc: { start: 863, end: 873 },
            },
            loc: { start: 863, end: 874 },
          },
          directives: [],
          loc: { start: 836, end: 874 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createCategory",
            loc: { start: 877, end: 891 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 892, end: 897 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CategoryInput",
                    loc: { start: 899, end: 912 },
                  },
                  loc: { start: 899, end: 912 },
                },
                loc: { start: 899, end: 913 },
              },
              directives: [],
              loc: { start: 892, end: 913 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 916, end: 924 },
              },
              loc: { start: 916, end: 924 },
            },
            loc: { start: 916, end: 925 },
          },
          directives: [],
          loc: { start: 877, end: 925 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateCategory",
            loc: { start: 928, end: 942 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 943, end: 945 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 947, end: 949 },
                  },
                  loc: { start: 947, end: 949 },
                },
                loc: { start: 947, end: 950 },
              },
              directives: [],
              loc: { start: 943, end: 950 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 952, end: 957 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CategoryInput",
                    loc: { start: 959, end: 972 },
                  },
                  loc: { start: 959, end: 972 },
                },
                loc: { start: 959, end: 973 },
              },
              directives: [],
              loc: { start: 952, end: 973 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 976, end: 984 },
              },
              loc: { start: 976, end: 984 },
            },
            loc: { start: 976, end: 985 },
          },
          directives: [],
          loc: { start: 928, end: 985 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteCategory",
            loc: { start: 988, end: 1002 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1003, end: 1005 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1007, end: 1009 },
                  },
                  loc: { start: 1007, end: 1009 },
                },
                loc: { start: 1007, end: 1010 },
              },
              directives: [],
              loc: { start: 1003, end: 1010 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Category",
                loc: { start: 1013, end: 1021 },
              },
              loc: { start: 1013, end: 1021 },
            },
            loc: { start: 1013, end: 1022 },
          },
          directives: [],
          loc: { start: 988, end: 1022 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createProduct",
            loc: { start: 1025, end: 1038 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1039, end: 1044 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1046, end: 1058 },
                  },
                  loc: { start: 1046, end: 1058 },
                },
                loc: { start: 1046, end: 1059 },
              },
              directives: [],
              loc: { start: 1039, end: 1059 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 1062, end: 1069 },
              },
              loc: { start: 1062, end: 1069 },
            },
            loc: { start: 1062, end: 1070 },
          },
          directives: [],
          loc: { start: 1025, end: 1070 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateProduct",
            loc: { start: 1073, end: 1086 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1087, end: 1089 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1091, end: 1093 },
                  },
                  loc: { start: 1091, end: 1093 },
                },
                loc: { start: 1091, end: 1094 },
              },
              directives: [],
              loc: { start: 1087, end: 1094 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 1096, end: 1101 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ProductInput",
                    loc: { start: 1103, end: 1115 },
                  },
                  loc: { start: 1103, end: 1115 },
                },
                loc: { start: 1103, end: 1116 },
              },
              directives: [],
              loc: { start: 1096, end: 1116 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 1119, end: 1126 },
              },
              loc: { start: 1119, end: 1126 },
            },
            loc: { start: 1119, end: 1127 },
          },
          directives: [],
          loc: { start: 1073, end: 1127 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteProduct",
            loc: { start: 1130, end: 1143 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1144, end: 1146 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1148, end: 1150 },
                  },
                  loc: { start: 1148, end: 1150 },
                },
                loc: { start: 1148, end: 1151 },
              },
              directives: [],
              loc: { start: 1144, end: 1151 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 1154, end: 1161 },
              },
              loc: { start: 1154, end: 1161 },
            },
            loc: { start: 1154, end: 1162 },
          },
          directives: [],
          loc: { start: 1130, end: 1162 },
        },
      ],
      loc: { start: 695, end: 1164 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CollectionInput",
        loc: { start: 1172, end: 1187 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1192, end: 1196 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1198, end: 1204 },
              },
              loc: { start: 1198, end: 1204 },
            },
            loc: { start: 1198, end: 1205 },
          },
          directives: [],
          loc: { start: 1192, end: 1205 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1208, end: 1212 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1214, end: 1220 },
              },
              loc: { start: 1214, end: 1220 },
            },
            loc: { start: 1214, end: 1221 },
          },
          directives: [],
          loc: { start: 1208, end: 1221 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1224, end: 1235 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1237, end: 1243 },
              },
              loc: { start: 1237, end: 1243 },
            },
            loc: { start: 1237, end: 1244 },
          },
          directives: [],
          loc: { start: 1224, end: 1244 },
        },
      ],
      loc: { start: 1166, end: 1246 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CategoryInput",
        loc: { start: 1254, end: 1267 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1272, end: 1276 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1278, end: 1284 },
              },
              loc: { start: 1278, end: 1284 },
            },
            loc: { start: 1278, end: 1285 },
          },
          directives: [],
          loc: { start: 1272, end: 1285 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1288, end: 1292 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1294, end: 1300 },
              },
              loc: { start: 1294, end: 1300 },
            },
            loc: { start: 1294, end: 1301 },
          },
          directives: [],
          loc: { start: 1288, end: 1301 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1304, end: 1315 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1317, end: 1323 },
              },
              loc: { start: 1317, end: 1323 },
            },
            loc: { start: 1317, end: 1324 },
          },
          directives: [],
          loc: { start: 1304, end: 1324 },
        },
      ],
      loc: { start: 1248, end: 1326 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ProductInput",
        loc: { start: 1334, end: 1346 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "name",
            loc: { start: 1351, end: 1355 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1357, end: 1363 },
              },
              loc: { start: 1357, end: 1363 },
            },
            loc: { start: 1357, end: 1364 },
          },
          directives: [],
          loc: { start: 1351, end: 1364 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "slug",
            loc: { start: 1367, end: 1371 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1373, end: 1379 },
              },
              loc: { start: 1373, end: 1379 },
            },
            loc: { start: 1373, end: 1380 },
          },
          directives: [],
          loc: { start: 1367, end: 1380 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 1383, end: 1394 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1396, end: 1402 },
              },
              loc: { start: 1396, end: 1402 },
            },
            loc: { start: 1396, end: 1403 },
          },
          directives: [],
          loc: { start: 1383, end: 1403 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "price",
            loc: { start: 1406, end: 1411 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1413, end: 1416 },
              },
              loc: { start: 1413, end: 1416 },
            },
            loc: { start: 1413, end: 1417 },
          },
          directives: [],
          loc: { start: 1406, end: 1417 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "categoryIds",
            loc: { start: 1420, end: 1431 },
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
                    loc: { start: 1434, end: 1436 },
                  },
                  loc: { start: 1434, end: 1436 },
                },
                loc: { start: 1434, end: 1437 },
              },
              loc: { start: 1433, end: 1438 },
            },
            loc: { start: 1433, end: 1439 },
          },
          directives: [],
          loc: { start: 1420, end: 1439 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "collectionIds",
            loc: { start: 1442, end: 1455 },
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
                    loc: { start: 1458, end: 1460 },
                  },
                  loc: { start: 1458, end: 1460 },
                },
                loc: { start: 1458, end: 1461 },
              },
              loc: { start: 1457, end: 1462 },
            },
            loc: { start: 1457, end: 1463 },
          },
          directives: [],
          loc: { start: 1442, end: 1463 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 1466, end: 1472 },
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
                    loc: { start: 1475, end: 1485 },
                  },
                  loc: { start: 1475, end: 1485 },
                },
                loc: { start: 1475, end: 1486 },
              },
              loc: { start: 1474, end: 1487 },
            },
            loc: { start: 1474, end: 1488 },
          },
          directives: [],
          loc: { start: 1466, end: 1488 },
        },
      ],
      loc: { start: 1328, end: 1490 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ImageInput",
        loc: { start: 1498, end: 1508 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "url", loc: { start: 1513, end: 1516 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1518, end: 1524 },
              },
              loc: { start: 1518, end: 1524 },
            },
            loc: { start: 1518, end: 1525 },
          },
          directives: [],
          loc: { start: 1513, end: 1525 },
        },
        {
          kind: "InputValueDefinition",
          name: { kind: "Name", value: "alt", loc: { start: 1528, end: 1531 } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1533, end: 1539 },
              },
              loc: { start: 1533, end: 1539 },
            },
            loc: { start: 1533, end: 1540 },
          },
          directives: [],
          loc: { start: 1528, end: 1540 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "width",
            loc: { start: 1543, end: 1548 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1550, end: 1553 },
              },
              loc: { start: 1550, end: 1553 },
            },
            loc: { start: 1550, end: 1554 },
          },
          directives: [],
          loc: { start: 1543, end: 1554 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "height",
            loc: { start: 1557, end: 1563 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1565, end: 1568 },
              },
              loc: { start: 1565, end: 1568 },
            },
            loc: { start: 1565, end: 1569 },
          },
          directives: [],
          loc: { start: 1557, end: 1569 },
        },
      ],
      loc: { start: 1492, end: 1571 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 1578, end: 1583 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "order",
            loc: { start: 1588, end: 1593 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1594, end: 1596 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1598, end: 1600 },
                  },
                  loc: { start: 1598, end: 1600 },
                },
                loc: { start: 1598, end: 1601 },
              },
              directives: [],
              loc: { start: 1594, end: 1601 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Order",
              loc: { start: 1604, end: 1609 },
            },
            loc: { start: 1604, end: 1609 },
          },
          directives: [],
          loc: { start: 1588, end: 1609 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "orders",
            loc: { start: 1612, end: 1618 },
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
                    loc: { start: 1621, end: 1626 },
                  },
                  loc: { start: 1621, end: 1626 },
                },
                loc: { start: 1621, end: 1627 },
              },
              loc: { start: 1620, end: 1628 },
            },
            loc: { start: 1620, end: 1629 },
          },
          directives: [],
          loc: { start: 1612, end: 1629 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "card",
            loc: { start: 1632, end: 1636 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 1637, end: 1639 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 1641, end: 1643 },
                  },
                  loc: { start: 1641, end: 1643 },
                },
                loc: { start: 1641, end: 1644 },
              },
              directives: [],
              loc: { start: 1637, end: 1644 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Cart",
              loc: { start: 1647, end: 1651 },
            },
            loc: { start: 1647, end: 1651 },
          },
          directives: [],
          loc: { start: 1632, end: 1651 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "cards",
            loc: { start: 1654, end: 1659 },
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
                    value: "Cart",
                    loc: { start: 1662, end: 1666 },
                  },
                  loc: { start: 1662, end: 1666 },
                },
                loc: { start: 1662, end: 1667 },
              },
              loc: { start: 1661, end: 1668 },
            },
            loc: { start: 1661, end: 1669 },
          },
          directives: [],
          loc: { start: 1654, end: 1669 },
        },
      ],
      loc: { start: 1573, end: 1671 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "OrderStatus",
        loc: { start: 1678, end: 1689 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CREATED",
            loc: { start: 1694, end: 1701 },
          },
          directives: [],
          loc: { start: 1694, end: 1701 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PROCESSING",
            loc: { start: 1704, end: 1714 },
          },
          directives: [],
          loc: { start: 1704, end: 1714 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "PAID",
            loc: { start: 1717, end: 1721 },
          },
          directives: [],
          loc: { start: 1717, end: 1721 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "COMPLETED",
            loc: { start: 1724, end: 1733 },
          },
          directives: [],
          loc: { start: 1724, end: 1733 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "CANCELLED",
            loc: { start: 1736, end: 1745 },
          },
          directives: [],
          loc: { start: 1736, end: 1745 },
        },
      ],
      loc: { start: 1673, end: 1747 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CartItem",
        loc: { start: 1754, end: 1762 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "productId",
            loc: { start: 1767, end: 1776 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1778, end: 1780 },
              },
              loc: { start: 1778, end: 1780 },
            },
            loc: { start: 1778, end: 1781 },
          },
          directives: [],
          loc: { start: 1767, end: 1781 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "quantity",
            loc: { start: 1784, end: 1792 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1794, end: 1797 },
              },
              loc: { start: 1794, end: 1797 },
            },
            loc: { start: 1794, end: 1798 },
          },
          directives: [],
          loc: { start: 1784, end: 1798 },
        },
      ],
      loc: { start: 1749, end: 1800 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Cart", loc: { start: 1807, end: 1811 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1816, end: 1818 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1820, end: 1822 },
              },
              loc: { start: 1820, end: 1822 },
            },
            loc: { start: 1820, end: 1823 },
          },
          directives: [],
          loc: { start: 1816, end: 1823 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "items",
            loc: { start: 1826, end: 1831 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "CartItem",
                loc: { start: 1834, end: 1842 },
              },
              loc: { start: 1834, end: 1842 },
            },
            loc: { start: 1833, end: 1843 },
          },
          directives: [],
          loc: { start: 1826, end: 1843 },
        },
      ],
      loc: { start: 1802, end: 1845 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Order", loc: { start: 1852, end: 1857 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 1862, end: 1864 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1866, end: 1868 },
              },
              loc: { start: 1866, end: 1868 },
            },
            loc: { start: 1866, end: 1869 },
          },
          directives: [],
          loc: { start: 1862, end: 1869 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 1872, end: 1877 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1879, end: 1885 },
              },
              loc: { start: 1879, end: 1885 },
            },
            loc: { start: 1879, end: 1886 },
          },
          directives: [],
          loc: { start: 1872, end: 1886 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 1889, end: 1898 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1900, end: 1906 },
              },
              loc: { start: 1900, end: 1906 },
            },
            loc: { start: 1900, end: 1907 },
          },
          directives: [],
          loc: { start: 1889, end: 1907 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 1910, end: 1919 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1921, end: 1927 },
              },
              loc: { start: 1921, end: 1927 },
            },
            loc: { start: 1921, end: 1928 },
          },
          directives: [],
          loc: { start: 1910, end: 1928 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "total",
            loc: { start: 1931, end: 1936 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 1938, end: 1941 },
              },
              loc: { start: 1938, end: 1941 },
            },
            loc: { start: 1938, end: 1942 },
          },
          directives: [],
          loc: { start: 1931, end: 1942 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "cartId",
            loc: { start: 1945, end: 1951 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 1953, end: 1955 },
              },
              loc: { start: 1953, end: 1955 },
            },
            loc: { start: 1953, end: 1956 },
          },
          directives: [],
          loc: { start: 1945, end: 1956 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 1959, end: 1965 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "OrderStatus",
                loc: { start: 1967, end: 1978 },
              },
              loc: { start: 1967, end: 1978 },
            },
            loc: { start: 1967, end: 1979 },
          },
          directives: [],
          loc: { start: 1959, end: 1979 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "items",
            loc: { start: 1982, end: 1987 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 1989, end: 1995 },
              },
              loc: { start: 1989, end: 1995 },
            },
            loc: { start: 1989, end: 1996 },
          },
          directives: [],
          loc: { start: 1982, end: 1996 },
        },
      ],
      loc: { start: 1847, end: 1998 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "Mutation",
        loc: { start: 2005, end: 2013 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createOrder",
            loc: { start: 2018, end: 2029 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2030, end: 2035 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "OrderInput",
                    loc: { start: 2037, end: 2047 },
                  },
                  loc: { start: 2037, end: 2047 },
                },
                loc: { start: 2037, end: 2048 },
              },
              directives: [],
              loc: { start: 2030, end: 2048 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Order",
                loc: { start: 2051, end: 2056 },
              },
              loc: { start: 2051, end: 2056 },
            },
            loc: { start: 2051, end: 2057 },
          },
          directives: [],
          loc: { start: 2018, end: 2057 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateOrder",
            loc: { start: 2060, end: 2071 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2072, end: 2074 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2076, end: 2078 },
                  },
                  loc: { start: 2076, end: 2078 },
                },
                loc: { start: 2076, end: 2079 },
              },
              directives: [],
              loc: { start: 2072, end: 2079 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2081, end: 2086 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "OrderInput",
                    loc: { start: 2088, end: 2098 },
                  },
                  loc: { start: 2088, end: 2098 },
                },
                loc: { start: 2088, end: 2099 },
              },
              directives: [],
              loc: { start: 2081, end: 2099 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Order",
                loc: { start: 2102, end: 2107 },
              },
              loc: { start: 2102, end: 2107 },
            },
            loc: { start: 2102, end: 2108 },
          },
          directives: [],
          loc: { start: 2060, end: 2108 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteOrder",
            loc: { start: 2111, end: 2122 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2123, end: 2125 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2127, end: 2129 },
                  },
                  loc: { start: 2127, end: 2129 },
                },
                loc: { start: 2127, end: 2130 },
              },
              directives: [],
              loc: { start: 2123, end: 2130 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Order",
                loc: { start: 2133, end: 2138 },
              },
              loc: { start: 2133, end: 2138 },
            },
            loc: { start: 2133, end: 2139 },
          },
          directives: [],
          loc: { start: 2111, end: 2139 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createCart",
            loc: { start: 2142, end: 2152 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2153, end: 2158 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CartInput",
                    loc: { start: 2160, end: 2169 },
                  },
                  loc: { start: 2160, end: 2169 },
                },
                loc: { start: 2160, end: 2170 },
              },
              directives: [],
              loc: { start: 2153, end: 2170 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Cart",
                loc: { start: 2173, end: 2177 },
              },
              loc: { start: 2173, end: 2177 },
            },
            loc: { start: 2173, end: 2178 },
          },
          directives: [],
          loc: { start: 2142, end: 2178 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updateCart",
            loc: { start: 2181, end: 2191 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2192, end: 2194 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2196, end: 2198 },
                  },
                  loc: { start: 2196, end: 2198 },
                },
                loc: { start: 2196, end: 2199 },
              },
              directives: [],
              loc: { start: 2192, end: 2199 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "input",
                loc: { start: 2201, end: 2206 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "CartInput",
                    loc: { start: 2208, end: 2217 },
                  },
                  loc: { start: 2208, end: 2217 },
                },
                loc: { start: 2208, end: 2218 },
              },
              directives: [],
              loc: { start: 2201, end: 2218 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Cart",
                loc: { start: 2221, end: 2225 },
              },
              loc: { start: 2221, end: 2225 },
            },
            loc: { start: 2221, end: 2226 },
          },
          directives: [],
          loc: { start: 2181, end: 2226 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "deleteCart",
            loc: { start: 2229, end: 2239 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 2240, end: 2242 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 2244, end: 2246 },
                  },
                  loc: { start: 2244, end: 2246 },
                },
                loc: { start: 2244, end: 2247 },
              },
              directives: [],
              loc: { start: 2240, end: 2247 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Cart",
                loc: { start: 2250, end: 2254 },
              },
              loc: { start: 2250, end: 2254 },
            },
            loc: { start: 2250, end: 2255 },
          },
          directives: [],
          loc: { start: 2229, end: 2255 },
        },
      ],
      loc: { start: 2000, end: 2257 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "OrderInput",
        loc: { start: 2265, end: 2275 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "email",
            loc: { start: 2280, end: 2285 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2287, end: 2293 },
              },
              loc: { start: 2287, end: 2293 },
            },
            loc: { start: 2287, end: 2294 },
          },
          directives: [],
          loc: { start: 2280, end: 2294 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 2297, end: 2306 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2308, end: 2314 },
              },
              loc: { start: 2308, end: 2314 },
            },
            loc: { start: 2308, end: 2315 },
          },
          directives: [],
          loc: { start: 2297, end: 2315 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 2318, end: 2327 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2329, end: 2335 },
              },
              loc: { start: 2329, end: 2335 },
            },
            loc: { start: 2329, end: 2336 },
          },
          directives: [],
          loc: { start: 2318, end: 2336 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "total",
            loc: { start: 2339, end: 2344 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2346, end: 2349 },
              },
              loc: { start: 2346, end: 2349 },
            },
            loc: { start: 2346, end: 2350 },
          },
          directives: [],
          loc: { start: 2339, end: 2350 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "cartId",
            loc: { start: 2353, end: 2359 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2361, end: 2363 },
              },
              loc: { start: 2361, end: 2363 },
            },
            loc: { start: 2361, end: 2364 },
          },
          directives: [],
          loc: { start: 2353, end: 2364 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "status",
            loc: { start: 2367, end: 2373 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "OrderStatus",
                loc: { start: 2375, end: 2386 },
              },
              loc: { start: 2375, end: 2386 },
            },
            loc: { start: 2375, end: 2387 },
          },
          directives: [],
          loc: { start: 2367, end: 2387 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "items",
            loc: { start: 2390, end: 2395 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 2397, end: 2403 },
              },
              loc: { start: 2397, end: 2403 },
            },
            loc: { start: 2397, end: 2404 },
          },
          directives: [],
          loc: { start: 2390, end: 2404 },
        },
      ],
      loc: { start: 2259, end: 2406 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CartInput",
        loc: { start: 2414, end: 2423 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "items",
            loc: { start: 2428, end: 2433 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "CartItemInput",
                  loc: { start: 2436, end: 2449 },
                },
                loc: { start: 2436, end: 2449 },
              },
              loc: { start: 2435, end: 2450 },
            },
            loc: { start: 2435, end: 2451 },
          },
          directives: [],
          loc: { start: 2428, end: 2451 },
        },
      ],
      loc: { start: 2408, end: 2453 },
    },
    {
      kind: "InputObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "CartItemInput",
        loc: { start: 2461, end: 2474 },
      },
      directives: [],
      fields: [
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "productId",
            loc: { start: 2479, end: 2488 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 2490, end: 2492 },
              },
              loc: { start: 2490, end: 2492 },
            },
            loc: { start: 2490, end: 2493 },
          },
          directives: [],
          loc: { start: 2479, end: 2493 },
        },
        {
          kind: "InputValueDefinition",
          name: {
            kind: "Name",
            value: "quantity",
            loc: { start: 2496, end: 2504 },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 2506, end: 2509 },
              },
              loc: { start: 2506, end: 2509 },
            },
            loc: { start: 2506, end: 2510 },
          },
          directives: [],
          loc: { start: 2496, end: 2510 },
        },
      ],
      loc: { start: 2455, end: 2512 },
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
              loc: { start: 2531, end: 2536 },
            },
            loc: { start: 2531, end: 2536 },
          },
          loc: { start: 2524, end: 2536 },
        },
      ],
      loc: { start: 2513, end: 2538 },
    },
  ],
  loc: { start: 0, end: 2539 },
} as unknown as DocumentNode;
