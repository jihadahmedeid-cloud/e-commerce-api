const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    size: [{
        type: String,
      enum: ["S", "M", "L", "XL", "XXL"],
    }],
    color: [{
       type: String,
    }],
    inStock: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      default: "",
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    brand: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);


productSchema.index({ name: 1 });


module.exports = mongoose.model("Product", productSchema);