const express = require("express");

const router = express.Router();

const {
    getUserCart,
    addProductToCart,
    editCart,
    deleteFromCart,
    deleteCart,
} = require("../controller/cartcontroler");

router.get("/:userId", getUserCart);

router.post("/", addProductToCart);

router.put("/:userId/:productId", editCart);

router.delete("/:userId/:productId", deleteFromCart);

router.delete("/:userId", deleteCart);

module.exports = router;