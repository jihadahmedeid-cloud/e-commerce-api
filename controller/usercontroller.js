const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require("../service/userservice");

const getUsers = async (req, res, next) => {
    try {
        const users = await getAllUsers();

        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });
    } catch (error) {
        next(error);
    }
};

const getUser = async (req, res, next) => {
    try {
        const user = await getUserById(req.params.id);

        if (!user) {
            const error = new Error("User not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

const addUser = async (req, res, next) => {
    try {
        const { name, email, password, phoneNumber, address } = req.body;

        if (!name || !email || !password || !phoneNumber || !address) {
            const error = new Error("Please fill all required fields");
            error.status = 400;
            return next(error);
        }

        const user = await createUser(req.body);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

const editUser = async (req, res, next) => {
    try {
        const user = await updateUser(req.params.id, req.body);

        if (!user) {
            const error = new Error("User not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

const removeUser = async (req, res, next) => {
    try {
        const user = await deleteUser(req.params.id);

        if (!user) {
            const error = new Error("User not found");
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getUsers,
    getUser,
    addUser,
    editUser,
    removeUser,
};