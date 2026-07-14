const express = require("express");

const app = express();

const categoryRoutes = require("./routes/categoryroutes");
const productRoutes = require("./routes/productroutes");
const userRoutes = require("./routes/userroutes");
const orderRoutes = require("./routes/orderroutes");
const cartRoutes = require("./routes/cartroutes");

const errorHandling = require("./middleware/errorhandling");

app.use(express.json());

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);
app.use("/cart", cartRoutes);

app.use(errorHandling);

module.exports = app;