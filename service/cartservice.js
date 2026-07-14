const Cart = require("../models/cart");
const Product = require("../models/product");

const calculateTotalPrice = async (cart) => {
    let total = 0;

    for (const item of cart.items) {
        const product = await Product.findById(item.product);

        if (product) {
            total += product.price * item.quantity;
        }
    }

    cart.totalPrice = total;
};

const getCart = async (userId) => {
    return await Cart.findOne({ user: userId }).populate("items.product");
};

const addToCart = async (user, productId, quantity = 1) => {
    const product = await Product.findById(productId);

    if (!product) return null;

    let cart = await Cart.findOne({ user });

    if (!cart) {
        cart = await Cart.create({
            user,
            items: [],
            totalPrice: 0,
        });
    }

    const item = cart.items.find(
        (i) => i.product.toString() === productId
    );

    if (item) {
        item.quantity += quantity;
    } else {
        cart.items.push({
            product: productId,
            quantity,
        });
    }

    await calculateTotalPrice(cart);

    await cart.save();

    await cart.populate("items.product");

    return cart;
};

const updateCart = async (userId, productId, quantity) => {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) return null;

    const item = cart.items.find(
        (i) => i.product.toString() === productId
    );

    if (!item) return false;

    item.quantity = quantity;

    await calculateTotalPrice(cart);

    await cart.save();

    await cart.populate("items.product");

    return cart;
};

const removeFromCart = async (userId, productId) => {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) return null;

    cart.items = cart.items.filter(
        (i) => i.product.toString() !== productId
    );

    await calculateTotalPrice(cart);

    await cart.save();

    await cart.populate("items.product");

    return cart;
};

const clearCart = async (userId) => {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) return null;

    cart.items = [];
    cart.totalPrice = 0;

    await cart.save();

    return cart;
};

module.exports = {
    getCart,
    addToCart,
    updateCart,
    removeFromCart,
    clearCart,
};