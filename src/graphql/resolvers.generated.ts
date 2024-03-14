/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Cart } from "./schema/resolvers/Cart";
import { CartItem } from "./schema/resolvers/CartItem";
import { Category } from "./schema/resolvers/Category";
import { Collection } from "./schema/resolvers/Collection";
import { Images } from "./schema/resolvers/Images";
import { createCart as Mutation_createCart } from "./schema/resolvers/Mutation/createCart";
import { createCategory as Mutation_createCategory } from "./schema/resolvers/Mutation/createCategory";
import { createCollection as Mutation_createCollection } from "./schema/resolvers/Mutation/createCollection";
import { createOrder as Mutation_createOrder } from "./schema/resolvers/Mutation/createOrder";
import { createProduct as Mutation_createProduct } from "./schema/resolvers/Mutation/createProduct";
import { deleteCart as Mutation_deleteCart } from "./schema/resolvers/Mutation/deleteCart";
import { deleteCategory as Mutation_deleteCategory } from "./schema/resolvers/Mutation/deleteCategory";
import { deleteCollection as Mutation_deleteCollection } from "./schema/resolvers/Mutation/deleteCollection";
import { deleteOrder as Mutation_deleteOrder } from "./schema/resolvers/Mutation/deleteOrder";
import { deleteProduct as Mutation_deleteProduct } from "./schema/resolvers/Mutation/deleteProduct";
import { updateCart as Mutation_updateCart } from "./schema/resolvers/Mutation/updateCart";
import { updateCategory as Mutation_updateCategory } from "./schema/resolvers/Mutation/updateCategory";
import { updateCollection as Mutation_updateCollection } from "./schema/resolvers/Mutation/updateCollection";
import { updateOrder as Mutation_updateOrder } from "./schema/resolvers/Mutation/updateOrder";
import { updateProduct as Mutation_updateProduct } from "./schema/resolvers/Mutation/updateProduct";
import { Order } from "./schema/resolvers/Order";
import { Product } from "./schema/resolvers/Product";
import { card as Query_card } from "./schema/resolvers/Query/card";
import { cards as Query_cards } from "./schema/resolvers/Query/cards";
import { categories as Query_categories } from "./schema/resolvers/Query/categories";
import { category as Query_category } from "./schema/resolvers/Query/category";
import { collection as Query_collection } from "./schema/resolvers/Query/collection";
import { collections as Query_collections } from "./schema/resolvers/Query/collections";
import { order as Query_order } from "./schema/resolvers/Query/order";
import { orders as Query_orders } from "./schema/resolvers/Query/orders";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
export const resolvers: Resolvers = {
  Query: {
    card: Query_card,
    cards: Query_cards,
    categories: Query_categories,
    category: Query_category,
    collection: Query_collection,
    collections: Query_collections,
    order: Query_order,
    orders: Query_orders,
    product: Query_product,
    products: Query_products,
  },
  Mutation: {
    createCart: Mutation_createCart,
    createCategory: Mutation_createCategory,
    createCollection: Mutation_createCollection,
    createOrder: Mutation_createOrder,
    createProduct: Mutation_createProduct,
    deleteCart: Mutation_deleteCart,
    deleteCategory: Mutation_deleteCategory,
    deleteCollection: Mutation_deleteCollection,
    deleteOrder: Mutation_deleteOrder,
    deleteProduct: Mutation_deleteProduct,
    updateCart: Mutation_updateCart,
    updateCategory: Mutation_updateCategory,
    updateCollection: Mutation_updateCollection,
    updateOrder: Mutation_updateOrder,
    updateProduct: Mutation_updateProduct,
  },

  Cart: Cart,
  CartItem: CartItem,
  Category: Category,
  Collection: Collection,
  Images: Images,
  Order: Order,
  Product: Product,
};
