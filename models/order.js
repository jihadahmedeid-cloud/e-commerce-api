const mongoose = require('mongoose');



const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "User is required"],
},
        items: [
            {
                product:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: [true,"product is required"]
                },
                quantity: {
                    type: Number,
                    required: [true ,"Quantity is required"],
                    min: [1, "Quantity must be at least 1"],
                }
            }
        ],
        totalPrice: {
            type: Number,
            required: [true, "Total price is required"],
            min: [0, "Total price cannot be negative"],
        },
        shippingAddress: {
            type: String,
            required: [true, "Shipping address is required"],
            trim: true
        },
        paymentMethod: {
            type: String,
            enum: ["Cash", "Card"],
            default: "Cash",
        },
        status: {
            type: String,
            enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
            default: "Pending",

        }
    },
    {timestamps: true}
)

orderSchema.index({ user: 1 });
orderSchema.index({ status: 1 });


module.exports = mongoose.model("Order", orderSchema);