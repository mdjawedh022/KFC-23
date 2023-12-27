const express = require("express");
const { CheckoutModel } = require("../Model/checkout.model");

const CheckoutGetRouter = express.Router();

CheckoutGetRouter.get("/", async (req, res) => {
  try {
    const getCheckout = await CheckoutModel.find();
    res.send(getCheckout);
  } catch (err) {
    res.send({ msg: "Internal server error", err });
  }
});

module.exports = {
  CheckoutGetRouter,
};