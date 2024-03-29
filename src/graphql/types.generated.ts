import {
	GraphQLResolveInfo,
	GraphQLScalarType,
	GraphQLScalarTypeConfig,
} from "graphql";
import { Context, Mapper } from "../types.js";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	DateTime: { input: Date; output: Date };
};

export type Cart = {
	__typename?: "Cart";
	id: Scalars["String"]["output"];
	items?: Maybe<Array<Maybe<CartItem>>>;
	order?: Maybe<Order>;
};

export type CartInput = {
	item: CartItemInput;
};

export type CartItem = {
	__typename?: "CartItem";
	cart?: Maybe<Cart>;
	id: Scalars["String"]["output"];
	product: Product;
	quantity: Scalars["Int"]["output"];
};

export type CartItemInput = {
	cartId?: InputMaybe<Scalars["String"]["input"]>;
	productId: Scalars["String"]["input"];
	quantity: Scalars["Int"]["input"];
};

export type Category = {
	__typename?: "Category";
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products?: Maybe<Array<Maybe<Product>>>;
	slug: Scalars["String"]["output"];
};

export type CategoryInput = {
	description: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
};

export type Collection = {
	__typename?: "Collection";
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products?: Maybe<Array<Maybe<Product>>>;
	slug: Scalars["String"]["output"];
};

export type CollectionInput = {
	description: Scalars["String"]["input"];
	name: Scalars["String"]["input"];
};

export type Image = {
	__typename?: "Image";
	alt: Scalars["String"]["output"];
	height: Scalars["Int"]["output"];
	id: Scalars["String"]["output"];
	url: Scalars["String"]["output"];
	width: Scalars["Int"]["output"];
};

export type ImageInput = {
	alt: Scalars["String"]["input"];
	height: Scalars["Int"]["input"];
	productId: Scalars["String"]["input"];
	url: Scalars["String"]["input"];
	width: Scalars["Int"]["input"];
};

export type Mutation = {
	__typename?: "Mutation";
	createCart: Cart;
	createCartItem: CartItem;
	createCategory: Category;
	createCollection: Collection;
	createImage: Image;
	createOrder: Order;
	createProduct: Product;
	createReview: Review;
	deleteCart: Cart;
	deleteCartItem: Cart;
	deleteCategory: Category;
	deleteCollection: Collection;
	deleteImage: Image;
	deleteOrder: Order;
	deleteProduct: Product;
	deleteReview: Review;
	updateCart: Cart;
	updateCartItem: CartItem;
	updateCategory: Category;
	updateCollection: Collection;
	updateImage: Image;
	updateOrder: Order;
	updateProduct: Product;
	updateReview: Review;
};

export type MutationcreateCartArgs = {
	input: CartInput;
};

export type MutationcreateCartItemArgs = {
	input: CartItemInput;
};

export type MutationcreateCategoryArgs = {
	input: CategoryInput;
};

export type MutationcreateCollectionArgs = {
	input: CollectionInput;
};

export type MutationcreateImageArgs = {
	input: ImageInput;
};

export type MutationcreateOrderArgs = {
	input: OrderInput;
};

export type MutationcreateProductArgs = {
	input: ProductInput;
};

export type MutationcreateReviewArgs = {
	input: ReviewInput;
};

export type MutationdeleteCartArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationdeleteCartItemArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationdeleteCategoryArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationdeleteCollectionArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationdeleteImageArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationdeleteOrderArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationdeleteProductArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationdeleteReviewArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationupdateCartArgs = {
	id: Scalars["ID"]["input"];
	input: CartInput;
};

export type MutationupdateCartItemArgs = {
	id: Scalars["ID"]["input"];
	input: CartItemInput;
};

export type MutationupdateCategoryArgs = {
	id: Scalars["ID"]["input"];
	input: CategoryInput;
};

export type MutationupdateCollectionArgs = {
	id: Scalars["ID"]["input"];
	input: CollectionInput;
};

export type MutationupdateImageArgs = {
	id: Scalars["ID"]["input"];
	input: ImageInput;
};

export type MutationupdateOrderArgs = {
	id: Scalars["ID"]["input"];
	input: OrderInput;
};

export type MutationupdateProductArgs = {
	id: Scalars["ID"]["input"];
	input: ProductInput;
};

export type MutationupdateReviewArgs = {
	id: Scalars["ID"]["input"];
	input: ReviewInput;
};

export type Order = {
	__typename?: "Order";
	createdAt: Scalars["String"]["output"];
	email: Scalars["String"]["output"];
	id: Scalars["String"]["output"];
	items?: Maybe<Scalars["String"]["output"]>;
	status: Scalars["String"]["output"];
	total: Scalars["Int"]["output"];
	updatedAt: Scalars["String"]["output"];
};

export type OrderInput = {
	cartId: Scalars["String"]["input"];
	email: Scalars["String"]["input"];
	status: Scalars["String"]["input"];
	total: Scalars["Int"]["input"];
};

export type OrderStatus =
	| "CANCELLED"
	| "COMPLETED"
	| "CREATED"
	| "PAID"
	| "PROCESSING";

export type Product = {
	__typename?: "Product";
	categories?: Maybe<Array<Maybe<Category>>>;
	collections?: Maybe<Array<Maybe<Collection>>>;
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	images?: Maybe<Array<Maybe<Image>>>;
	name: Scalars["String"]["output"];
	price: Scalars["Int"]["output"];
	reviews?: Maybe<Array<Maybe<Review>>>;
};

export type ProductInput = {
	categoryIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	collectionIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	description: Scalars["String"]["input"];
	imageIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
	name: Scalars["String"]["input"];
	price: Scalars["Int"]["input"];
};

export type Query = {
	__typename?: "Query";
	cart?: Maybe<Cart>;
	cartitem?: Maybe<CartItem>;
	cartitems: Array<CartItem>;
	carts: Array<Cart>;
	categories?: Maybe<Array<Maybe<Category>>>;
	category?: Maybe<Category>;
	collection?: Maybe<Collection>;
	collections?: Maybe<Array<Maybe<Collection>>>;
	image?: Maybe<Image>;
	images: Array<Image>;
	order?: Maybe<Order>;
	orders: Array<Order>;
	product?: Maybe<Product>;
	products?: Maybe<Array<Maybe<Product>>>;
	review?: Maybe<Review>;
	reviews: Array<Review>;
};

export type QuerycartArgs = {
	id: Scalars["ID"]["input"];
};

export type QuerycartitemArgs = {
	id: Scalars["ID"]["input"];
};

export type QuerycategoryArgs = {
	id: Scalars["ID"]["input"];
};

export type QuerycollectionArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryimageArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryorderArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryproductArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryreviewArgs = {
	id: Scalars["ID"]["input"];
};

export type Review = {
	__typename?: "Review";
	author: Scalars["String"]["output"];
	content: Scalars["String"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	rating: Scalars["Int"]["output"];
	title: Scalars["String"]["output"];
};

export type ReviewInput = {
	author: Scalars["String"]["input"];
	content: Scalars["String"]["input"];
	productId: Scalars["ID"]["input"];
	rating: Scalars["Int"]["input"];
	title: Scalars["String"]["input"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {},
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Cart: ResolverTypeWrapper<Mapper<Cart>>;
	String: ResolverTypeWrapper<Mapper<Scalars["String"]["output"]>>;
	CartInput: ResolverTypeWrapper<Mapper<CartInput>>;
	CartItem: ResolverTypeWrapper<Mapper<CartItem>>;
	Int: ResolverTypeWrapper<Mapper<Scalars["Int"]["output"]>>;
	CartItemInput: ResolverTypeWrapper<Mapper<CartItemInput>>;
	Category: ResolverTypeWrapper<Mapper<Category>>;
	ID: ResolverTypeWrapper<Mapper<Scalars["ID"]["output"]>>;
	CategoryInput: ResolverTypeWrapper<Mapper<CategoryInput>>;
	Collection: ResolverTypeWrapper<Mapper<Collection>>;
	CollectionInput: ResolverTypeWrapper<Mapper<CollectionInput>>;
	DateTime: ResolverTypeWrapper<Mapper<Scalars["DateTime"]["output"]>>;
	Image: ResolverTypeWrapper<Mapper<Image>>;
	ImageInput: ResolverTypeWrapper<Mapper<ImageInput>>;
	Mutation: ResolverTypeWrapper<{}>;
	Order: ResolverTypeWrapper<Mapper<Order>>;
	OrderInput: ResolverTypeWrapper<Mapper<OrderInput>>;
	OrderStatus: ResolverTypeWrapper<Mapper<OrderStatus>>;
	Product: ResolverTypeWrapper<Mapper<Product>>;
	ProductInput: ResolverTypeWrapper<Mapper<ProductInput>>;
	Query: ResolverTypeWrapper<{}>;
	Review: ResolverTypeWrapper<Mapper<Review>>;
	ReviewInput: ResolverTypeWrapper<Mapper<ReviewInput>>;
	Boolean: ResolverTypeWrapper<Mapper<Scalars["Boolean"]["output"]>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Cart: Mapper<Cart>;
	String: Mapper<Scalars["String"]["output"]>;
	CartInput: Mapper<CartInput>;
	CartItem: Mapper<CartItem>;
	Int: Mapper<Scalars["Int"]["output"]>;
	CartItemInput: Mapper<CartItemInput>;
	Category: Mapper<Category>;
	ID: Mapper<Scalars["ID"]["output"]>;
	CategoryInput: Mapper<CategoryInput>;
	Collection: Mapper<Collection>;
	CollectionInput: Mapper<CollectionInput>;
	DateTime: Mapper<Scalars["DateTime"]["output"]>;
	Image: Mapper<Image>;
	ImageInput: Mapper<ImageInput>;
	Mutation: {};
	Order: Mapper<Order>;
	OrderInput: Mapper<OrderInput>;
	Product: Mapper<Product>;
	ProductInput: Mapper<ProductInput>;
	Query: {};
	Review: Mapper<Review>;
	ReviewInput: Mapper<ReviewInput>;
	Boolean: Mapper<Scalars["Boolean"]["output"]>;
};

export type CartResolvers<
	ContextType = Context,
	ParentType extends ResolversParentTypes["Cart"] = ResolversParentTypes["Cart"],
> = {
	id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	items?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["CartItem"]>>>,
		ParentType,
		ContextType
	>;
	order?: Resolver<Maybe<ResolversTypes["Order"]>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemResolvers<
	ContextType = Context,
	ParentType extends ResolversParentTypes["CartItem"] = ResolversParentTypes["CartItem"],
> = {
	cart?: Resolver<Maybe<ResolversTypes["Cart"]>, ParentType, ContextType>;
	id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
	quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
	ContextType = Context,
	ParentType extends ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = {
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
		ParentType,
		ContextType
	>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
	ContextType = Context,
	ParentType extends ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"],
> = {
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
		ParentType,
		ContextType
	>;
	slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
	name: "DateTime";
}

export type ImageResolvers<
	ContextType = Context,
	ParentType extends ResolversParentTypes["Image"] = ResolversParentTypes["Image"],
> = {
	alt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	height?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	width?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
	ContextType = Context,
	ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
	createCart?: Resolver<
		ResolversTypes["Cart"],
		ParentType,
		ContextType,
		RequireFields<MutationcreateCartArgs, "input">
	>;
	createCartItem?: Resolver<
		ResolversTypes["CartItem"],
		ParentType,
		ContextType,
		RequireFields<MutationcreateCartItemArgs, "input">
	>;
	createCategory?: Resolver<
		ResolversTypes["Category"],
		ParentType,
		ContextType,
		RequireFields<MutationcreateCategoryArgs, "input">
	>;
	createCollection?: Resolver<
		ResolversTypes["Collection"],
		ParentType,
		ContextType,
		RequireFields<MutationcreateCollectionArgs, "input">
	>;
	createImage?: Resolver<
		ResolversTypes["Image"],
		ParentType,
		ContextType,
		RequireFields<MutationcreateImageArgs, "input">
	>;
	createOrder?: Resolver<
		ResolversTypes["Order"],
		ParentType,
		ContextType,
		RequireFields<MutationcreateOrderArgs, "input">
	>;
	createProduct?: Resolver<
		ResolversTypes["Product"],
		ParentType,
		ContextType,
		RequireFields<MutationcreateProductArgs, "input">
	>;
	createReview?: Resolver<
		ResolversTypes["Review"],
		ParentType,
		ContextType,
		RequireFields<MutationcreateReviewArgs, "input">
	>;
	deleteCart?: Resolver<
		ResolversTypes["Cart"],
		ParentType,
		ContextType,
		RequireFields<MutationdeleteCartArgs, "id">
	>;
	deleteCartItem?: Resolver<
		ResolversTypes["Cart"],
		ParentType,
		ContextType,
		RequireFields<MutationdeleteCartItemArgs, "id">
	>;
	deleteCategory?: Resolver<
		ResolversTypes["Category"],
		ParentType,
		ContextType,
		RequireFields<MutationdeleteCategoryArgs, "id">
	>;
	deleteCollection?: Resolver<
		ResolversTypes["Collection"],
		ParentType,
		ContextType,
		RequireFields<MutationdeleteCollectionArgs, "id">
	>;
	deleteImage?: Resolver<
		ResolversTypes["Image"],
		ParentType,
		ContextType,
		RequireFields<MutationdeleteImageArgs, "id">
	>;
	deleteOrder?: Resolver<
		ResolversTypes["Order"],
		ParentType,
		ContextType,
		RequireFields<MutationdeleteOrderArgs, "id">
	>;
	deleteProduct?: Resolver<
		ResolversTypes["Product"],
		ParentType,
		ContextType,
		RequireFields<MutationdeleteProductArgs, "id">
	>;
	deleteReview?: Resolver<
		ResolversTypes["Review"],
		ParentType,
		ContextType,
		RequireFields<MutationdeleteReviewArgs, "id">
	>;
	updateCart?: Resolver<
		ResolversTypes["Cart"],
		ParentType,
		ContextType,
		RequireFields<MutationupdateCartArgs, "id" | "input">
	>;
	updateCartItem?: Resolver<
		ResolversTypes["CartItem"],
		ParentType,
		ContextType,
		RequireFields<MutationupdateCartItemArgs, "id" | "input">
	>;
	updateCategory?: Resolver<
		ResolversTypes["Category"],
		ParentType,
		ContextType,
		RequireFields<MutationupdateCategoryArgs, "id" | "input">
	>;
	updateCollection?: Resolver<
		ResolversTypes["Collection"],
		ParentType,
		ContextType,
		RequireFields<MutationupdateCollectionArgs, "id" | "input">
	>;
	updateImage?: Resolver<
		ResolversTypes["Image"],
		ParentType,
		ContextType,
		RequireFields<MutationupdateImageArgs, "id" | "input">
	>;
	updateOrder?: Resolver<
		ResolversTypes["Order"],
		ParentType,
		ContextType,
		RequireFields<MutationupdateOrderArgs, "id" | "input">
	>;
	updateProduct?: Resolver<
		ResolversTypes["Product"],
		ParentType,
		ContextType,
		RequireFields<MutationupdateProductArgs, "id" | "input">
	>;
	updateReview?: Resolver<
		ResolversTypes["Review"],
		ParentType,
		ContextType,
		RequireFields<MutationupdateReviewArgs, "id" | "input">
	>;
};

export type OrderResolvers<
	ContextType = Context,
	ParentType extends ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = {
	createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	items?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	status?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
	ContextType = Context,
	ParentType extends ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
	categories?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Category"]>>>,
		ParentType,
		ContextType
	>;
	collections?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Collection"]>>>,
		ParentType,
		ContextType
	>;
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	images?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Image"]>>>,
		ParentType,
		ContextType
	>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	reviews?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Review"]>>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = Context,
	ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
	cart?: Resolver<
		Maybe<ResolversTypes["Cart"]>,
		ParentType,
		ContextType,
		RequireFields<QuerycartArgs, "id">
	>;
	cartitem?: Resolver<
		Maybe<ResolversTypes["CartItem"]>,
		ParentType,
		ContextType,
		RequireFields<QuerycartitemArgs, "id">
	>;
	cartitems?: Resolver<
		Array<ResolversTypes["CartItem"]>,
		ParentType,
		ContextType
	>;
	carts?: Resolver<Array<ResolversTypes["Cart"]>, ParentType, ContextType>;
	categories?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Category"]>>>,
		ParentType,
		ContextType
	>;
	category?: Resolver<
		Maybe<ResolversTypes["Category"]>,
		ParentType,
		ContextType,
		RequireFields<QuerycategoryArgs, "id">
	>;
	collection?: Resolver<
		Maybe<ResolversTypes["Collection"]>,
		ParentType,
		ContextType,
		RequireFields<QuerycollectionArgs, "id">
	>;
	collections?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Collection"]>>>,
		ParentType,
		ContextType
	>;
	image?: Resolver<
		Maybe<ResolversTypes["Image"]>,
		ParentType,
		ContextType,
		RequireFields<QueryimageArgs, "id">
	>;
	images?: Resolver<Array<ResolversTypes["Image"]>, ParentType, ContextType>;
	order?: Resolver<
		Maybe<ResolversTypes["Order"]>,
		ParentType,
		ContextType,
		RequireFields<QueryorderArgs, "id">
	>;
	orders?: Resolver<Array<ResolversTypes["Order"]>, ParentType, ContextType>;
	product?: Resolver<
		Maybe<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<QueryproductArgs, "id">
	>;
	products?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
		ParentType,
		ContextType
	>;
	review?: Resolver<
		Maybe<ResolversTypes["Review"]>,
		ParentType,
		ContextType,
		RequireFields<QueryreviewArgs, "id">
	>;
	reviews?: Resolver<Array<ResolversTypes["Review"]>, ParentType, ContextType>;
};

export type ReviewResolvers<
	ContextType = Context,
	ParentType extends ResolversParentTypes["Review"] = ResolversParentTypes["Review"],
> = {
	author?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	content?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	rating?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
	Cart?: CartResolvers<ContextType>;
	CartItem?: CartItemResolvers<ContextType>;
	Category?: CategoryResolvers<ContextType>;
	Collection?: CollectionResolvers<ContextType>;
	DateTime?: GraphQLScalarType;
	Image?: ImageResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Order?: OrderResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Review?: ReviewResolvers<ContextType>;
};
