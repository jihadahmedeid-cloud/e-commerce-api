const {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} = require("../service/categoryservice");

const getCategories = async (req, res, next) => {
    try {
        const categories = await getAllCategories();

        res.status(200).json({
            success: true,
            count: categories.length,
            data: categories,
        });
    } catch (error) {
        next(error);
    }
};

const getCategory = async (req, res, next) => {
    try {
        const category = await getCategoryById(req.params.id);

        if (!category) {
            const error = new Error("Category not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            data: category,
        });
    } catch (error) {
        next(error);
    }
};

const addCategory = async (req, res, next) => {
    try {
        if (!req.body.name) {
            const error = new Error("Category name is required");
            error.status = 400;
            return next(error);
        }

        const category = await createCategory(req.body);

        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: category,
        });
    } catch (error) {
        next(error);
    }
};

const editCategory = async (req, res, next) => {
    try {
        const category = await updateCategory(req.params.id, req.body);

        if (!category) {
            const error = new Error("Category not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            data: category,
        });
    } catch (error) {
        next(error);
    }
};

const removeCategory = async (req, res, next) => {
    try {
        const category = await deleteCategory(req.params.id);

        if (!category) {
            const error = new Error("Category not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "Category deleted successfully",
            data: category,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getCategories,
    getCategory,
    addCategory,
    editCategory,
    removeCategory,
};