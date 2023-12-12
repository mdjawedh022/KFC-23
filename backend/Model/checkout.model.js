const mongoose = require("mongoose");

const CheckoutSchema = mongoose.Schema(
  {
    images: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required:true },
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const CheckoutModel = mongoose.model("Checkout", CheckoutSchema);

module.exports = {
  CheckoutModel,
};
