const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../service/productseservice");

const getProducts = async (req, res, next) => {
    try {
        const products = await getAllProducts();

        res.status(200).json({
            success: true,
            count: products.length,
            data: products,
        });
    } catch (error) {
        next(error);
    }
};

const getProduct = async (req, res, next) => {
    try {
        const product = await getProductById(req.params.id);

        if (!product) {
            const error = new Error("Product not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

const addProduct = async (req, res, next) => {
    try {
        const { name, category, price } = req.body;

        if (!name || !category || price === undefined) {
            const error = new Error("Name, category and price are required");
            error.status = 400;
            return next(error);
        }

        const product = await createProduct(req.body);

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

const editProduct = async (req, res, next) => {
    try {
        const product = await updateProduct(req.params.id, req.body);

        if (!product) {
            const error = new Error("Product not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

const removeProduct = async (req, res, next) => {
    try {
        const product = await deleteProduct(req.params.id);

        if (!product) {
            const error = new Error("Product not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    editProduct,
    removeProduct,
};