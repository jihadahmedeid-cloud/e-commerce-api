const express = require("express");

const router = express.Router();

const {
    getCategories,
    getCategory,
    addCategory,
    editCategory,
    removeCategory,
} = require("../controller/categorycontroller");

router.get("/", getCategories);

router.get("/:id", getCategory);

router.post("/", addCategory);

router.put("/:id", editCategory);

router.delete("/:id", removeCategory);

module.exports = router;