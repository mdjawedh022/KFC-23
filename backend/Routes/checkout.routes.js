const express = require("express");
const { CheckoutModel } = require("../Model/checkout.model");

const CheckRouter = express.Router();

CheckRouter.get("/", async (req, res) => {
  try {
    const getCheckout = await CheckoutModel.find();
    res.send(getCheckout);
  } catch (err) {
    res.send({ msg: "Internal server error", err });
  }
});

// ----------------------------------
CheckRouter.post("/post", async (req, res) => {
  try {
    const checkout = new CheckoutModel(req.body);
    await checkout.save();
    res.send({ msg: "Successfully added on checkout!" });
  } catch (err) {
    res.send({ msg: "Internal server error", err });
  }
});
// -----------------------------------------
CheckRouter.delete("/delete", async (req, res) => {
  try {
    await CheckoutModel.deleteMany({});

    res.send({ msg: "cleared!" });
  } catch (err) {
    res.send({ msg: "Internal server Error", err });
  }
});
module.exports={
CheckRouter
}