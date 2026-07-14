const Product = require("../models/product");

const getAllProducts = async () => {
    return await Product.find().populate("category", "name");
};

const getProductById = async (id) => {
    return await Product.findById(id).populate("category", "name");
};

const createProduct = async (data) => {
    return await Product.create(data);
};

const updateProduct = async (id, data) => {
    return await Product.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true,
        }
    );
};

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};