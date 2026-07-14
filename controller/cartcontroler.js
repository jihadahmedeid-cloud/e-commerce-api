const {
    getCart,
    addToCart,
    updateCart,
    removeFromCart,
    clearCart,
} = require("../service/cartservice");

const getUserCart = async (req, res, next) => {
    try {
        const cart = await getCart(req.params.userId);

        if (!cart) {
            const error = new Error("Cart not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            data: cart,
        });
    } catch (error) {
        next(error);
    }
};

const addProductToCart = async (req, res, next) => {
    try {
        const { user, product, quantity = 1 } = req.body;

        const cart = await addToCart(user, product, quantity);

        if (!cart) {
            const error = new Error("Product not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "Product added to cart",
            data: cart,
        });
    } catch (error) {
        next(error);
    }
};

const editCart = async (req, res, next) => {
    try {
        const { quantity } = req.body;

        if (quantity < 1) {
            const error = new Error("Quantity must be at least 1");
            error.status = 400;
            return next(error);
        }

        const cart = await updateCart(
            req.params.userId,
            req.params.productId,
            quantity
        );

        if (cart === null) {
            const error = new Error("Cart not found");
            error.status = 404;
            return next(error);
        }

        if (cart === false) {
            const error = new Error("Product not found in cart");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "Cart updated successfully",
            data: cart,
        });
    } catch (error) {
        next(error);
    }
};

const deleteFromCart = async (req, res, next) => {
    try {
        const cart = await removeFromCart(
            req.params.userId,
            req.params.productId
        );

        if (!cart) {
            const error = new Error("Cart not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "Product removed from cart",
            data: cart,
        });
    } catch (error) {
        next(error);
    }
};

const deleteCart = async (req, res, next) => {
    try {
        const cart = await clearCart(req.params.userId);

        if (!cart) {
            const error = new Error("Cart not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "Cart cleared successfully",
            data: cart,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getUserCart,
    addProductToCart,
    editCart,
    deleteFromCart,
    deleteCart,
};