const express = require("express");

const router = express.Router();

const {
    getOrders,
    getOrder,
    addOrder,
    editOrder,
    removeOrder,
} = require("../controller/ordercontroller");

router.get("/", getOrders);

router.get("/:id", getOrder);

router.post("/", addOrder);

router.put("/:id", editOrder);

router.delete("/:id", removeOrder);

module.exports = router;