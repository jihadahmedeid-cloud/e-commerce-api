const Order = require("../models/order");

const getAllOrders = async () => {
    return await Order.find()
        .populate("user")
        .populate("items.product");
};

const getOrderById = async (id) => {
    return await Order.findById(id)
        .populate("user")
        .populate("items.product");
};

const createOrder = async (data) => {
    return await Order.create(data);
};

const updateOrder = async (id, data) => {
    return await Order.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true,
        }
    );
};

const deleteOrder = async (id) => {
    return await Order.findByIdAndDelete(id);
};

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
};