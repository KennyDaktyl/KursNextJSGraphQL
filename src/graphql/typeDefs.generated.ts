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
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 350, end: 356 },
						},
						loc: { start: 350, end: 356 },
					},
					directives: [],
					loc: { start: 342, end: 356 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "productId",
						loc: { start: 359, end: 368 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 370, end: 376 },
							},
							loc: { start: 370, end: 376 },
						},
						loc: { start: 370, end: 377 },
					},
					directives: [],
					loc: { start: 359, end: 377 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 380, end: 388 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 390, end: 393 },
							},
							loc: { start: 390, end: 393 },
						},
						loc: { start: 390, end: 394 },
					},
					directives: [],
					loc: { start: 380, end: 394 },
				},
			],
			loc: { start: 318, end: 396 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 402, end: 410 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createCart",
						loc: { start: 415, end: 425 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 426, end: 431 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "CartInput",
										loc: { start: 433, end: 442 },
									},
									loc: { start: 433, end: 442 },
								},
								loc: { start: 433, end: 443 },
							},
							directives: [],
							loc: { start: 426, end: 443 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Cart",
								loc: { start: 446, end: 450 },
							},
							loc: { start: 446, end: 450 },
						},
						loc: { start: 446, end: 451 },
					},
					directives: [],
					loc: { start: 415, end: 451 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateCart",
						loc: { start: 454, end: 464 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 465, end: 467 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 469, end: 471 },
									},
									loc: { start: 469, end: 471 },
								},
								loc: { start: 469, end: 472 },
							},
							directives: [],
							loc: { start: 465, end: 472 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 474, end: 479 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "CartInput",
										loc: { start: 481, end: 490 },
									},
									loc: { start: 481, end: 490 },
								},
								loc: { start: 481, end: 491 },
							},
							directives: [],
							loc: { start: 474, end: 491 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Cart",
								loc: { start: 494, end: 498 },
							},
							loc: { start: 494, end: 498 },
						},
						loc: { start: 494, end: 499 },
					},
					directives: [],
					loc: { start: 454, end: 499 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteCart",
						loc: { start: 502, end: 512 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 513, end: 515 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 517, end: 519 },
									},
									loc: { start: 517, end: 519 },
								},
								loc: { start: 517, end: 520 },
							},
							directives: [],
							loc: { start: 513, end: 520 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Cart",
								loc: { start: 523, end: 527 },
							},
							loc: { start: 523, end: 527 },
						},
						loc: { start: 523, end: 528 },
					},
					directives: [],
					loc: { start: 502, end: 528 },
				},
			],
			loc: { start: 397, end: 530 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 537, end: 542 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "cart", loc: { start: 547, end: 551 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 552, end: 554 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 556, end: 558 },
									},
									loc: { start: 556, end: 558 },
								},
								loc: { start: 556, end: 559 },
							},
							directives: [],
							loc: { start: 552, end: 559 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Cart",
							loc: { start: 562, end: 566 },
						},
						loc: { start: 562, end: 566 },
					},
					directives: [],
					loc: { start: 547, end: 566 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "carts", loc: { start: 569, end: 574 } },
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
										loc: { start: 577, end: 581 },
									},
									loc: { start: 577, end: 581 },
								},
								loc: { start: 577, end: 582 },
							},
							loc: { start: 576, end: 583 },
						},
						loc: { start: 576, end: 584 },
					},
					directives: [],
					loc: { start: 569, end: 584 },
				},
			],
			loc: { start: 532, end: 586 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Cart", loc: { start: 593, end: 597 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 602, end: 604 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 606, end: 612 },
							},
							loc: { start: 606, end: 612 },
						},
						loc: { start: 606, end: 613 },
					},
					directives: [],
					loc: { start: 602, end: 613 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "items", loc: { start: 616, end: 621 } },
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CartItem",
								loc: { start: 624, end: 632 },
							},
							loc: { start: 624, end: 632 },
						},
						loc: { start: 623, end: 633 },
					},
					directives: [],
					loc: { start: 616, end: 633 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 636, end: 641 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 643, end: 648 },
						},
						loc: { start: 643, end: 648 },
					},
					directives: [],
					loc: { start: 636, end: 648 },
				},
			],
			loc: { start: 588, end: 650 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: { kind: "Name", value: "CartInput", loc: { start: 658, end: 667 } },
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "item", loc: { start: 672, end: 676 } },
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CartItemInput",
								loc: { start: 678, end: 691 },
							},
							loc: { start: 678, end: 691 },
						},
						loc: { start: 678, end: 692 },
					},
					directives: [],
					loc: { start: 672, end: 692 },
				},
			],
			loc: { start: 652, end: 694 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 707, end: 712 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 717, end: 725 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 726, end: 728 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 730, end: 732 },
									},
									loc: { start: 730, end: 732 },
								},
								loc: { start: 730, end: 733 },
							},
							directives: [],
							loc: { start: 726, end: 733 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 736, end: 744 },
						},
						loc: { start: 736, end: 744 },
					},
					directives: [],
					loc: { start: 717, end: 744 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 747, end: 757 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 760, end: 768 },
							},
							loc: { start: 760, end: 768 },
						},
						loc: { start: 759, end: 769 },
					},
					directives: [],
					loc: { start: 747, end: 769 },
				},
			],
			loc: { start: 695, end: 771 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 778, end: 786 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 791, end: 793 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 795, end: 797 },
							},
							loc: { start: 795, end: 797 },
						},
						loc: { start: 795, end: 798 },
					},
					directives: [],
					loc: { start: 791, end: 798 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 801, end: 805 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 807, end: 813 },
							},
							loc: { start: 807, end: 813 },
						},
						loc: { start: 807, end: 814 },
					},
					directives: [],
					loc: { start: 801, end: 814 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 817, end: 821 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 823, end: 829 },
							},
							loc: { start: 823, end: 829 },
						},
						loc: { start: 823, end: 830 },
					},
					directives: [],
					loc: { start: 817, end: 830 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 833, end: 844 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 846, end: 852 },
							},
							loc: { start: 846, end: 852 },
						},
						loc: { start: 846, end: 853 },
					},
					directives: [],
					loc: { start: 833, end: 853 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 856, end: 864 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 867, end: 874 },
							},
							loc: { start: 867, end: 874 },
						},
						loc: { start: 866, end: 875 },
					},
					directives: [],
					loc: { start: 856, end: 875 },
				},
			],
			loc: { start: 773, end: 877 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 884, end: 892 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createCategory",
						loc: { start: 897, end: 911 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 912, end: 917 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "CategoryInput",
										loc: { start: 919, end: 932 },
									},
									loc: { start: 919, end: 932 },
								},
								loc: { start: 919, end: 933 },
							},
							directives: [],
							loc: { start: 912, end: 933 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 936, end: 944 },
							},
							loc: { start: 936, end: 944 },
						},
						loc: { start: 936, end: 945 },
					},
					directives: [],
					loc: { start: 897, end: 945 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateCategory",
						loc: { start: 948, end: 962 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 963, end: 965 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 967, end: 969 },
									},
									loc: { start: 967, end: 969 },
								},
								loc: { start: 967, end: 970 },
							},
							directives: [],
							loc: { start: 963, end: 970 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 972, end: 977 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "CategoryInput",
										loc: { start: 979, end: 992 },
									},
									loc: { start: 979, end: 992 },
								},
								loc: { start: 979, end: 993 },
							},
							directives: [],
							loc: { start: 972, end: 993 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 996, end: 1004 },
							},
							loc: { start: 996, end: 1004 },
						},
						loc: { start: 996, end: 1005 },
					},
					directives: [],
					loc: { start: 948, end: 1005 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteCategory",
						loc: { start: 1008, end: 1022 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1023, end: 1025 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1027, end: 1029 },
									},
									loc: { start: 1027, end: 1029 },
								},
								loc: { start: 1027, end: 1030 },
							},
							directives: [],
							loc: { start: 1023, end: 1030 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 1033, end: 1041 },
							},
							loc: { start: 1033, end: 1041 },
						},
						loc: { start: 1033, end: 1042 },
					},
					directives: [],
					loc: { start: 1008, end: 1042 },
				},
			],
			loc: { start: 879, end: 1044 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CategoryInput",
				loc: { start: 1052, end: 1065 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1070, end: 1074 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1076, end: 1082 },
							},
							loc: { start: 1076, end: 1082 },
						},
						loc: { start: 1076, end: 1083 },
					},
					directives: [],
					loc: { start: 1070, end: 1083 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1086, end: 1097 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1099, end: 1105 },
							},
							loc: { start: 1099, end: 1105 },
						},
						loc: { start: 1099, end: 1106 },
					},
					directives: [],
					loc: { start: 1086, end: 1106 },
				},
			],
			loc: { start: 1046, end: 1108 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1121, end: 1126 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 1131, end: 1141 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1142, end: 1144 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1146, end: 1148 },
									},
									loc: { start: 1146, end: 1148 },
								},
								loc: { start: 1146, end: 1149 },
							},
							directives: [],
							loc: { start: 1142, end: 1149 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 1152, end: 1162 },
						},
						loc: { start: 1152, end: 1162 },
					},
					directives: [],
					loc: { start: 1131, end: 1162 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 1165, end: 1176 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Collection",
								loc: { start: 1179, end: 1189 },
							},
							loc: { start: 1179, end: 1189 },
						},
						loc: { start: 1178, end: 1190 },
					},
					directives: [],
					loc: { start: 1165, end: 1190 },
				},
			],
			loc: { start: 1109, end: 1192 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1199, end: 1207 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createCollection",
						loc: { start: 1212, end: 1228 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 1229, end: 1234 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "CollectionInput",
										loc: { start: 1236, end: 1251 },
									},
									loc: { start: 1236, end: 1251 },
								},
								loc: { start: 1236, end: 1252 },
							},
							directives: [],
							loc: { start: 1229, end: 1252 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Collection",
								loc: { start: 1255, end: 1265 },
							},
							loc: { start: 1255, end: 1265 },
						},
						loc: { start: 1255, end: 1266 },
					},
					directives: [],
					loc: { start: 1212, end: 1266 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateCollection",
						loc: { start: 1269, end: 1285 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1286, end: 1288 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1290, end: 1292 },
									},
									loc: { start: 1290, end: 1292 },
								},
								loc: { start: 1290, end: 1293 },
							},
							directives: [],
							loc: { start: 1286, end: 1293 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 1295, end: 1300 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "CollectionInput",
										loc: { start: 1302, end: 1317 },
									},
									loc: { start: 1302, end: 1317 },
								},
								loc: { start: 1302, end: 1318 },
							},
							directives: [],
							loc: { start: 1295, end: 1318 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Collection",
								loc: { start: 1321, end: 1331 },
							},
							loc: { start: 1321, end: 1331 },
						},
						loc: { start: 1321, end: 1332 },
					},
					directives: [],
					loc: { start: 1269, end: 1332 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteCollection",
						loc: { start: 1335, end: 1351 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1352, end: 1354 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1356, end: 1358 },
									},
									loc: { start: 1356, end: 1358 },
								},
								loc: { start: 1356, end: 1359 },
							},
							directives: [],
							loc: { start: 1352, end: 1359 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Collection",
								loc: { start: 1362, end: 1372 },
							},
							loc: { start: 1362, end: 1372 },
						},
						loc: { start: 1362, end: 1373 },
					},
					directives: [],
					loc: { start: 1335, end: 1373 },
				},
			],
			loc: { start: 1194, end: 1375 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 1382, end: 1392 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1397, end: 1399 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1401, end: 1403 },
							},
							loc: { start: 1401, end: 1403 },
						},
						loc: { start: 1401, end: 1404 },
					},
					directives: [],
					loc: { start: 1397, end: 1404 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1407, end: 1411 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1413, end: 1419 },
							},
							loc: { start: 1413, end: 1419 },
						},
						loc: { start: 1413, end: 1420 },
					},
					directives: [],
					loc: { start: 1407, end: 1420 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "slug",
						loc: { start: 1423, end: 1427 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1429, end: 1435 },
							},
							loc: { start: 1429, end: 1435 },
						},
						loc: { start: 1429, end: 1436 },
					},
					directives: [],
					loc: { start: 1423, end: 1436 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1439, end: 1450 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1452, end: 1458 },
							},
							loc: { start: 1452, end: 1458 },
						},
						loc: { start: 1452, end: 1459 },
					},
					directives: [],
					loc: { start: 1439, end: 1459 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1462, end: 1470 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1473, end: 1480 },
							},
							loc: { start: 1473, end: 1480 },
						},
						loc: { start: 1472, end: 1481 },
					},
					directives: [],
					loc: { start: 1462, end: 1481 },
				},
			],
			loc: { start: 1377, end: 1483 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CollectionInput",
				loc: { start: 1491, end: 1506 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1511, end: 1515 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1517, end: 1523 },
							},
							loc: { start: 1517, end: 1523 },
						},
						loc: { start: 1517, end: 1524 },
					},
					directives: [],
					loc: { start: 1511, end: 1524 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 1527, end: 1538 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1540, end: 1546 },
							},
							loc: { start: 1540, end: 1546 },
						},
						loc: { start: 1540, end: 1547 },
					},
					directives: [],
					loc: { start: 1527, end: 1547 },
				},
			],
			loc: { start: 1485, end: 1549 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1555, end: 1563 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createImage",
						loc: { start: 1568, end: 1579 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 1580, end: 1585 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ImageInput",
										loc: { start: 1587, end: 1597 },
									},
									loc: { start: 1587, end: 1597 },
								},
								loc: { start: 1587, end: 1598 },
							},
							directives: [],
							loc: { start: 1580, end: 1598 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Image",
								loc: { start: 1601, end: 1606 },
							},
							loc: { start: 1601, end: 1606 },
						},
						loc: { start: 1601, end: 1607 },
					},
					directives: [],
					loc: { start: 1568, end: 1607 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateImage",
						loc: { start: 1610, end: 1621 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1622, end: 1624 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1626, end: 1628 },
									},
									loc: { start: 1626, end: 1628 },
								},
								loc: { start: 1626, end: 1629 },
							},
							directives: [],
							loc: { start: 1622, end: 1629 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 1631, end: 1636 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ImageInput",
										loc: { start: 1638, end: 1648 },
									},
									loc: { start: 1638, end: 1648 },
								},
								loc: { start: 1638, end: 1649 },
							},
							directives: [],
							loc: { start: 1631, end: 1649 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Image",
								loc: { start: 1652, end: 1657 },
							},
							loc: { start: 1652, end: 1657 },
						},
						loc: { start: 1652, end: 1658 },
					},
					directives: [],
					loc: { start: 1610, end: 1658 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteImage",
						loc: { start: 1661, end: 1672 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1673, end: 1675 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1677, end: 1679 },
									},
									loc: { start: 1677, end: 1679 },
								},
								loc: { start: 1677, end: 1680 },
							},
							directives: [],
							loc: { start: 1673, end: 1680 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Image",
								loc: { start: 1683, end: 1688 },
							},
							loc: { start: 1683, end: 1688 },
						},
						loc: { start: 1683, end: 1689 },
					},
					directives: [],
					loc: { start: 1661, end: 1689 },
				},
			],
			loc: { start: 1550, end: 1691 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1698, end: 1703 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "image",
						loc: { start: 1708, end: 1713 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1714, end: 1716 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1718, end: 1720 },
									},
									loc: { start: 1718, end: 1720 },
								},
								loc: { start: 1718, end: 1721 },
							},
							directives: [],
							loc: { start: 1714, end: 1721 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Image",
							loc: { start: 1724, end: 1729 },
						},
						loc: { start: 1724, end: 1729 },
					},
					directives: [],
					loc: { start: 1708, end: 1729 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 1732, end: 1738 },
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
										loc: { start: 1741, end: 1746 },
									},
									loc: { start: 1741, end: 1746 },
								},
								loc: { start: 1741, end: 1747 },
							},
							loc: { start: 1740, end: 1748 },
						},
						loc: { start: 1740, end: 1749 },
					},
					directives: [],
					loc: { start: 1732, end: 1749 },
				},
			],
			loc: { start: 1693, end: 1751 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Image", loc: { start: 1758, end: 1763 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1768, end: 1770 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1772, end: 1778 },
							},
							loc: { start: 1772, end: 1778 },
						},
						loc: { start: 1772, end: 1779 },
					},
					directives: [],
					loc: { start: 1768, end: 1779 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1782, end: 1785 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1787, end: 1793 },
							},
							loc: { start: 1787, end: 1793 },
						},
						loc: { start: 1787, end: 1794 },
					},
					directives: [],
					loc: { start: 1782, end: 1794 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "alt", loc: { start: 1797, end: 1800 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1802, end: 1808 },
							},
							loc: { start: 1802, end: 1808 },
						},
						loc: { start: 1802, end: 1809 },
					},
					directives: [],
					loc: { start: 1797, end: 1809 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "width",
						loc: { start: 1812, end: 1817 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1819, end: 1822 },
							},
							loc: { start: 1819, end: 1822 },
						},
						loc: { start: 1819, end: 1823 },
					},
					directives: [],
					loc: { start: 1812, end: 1823 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 1826, end: 1832 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1834, end: 1837 },
							},
							loc: { start: 1834, end: 1837 },
						},
						loc: { start: 1834, end: 1838 },
					},
					directives: [],
					loc: { start: 1826, end: 1838 },
				},
			],
			loc: { start: 1753, end: 1840 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ImageInput",
				loc: { start: 1848, end: 1858 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1863, end: 1866 } },
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1868, end: 1874 },
							},
							loc: { start: 1868, end: 1874 },
						},
						loc: { start: 1868, end: 1875 },
					},
					directives: [],
					loc: { start: 1863, end: 1875 },
				},
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "alt", loc: { start: 1878, end: 1881 } },
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1883, end: 1889 },
							},
							loc: { start: 1883, end: 1889 },
						},
						loc: { start: 1883, end: 1890 },
					},
					directives: [],
					loc: { start: 1878, end: 1890 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "width",
						loc: { start: 1893, end: 1898 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1900, end: 1903 },
							},
							loc: { start: 1900, end: 1903 },
						},
						loc: { start: 1900, end: 1904 },
					},
					directives: [],
					loc: { start: 1893, end: 1904 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 1907, end: 1913 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1915, end: 1918 },
							},
							loc: { start: 1915, end: 1918 },
						},
						loc: { start: 1915, end: 1919 },
					},
					directives: [],
					loc: { start: 1907, end: 1919 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "productId",
						loc: { start: 1922, end: 1931 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1933, end: 1939 },
							},
							loc: { start: 1933, end: 1939 },
						},
						loc: { start: 1933, end: 1940 },
					},
					directives: [],
					loc: { start: 1922, end: 1940 },
				},
			],
			loc: { start: 1842, end: 1942 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1948, end: 1953 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "order",
						loc: { start: 1958, end: 1963 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1964, end: 1966 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1968, end: 1970 },
									},
									loc: { start: 1968, end: 1970 },
								},
								loc: { start: 1968, end: 1971 },
							},
							directives: [],
							loc: { start: 1964, end: 1971 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 1974, end: 1979 },
						},
						loc: { start: 1974, end: 1979 },
					},
					directives: [],
					loc: { start: 1958, end: 1979 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 1982, end: 1988 },
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
										loc: { start: 1991, end: 1996 },
									},
									loc: { start: 1991, end: 1996 },
								},
								loc: { start: 1991, end: 1997 },
							},
							loc: { start: 1990, end: 1998 },
						},
						loc: { start: 1990, end: 1999 },
					},
					directives: [],
					loc: { start: 1982, end: 1999 },
				},
			],
			loc: { start: 1943, end: 2001 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 2008, end: 2016 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createOrder",
						loc: { start: 2021, end: 2032 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 2033, end: 2038 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "OrderInput",
										loc: { start: 2040, end: 2050 },
									},
									loc: { start: 2040, end: 2050 },
								},
								loc: { start: 2040, end: 2051 },
							},
							directives: [],
							loc: { start: 2033, end: 2051 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 2054, end: 2059 },
							},
							loc: { start: 2054, end: 2059 },
						},
						loc: { start: 2054, end: 2060 },
					},
					directives: [],
					loc: { start: 2021, end: 2060 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateOrder",
						loc: { start: 2063, end: 2074 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 2075, end: 2077 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 2079, end: 2081 },
									},
									loc: { start: 2079, end: 2081 },
								},
								loc: { start: 2079, end: 2082 },
							},
							directives: [],
							loc: { start: 2075, end: 2082 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 2084, end: 2089 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "OrderInput",
										loc: { start: 2091, end: 2101 },
									},
									loc: { start: 2091, end: 2101 },
								},
								loc: { start: 2091, end: 2102 },
							},
							directives: [],
							loc: { start: 2084, end: 2102 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 2105, end: 2110 },
							},
							loc: { start: 2105, end: 2110 },
						},
						loc: { start: 2105, end: 2111 },
					},
					directives: [],
					loc: { start: 2063, end: 2111 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteOrder",
						loc: { start: 2114, end: 2125 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 2126, end: 2128 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 2130, end: 2132 },
									},
									loc: { start: 2130, end: 2132 },
								},
								loc: { start: 2130, end: 2133 },
							},
							directives: [],
							loc: { start: 2126, end: 2133 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 2136, end: 2141 },
							},
							loc: { start: 2136, end: 2141 },
						},
						loc: { start: 2136, end: 2142 },
					},
					directives: [],
					loc: { start: 2114, end: 2142 },
				},
			],
			loc: { start: 2003, end: 2144 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderStatus",
				loc: { start: 2151, end: 2162 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CREATED",
						loc: { start: 2167, end: 2174 },
					},
					directives: [],
					loc: { start: 2167, end: 2174 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "PROCESSING",
						loc: { start: 2177, end: 2187 },
					},
					directives: [],
					loc: { start: 2177, end: 2187 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "PAID",
						loc: { start: 2190, end: 2194 },
					},
					directives: [],
					loc: { start: 2190, end: 2194 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "COMPLETED",
						loc: { start: 2197, end: 2206 },
					},
					directives: [],
					loc: { start: 2197, end: 2206 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 2209, end: 2218 },
					},
					directives: [],
					loc: { start: 2209, end: 2218 },
				},
			],
			loc: { start: 2146, end: 2220 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 2227, end: 2232 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2237, end: 2239 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2241, end: 2247 },
							},
							loc: { start: 2241, end: 2247 },
						},
						loc: { start: 2241, end: 2248 },
					},
					directives: [],
					loc: { start: 2237, end: 2248 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 2251, end: 2260 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2262, end: 2268 },
							},
							loc: { start: 2262, end: 2268 },
						},
						loc: { start: 2262, end: 2269 },
					},
					directives: [],
					loc: { start: 2251, end: 2269 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updatedAt",
						loc: { start: 2272, end: 2281 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2283, end: 2289 },
							},
							loc: { start: 2283, end: 2289 },
						},
						loc: { start: 2283, end: 2290 },
					},
					directives: [],
					loc: { start: 2272, end: 2290 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 2293, end: 2298 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2300, end: 2306 },
							},
							loc: { start: 2300, end: 2306 },
						},
						loc: { start: 2300, end: 2307 },
					},
					directives: [],
					loc: { start: 2293, end: 2307 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 2310, end: 2315 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2317, end: 2320 },
							},
							loc: { start: 2317, end: 2320 },
						},
						loc: { start: 2317, end: 2321 },
					},
					directives: [],
					loc: { start: 2310, end: 2321 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 2324, end: 2330 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2332, end: 2338 },
							},
							loc: { start: 2332, end: 2338 },
						},
						loc: { start: 2332, end: 2339 },
					},
					directives: [],
					loc: { start: 2324, end: 2339 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "items",
						loc: { start: 2342, end: 2347 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 2349, end: 2355 },
						},
						loc: { start: 2349, end: 2355 },
					},
					directives: [],
					loc: { start: 2342, end: 2355 },
				},
			],
			loc: { start: 2222, end: 2357 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderInput",
				loc: { start: 2365, end: 2375 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 2380, end: 2385 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2387, end: 2393 },
							},
							loc: { start: 2387, end: 2393 },
						},
						loc: { start: 2387, end: 2394 },
					},
					directives: [],
					loc: { start: 2380, end: 2394 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 2397, end: 2402 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2404, end: 2407 },
							},
							loc: { start: 2404, end: 2407 },
						},
						loc: { start: 2404, end: 2408 },
					},
					directives: [],
					loc: { start: 2397, end: 2408 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 2411, end: 2417 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2419, end: 2425 },
							},
							loc: { start: 2419, end: 2425 },
						},
						loc: { start: 2419, end: 2426 },
					},
					directives: [],
					loc: { start: 2411, end: 2426 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "cartId",
						loc: { start: 2429, end: 2435 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2437, end: 2443 },
							},
							loc: { start: 2437, end: 2443 },
						},
						loc: { start: 2437, end: 2444 },
					},
					directives: [],
					loc: { start: 2429, end: 2444 },
				},
			],
			loc: { start: 2359, end: 2446 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 2459, end: 2464 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 2469, end: 2476 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 2477, end: 2479 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 2481, end: 2483 },
									},
									loc: { start: 2481, end: 2483 },
								},
								loc: { start: 2481, end: 2484 },
							},
							directives: [],
							loc: { start: 2477, end: 2484 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 2487, end: 2494 },
						},
						loc: { start: 2487, end: 2494 },
					},
					directives: [],
					loc: { start: 2469, end: 2494 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 2497, end: 2505 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2508, end: 2515 },
							},
							loc: { start: 2508, end: 2515 },
						},
						loc: { start: 2507, end: 2516 },
					},
					directives: [],
					loc: { start: 2497, end: 2516 },
				},
			],
			loc: { start: 2447, end: 2518 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 2525, end: 2532 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2537, end: 2539 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2541, end: 2543 },
							},
							loc: { start: 2541, end: 2543 },
						},
						loc: { start: 2541, end: 2544 },
					},
					directives: [],
					loc: { start: 2537, end: 2544 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 2547, end: 2551 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2553, end: 2559 },
							},
							loc: { start: 2553, end: 2559 },
						},
						loc: { start: 2553, end: 2560 },
					},
					directives: [],
					loc: { start: 2547, end: 2560 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 2563, end: 2574 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2576, end: 2582 },
							},
							loc: { start: 2576, end: 2582 },
						},
						loc: { start: 2576, end: 2583 },
					},
					directives: [],
					loc: { start: 2563, end: 2583 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categories",
						loc: { start: 2586, end: 2596 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 2599, end: 2607 },
							},
							loc: { start: 2599, end: 2607 },
						},
						loc: { start: 2598, end: 2608 },
					},
					directives: [],
					loc: { start: 2586, end: 2608 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 2611, end: 2622 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Collection",
								loc: { start: 2625, end: 2635 },
							},
							loc: { start: 2625, end: 2635 },
						},
						loc: { start: 2624, end: 2636 },
					},
					directives: [],
					loc: { start: 2611, end: 2636 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 2639, end: 2644 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2646, end: 2649 },
							},
							loc: { start: 2646, end: 2649 },
						},
						loc: { start: 2646, end: 2650 },
					},
					directives: [],
					loc: { start: 2639, end: 2650 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "images",
						loc: { start: 2653, end: 2659 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Image",
								loc: { start: 2662, end: 2667 },
							},
							loc: { start: 2662, end: 2667 },
						},
						loc: { start: 2661, end: 2668 },
					},
					directives: [],
					loc: { start: 2653, end: 2668 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 2671, end: 2678 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Review",
								loc: { start: 2681, end: 2687 },
							},
							loc: { start: 2681, end: 2687 },
						},
						loc: { start: 2680, end: 2688 },
					},
					directives: [],
					loc: { start: 2671, end: 2688 },
				},
			],
			loc: { start: 2520, end: 2690 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 2697, end: 2705 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createProduct",
						loc: { start: 2710, end: 2723 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 2724, end: 2729 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ProductInput",
										loc: { start: 2731, end: 2743 },
									},
									loc: { start: 2731, end: 2743 },
								},
								loc: { start: 2731, end: 2744 },
							},
							directives: [],
							loc: { start: 2724, end: 2744 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2747, end: 2754 },
							},
							loc: { start: 2747, end: 2754 },
						},
						loc: { start: 2747, end: 2755 },
					},
					directives: [],
					loc: { start: 2710, end: 2755 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateProduct",
						loc: { start: 2758, end: 2771 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 2772, end: 2774 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 2776, end: 2778 },
									},
									loc: { start: 2776, end: 2778 },
								},
								loc: { start: 2776, end: 2779 },
							},
							directives: [],
							loc: { start: 2772, end: 2779 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 2781, end: 2786 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ProductInput",
										loc: { start: 2788, end: 2800 },
									},
									loc: { start: 2788, end: 2800 },
								},
								loc: { start: 2788, end: 2801 },
							},
							directives: [],
							loc: { start: 2781, end: 2801 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2804, end: 2811 },
							},
							loc: { start: 2804, end: 2811 },
						},
						loc: { start: 2804, end: 2812 },
					},
					directives: [],
					loc: { start: 2758, end: 2812 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteProduct",
						loc: { start: 2815, end: 2828 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 2829, end: 2831 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 2833, end: 2835 },
									},
									loc: { start: 2833, end: 2835 },
								},
								loc: { start: 2833, end: 2836 },
							},
							directives: [],
							loc: { start: 2829, end: 2836 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2839, end: 2846 },
							},
							loc: { start: 2839, end: 2846 },
						},
						loc: { start: 2839, end: 2847 },
					},
					directives: [],
					loc: { start: 2815, end: 2847 },
				},
			],
			loc: { start: 2692, end: 2849 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ProductInput",
				loc: { start: 2857, end: 2869 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 2874, end: 2878 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2880, end: 2886 },
							},
							loc: { start: 2880, end: 2886 },
						},
						loc: { start: 2880, end: 2887 },
					},
					directives: [],
					loc: { start: 2874, end: 2887 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 2890, end: 2901 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2903, end: 2909 },
							},
							loc: { start: 2903, end: 2909 },
						},
						loc: { start: 2903, end: 2910 },
					},
					directives: [],
					loc: { start: 2890, end: 2910 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 2913, end: 2918 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2920, end: 2923 },
							},
							loc: { start: 2920, end: 2923 },
						},
						loc: { start: 2920, end: 2924 },
					},
					directives: [],
					loc: { start: 2913, end: 2924 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "categoryIds",
						loc: { start: 2927, end: 2938 },
					},
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2941, end: 2943 },
							},
							loc: { start: 2941, end: 2943 },
						},
						loc: { start: 2940, end: 2944 },
					},
					directives: [],
					loc: { start: 2927, end: 2944 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "collectionIds",
						loc: { start: 2947, end: 2960 },
					},
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2963, end: 2965 },
							},
							loc: { start: 2963, end: 2965 },
						},
						loc: { start: 2962, end: 2966 },
					},
					directives: [],
					loc: { start: 2947, end: 2966 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "imageIds",
						loc: { start: 2969, end: 2977 },
					},
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2980, end: 2982 },
							},
							loc: { start: 2980, end: 2982 },
						},
						loc: { start: 2979, end: 2983 },
					},
					directives: [],
					loc: { start: 2969, end: 2983 },
				},
			],
			loc: { start: 2851, end: 2985 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 2991, end: 2999 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createReview",
						loc: { start: 3004, end: 3016 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 3017, end: 3022 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ReviewInput",
										loc: { start: 3024, end: 3035 },
									},
									loc: { start: 3024, end: 3035 },
								},
								loc: { start: 3024, end: 3036 },
							},
							directives: [],
							loc: { start: 3017, end: 3036 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Review",
								loc: { start: 3039, end: 3045 },
							},
							loc: { start: 3039, end: 3045 },
						},
						loc: { start: 3039, end: 3046 },
					},
					directives: [],
					loc: { start: 3004, end: 3046 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateReview",
						loc: { start: 3049, end: 3061 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 3062, end: 3064 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 3066, end: 3068 },
									},
									loc: { start: 3066, end: 3068 },
								},
								loc: { start: 3066, end: 3069 },
							},
							directives: [],
							loc: { start: 3062, end: 3069 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 3071, end: 3076 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ReviewInput",
										loc: { start: 3078, end: 3089 },
									},
									loc: { start: 3078, end: 3089 },
								},
								loc: { start: 3078, end: 3090 },
							},
							directives: [],
							loc: { start: 3071, end: 3090 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Review",
								loc: { start: 3093, end: 3099 },
							},
							loc: { start: 3093, end: 3099 },
						},
						loc: { start: 3093, end: 3100 },
					},
					directives: [],
					loc: { start: 3049, end: 3100 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteReview",
						loc: { start: 3103, end: 3115 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 3116, end: 3118 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 3120, end: 3122 },
									},
									loc: { start: 3120, end: 3122 },
								},
								loc: { start: 3120, end: 3123 },
							},
							directives: [],
							loc: { start: 3116, end: 3123 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Review",
								loc: { start: 3126, end: 3132 },
							},
							loc: { start: 3126, end: 3132 },
						},
						loc: { start: 3126, end: 3133 },
					},
					directives: [],
					loc: { start: 3103, end: 3133 },
				},
			],
			loc: { start: 2986, end: 3135 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 3142, end: 3147 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "review",
						loc: { start: 3152, end: 3158 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 3159, end: 3161 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 3163, end: 3165 },
									},
									loc: { start: 3163, end: 3165 },
								},
								loc: { start: 3163, end: 3166 },
							},
							directives: [],
							loc: { start: 3159, end: 3166 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Review",
							loc: { start: 3169, end: 3175 },
						},
						loc: { start: 3169, end: 3175 },
					},
					directives: [],
					loc: { start: 3152, end: 3175 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 3178, end: 3185 },
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
										loc: { start: 3188, end: 3194 },
									},
									loc: { start: 3188, end: 3194 },
								},
								loc: { start: 3188, end: 3195 },
							},
							loc: { start: 3187, end: 3196 },
						},
						loc: { start: 3187, end: 3197 },
					},
					directives: [],
					loc: { start: 3178, end: 3197 },
				},
			],
			loc: { start: 3137, end: 3199 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 3206, end: 3212 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 3217, end: 3219 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 3221, end: 3223 },
							},
							loc: { start: 3221, end: 3223 },
						},
						loc: { start: 3221, end: 3224 },
					},
					directives: [],
					loc: { start: 3217, end: 3224 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 3227, end: 3232 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 3234, end: 3240 },
							},
							loc: { start: 3234, end: 3240 },
						},
						loc: { start: 3234, end: 3241 },
					},
					directives: [],
					loc: { start: 3227, end: 3241 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "author",
						loc: { start: 3244, end: 3250 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 3252, end: 3258 },
							},
							loc: { start: 3252, end: 3258 },
						},
						loc: { start: 3252, end: 3259 },
					},
					directives: [],
					loc: { start: 3244, end: 3259 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "content",
						loc: { start: 3262, end: 3269 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 3271, end: 3277 },
							},
							loc: { start: 3271, end: 3277 },
						},
						loc: { start: 3271, end: 3278 },
					},
					directives: [],
					loc: { start: 3262, end: 3278 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 3281, end: 3287 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 3289, end: 3292 },
							},
							loc: { start: 3289, end: 3292 },
						},
						loc: { start: 3289, end: 3293 },
					},
					directives: [],
					loc: { start: 3281, end: 3293 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 3296, end: 3305 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 3307, end: 3315 },
							},
							loc: { start: 3307, end: 3315 },
						},
						loc: { start: 3307, end: 3316 },
					},
					directives: [],
					loc: { start: 3296, end: 3316 },
				},
			],
			loc: { start: 3201, end: 3318 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "ReviewInput",
				loc: { start: 3326, end: 3337 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 3342, end: 3347 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 3349, end: 3355 },
							},
							loc: { start: 3349, end: 3355 },
						},
						loc: { start: 3349, end: 3356 },
					},
					directives: [],
					loc: { start: 3342, end: 3356 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "author",
						loc: { start: 3359, end: 3365 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 3367, end: 3373 },
							},
							loc: { start: 3367, end: 3373 },
						},
						loc: { start: 3367, end: 3374 },
					},
					directives: [],
					loc: { start: 3359, end: 3374 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "content",
						loc: { start: 3377, end: 3384 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 3386, end: 3392 },
							},
							loc: { start: 3386, end: 3392 },
						},
						loc: { start: 3386, end: 3393 },
					},
					directives: [],
					loc: { start: 3377, end: 3393 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 3396, end: 3402 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 3404, end: 3407 },
							},
							loc: { start: 3404, end: 3407 },
						},
						loc: { start: 3404, end: 3408 },
					},
					directives: [],
					loc: { start: 3396, end: 3408 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "productId",
						loc: { start: 3411, end: 3420 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 3422, end: 3424 },
							},
							loc: { start: 3422, end: 3424 },
						},
						loc: { start: 3422, end: 3425 },
					},
					directives: [],
					loc: { start: 3411, end: 3425 },
				},
			],
			loc: { start: 3320, end: 3427 },
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
							loc: { start: 3446, end: 3451 },
						},
						loc: { start: 3446, end: 3451 },
					},
					loc: { start: 3439, end: 3451 },
				},
			],
			loc: { start: 3428, end: 3453 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: {
				kind: "Name",
				value: "DateTime",
				loc: { start: 3462, end: 3470 },
			},
			directives: [],
			loc: { start: 3455, end: 3470 },
		},
	],
	loc: { start: 0, end: 3471 },
} as unknown as DocumentNode;
