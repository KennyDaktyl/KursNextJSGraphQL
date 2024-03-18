"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const Cart_1 = require("./schema/resolvers/Cart");
const CartItem_1 = require("./schema/resolvers/CartItem");
const Category_1 = require("./schema/resolvers/Category");
const Collection_1 = require("./schema/resolvers/Collection");
const Image_1 = require("./schema/resolvers/Image");
const createCart_1 = require("./schema/resolvers/Mutation/createCart");
const createCartItem_1 = require("./schema/resolvers/Mutation/createCartItem");
const createCategory_1 = require("./schema/resolvers/Mutation/createCategory");
const createCollection_1 = require("./schema/resolvers/Mutation/createCollection");
const createImage_1 = require("./schema/resolvers/Mutation/createImage");
const createOrder_1 = require("./schema/resolvers/Mutation/createOrder");
const createProduct_1 = require("./schema/resolvers/Mutation/createProduct");
const createReview_1 = require("./schema/resolvers/Mutation/createReview");
const deleteCart_1 = require("./schema/resolvers/Mutation/deleteCart");
const deleteCartItem_1 = require("./schema/resolvers/Mutation/deleteCartItem");
const deleteCategory_1 = require("./schema/resolvers/Mutation/deleteCategory");
const deleteCollection_1 = require("./schema/resolvers/Mutation/deleteCollection");
const deleteImage_1 = require("./schema/resolvers/Mutation/deleteImage");
const deleteOrder_1 = require("./schema/resolvers/Mutation/deleteOrder");
const deleteProduct_1 = require("./schema/resolvers/Mutation/deleteProduct");
const deleteReview_1 = require("./schema/resolvers/Mutation/deleteReview");
const updateCart_1 = require("./schema/resolvers/Mutation/updateCart");
const updateCartItem_1 = require("./schema/resolvers/Mutation/updateCartItem");
const updateCategory_1 = require("./schema/resolvers/Mutation/updateCategory");
const updateCollection_1 = require("./schema/resolvers/Mutation/updateCollection");
const updateImage_1 = require("./schema/resolvers/Mutation/updateImage");
const updateOrder_1 = require("./schema/resolvers/Mutation/updateOrder");
const updateProduct_1 = require("./schema/resolvers/Mutation/updateProduct");
const updateReview_1 = require("./schema/resolvers/Mutation/updateReview");
const Order_1 = require("./schema/resolvers/Order");
const Product_1 = require("./schema/resolvers/Product");
const cart_1 = require("./schema/resolvers/Query/cart");
const cartitem_1 = require("./schema/resolvers/Query/cartitem");
const cartitems_1 = require("./schema/resolvers/Query/cartitems");
const carts_1 = require("./schema/resolvers/Query/carts");
const categories_1 = require("./schema/resolvers/Query/categories");
const category_1 = require("./schema/resolvers/Query/category");
const collection_1 = require("./schema/resolvers/Query/collection");
const collections_1 = require("./schema/resolvers/Query/collections");
const image_1 = require("./schema/resolvers/Query/image");
const images_1 = require("./schema/resolvers/Query/images");
const order_1 = require("./schema/resolvers/Query/order");
const orders_1 = require("./schema/resolvers/Query/orders");
const product_1 = require("./schema/resolvers/Query/product");
const products_1 = require("./schema/resolvers/Query/products");
const review_1 = require("./schema/resolvers/Query/review");
const reviews_1 = require("./schema/resolvers/Query/reviews");
const Review_1 = require("./schema/resolvers/Review");
const graphql_scalars_1 = require("graphql-scalars");
exports.resolvers = {
    Query: {
        cart: cart_1.cart,
        cartitem: cartitem_1.cartitem,
        cartitems: cartitems_1.cartitems,
        carts: carts_1.carts,
        categories: categories_1.categories,
        category: category_1.category,
        collection: collection_1.collection,
        collections: collections_1.collections,
        image: image_1.image,
        images: images_1.images,
        order: order_1.order,
        orders: orders_1.orders,
        product: product_1.product,
        products: products_1.products,
        review: review_1.review,
        reviews: reviews_1.reviews,
    },
    Mutation: {
        createCart: createCart_1.createCart,
        createCartItem: createCartItem_1.createCartItem,
        createCategory: createCategory_1.createCategory,
        createCollection: createCollection_1.createCollection,
        createImage: createImage_1.createImage,
        createOrder: createOrder_1.createOrder,
        createProduct: createProduct_1.createProduct,
        createReview: createReview_1.createReview,
        deleteCart: deleteCart_1.deleteCart,
        deleteCartItem: deleteCartItem_1.deleteCartItem,
        deleteCategory: deleteCategory_1.deleteCategory,
        deleteCollection: deleteCollection_1.deleteCollection,
        deleteImage: deleteImage_1.deleteImage,
        deleteOrder: deleteOrder_1.deleteOrder,
        deleteProduct: deleteProduct_1.deleteProduct,
        deleteReview: deleteReview_1.deleteReview,
        updateCart: updateCart_1.updateCart,
        updateCartItem: updateCartItem_1.updateCartItem,
        updateCategory: updateCategory_1.updateCategory,
        updateCollection: updateCollection_1.updateCollection,
        updateImage: updateImage_1.updateImage,
        updateOrder: updateOrder_1.updateOrder,
        updateProduct: updateProduct_1.updateProduct,
        updateReview: updateReview_1.updateReview,
    },
    Cart: Cart_1.Cart,
    CartItem: CartItem_1.CartItem,
    Category: Category_1.Category,
    Collection: Collection_1.Collection,
    Image: Image_1.Image,
    Order: Order_1.Order,
    Product: Product_1.Product,
    Review: Review_1.Review,
    DateTime: graphql_scalars_1.DateTimeResolver,
};
//# sourceMappingURL=resolvers.generated.js.map