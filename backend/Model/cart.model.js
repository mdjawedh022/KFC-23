const mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
  {
    images: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    userId: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const CartModel = mongoose.model("carts", CartSchema);

module.exports = {
  CartModel,
};
