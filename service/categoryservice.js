const Category = require("../models/Category");

const getAllCategories = async () => {
    return await Category.find();
};

const getCategoryById = async (id) => {
    return await Category.findById(id);
};

const createCategory = async (data) => {
    return await Category.create(data);
};

const updateCategory = async (id, data) => {
    return await Category.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true,
        }
    );
};

const deleteCategory = async (id) => {
    return await Category.findByIdAndDelete(id);
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};