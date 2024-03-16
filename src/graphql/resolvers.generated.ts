/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Cart } from "./schema/resolvers/Cart";
import { CartItem } from "./schema/resolvers/CartItem";
import { Category } from "./schema/resolvers/Category";
import { Collection } from "./schema/resolvers/Collection";
import { Image } from "./schema/resolvers/Image";
import { createCart as Mutation_createCart } from "./schema/resolvers/Mutation/createCart";
import { createCartItem as Mutation_createCartItem } from "./schema/resolvers/Mutation/createCartItem";
import { createCategory as Mutation_createCategory } from "./schema/resolvers/Mutation/createCategory";
import { createCollection as Mutation_createCollection } from "./schema/resolvers/Mutation/createCollection";
import { createImage as Mutation_createImage } from "./schema/resolvers/Mutation/createImage";
import { createOrder as Mutation_createOrder } from "./schema/resolvers/Mutation/createOrder";
import { createProduct as Mutation_createProduct } from "./schema/resolvers/Mutation/createProduct";
import { deleteCart as Mutation_deleteCart } from "./schema/resolvers/Mutation/deleteCart";
import { deleteCartItem as Mutation_deleteCartItem } from "./schema/resolvers/Mutation/deleteCartItem";
import { deleteCategory as Mutation_deleteCategory } from "./schema/resolvers/Mutation/deleteCategory";
import { deleteCollection as Mutation_deleteCollection } from "./schema/resolvers/Mutation/deleteCollection";
import { deleteImage as Mutation_deleteImage } from "./schema/resolvers/Mutation/deleteImage";
import { deleteOrder as Mutation_deleteOrder } from "./schema/resolvers/Mutation/deleteOrder";
import { deleteProduct as Mutation_deleteProduct } from "./schema/resolvers/Mutation/deleteProduct";
import { updateCart as Mutation_updateCart } from "./schema/resolvers/Mutation/updateCart";
import { updateCartItem as Mutation_updateCartItem } from "./schema/resolvers/Mutation/updateCartItem";
import { updateCategory as Mutation_updateCategory } from "./schema/resolvers/Mutation/updateCategory";
import { updateCollection as Mutation_updateCollection } from "./schema/resolvers/Mutation/updateCollection";
import { updateImage as Mutation_updateImage } from "./schema/resolvers/Mutation/updateImage";
import { updateOrder as Mutation_updateOrder } from "./schema/resolvers/Mutation/updateOrder";
import { updateProduct as Mutation_updateProduct } from "./schema/resolvers/Mutation/updateProduct";
import { Order } from "./schema/resolvers/Order";
import { Product } from "./schema/resolvers/Product";
import { cart as Query_cart } from "./schema/resolvers/Query/cart";
import { cartitem as Query_cartitem } from "./schema/resolvers/Query/cartitem";
import { cartitems as Query_cartitems } from "./schema/resolvers/Query/cartitems";
import { carts as Query_carts } from "./schema/resolvers/Query/carts";
import { categories as Query_categories } from "./schema/resolvers/Query/categories";
import { category as Query_category } from "./schema/resolvers/Query/category";
import { collection as Query_collection } from "./schema/resolvers/Query/collection";
import { collections as Query_collections } from "./schema/resolvers/Query/collections";
import { image as Query_image } from "./schema/resolvers/Query/image";
import { images as Query_images } from "./schema/resolvers/Query/images";
import { order as Query_order } from "./schema/resolvers/Query/order";
import { orders as Query_orders } from "./schema/resolvers/Query/orders";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
export const resolvers: Resolvers = {
  Query: {
    cart: Query_cart,
    cartitem: Query_cartitem,
    cartitems: Query_cartitems,
    carts: Query_carts,
    categories: Query_categories,
    category: Query_category,
    collection: Query_collection,
    collections: Query_collections,
    image: Query_image,
    images: Query_images,
    order: Query_order,
    orders: Query_orders,
    product: Query_product,
    products: Query_products,
  },
  Mutation: {
    createCart: Mutation_createCart,
    createCartItem: Mutation_createCartItem,
    createCategory: Mutation_createCategory,
    createCollection: Mutation_createCollection,
    createImage: Mutation_createImage,
    createOrder: Mutation_createOrder,
    createProduct: Mutation_createProduct,
    deleteCart: Mutation_deleteCart,
    deleteCartItem: Mutation_deleteCartItem,
    deleteCategory: Mutation_deleteCategory,
    deleteCollection: Mutation_deleteCollection,
    deleteImage: Mutation_deleteImage,
    deleteOrder: Mutation_deleteOrder,
    deleteProduct: Mutation_deleteProduct,
    updateCart: Mutation_updateCart,
    updateCartItem: Mutation_updateCartItem,
    updateCategory: Mutation_updateCategory,
    updateCollection: Mutation_updateCollection,
    updateImage: Mutation_updateImage,
    updateOrder: Mutation_updateOrder,
    updateProduct: Mutation_updateProduct,
  },

  Cart: Cart,
  CartItem: CartItem,
  Category: Category,
  Collection: Collection,
  Image: Image,
  Order: Order,
  Product: Product,
};
