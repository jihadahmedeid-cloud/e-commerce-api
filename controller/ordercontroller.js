const {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
} = require("../service/orderservice");

const getOrders = async (req, res, next) => {
    try {
        const orders = await getAllOrders();

        res.status(200).json({
            success: true,
            count: orders.length,
            data: orders,
        });
    } catch (error) {
        next(error);
    }
};

const getOrder = async (req, res, next) => {
    try {
        const order = await getOrderById(req.params.id);

        if (!order) {
            const error = new Error("Order not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            data: order,
        });
    } catch (error) {
        next(error);
    }
};

const addOrder = async (req, res, next) => {
    try {
        const order = await createOrder(req.body);

        res.status(201).json({
            success: true,
            message: "Order created successfully",
            data: order,
        });
    } catch (error) {
        next(error);
    }
};

const editOrder = async (req, res, next) => {
    try {
        const order = await updateOrder(req.params.id, req.body);

        if (!order) {
            const error = new Error("Order not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "Order updated successfully",
            data: order,
        });
    } catch (error) {
        next(error);
    }
};

const removeOrder = async (req, res, next) => {
    try {
        const order = await deleteOrder(req.params.id);

        if (!order) {
            const error = new Error("Order not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "Order deleted successfully",
            data: order,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getOrders,
    getOrder,
    addOrder,
    editOrder,
    removeOrder,
};