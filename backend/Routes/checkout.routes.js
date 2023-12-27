const express = require("express");
const { CheckoutModel } = require("../Model/checkout.model");

const CheckoutRouter = express.Router();
// ----------------------------------
CheckoutRouter.post("/post", async (req, res) => {
  try {
    const checkout = new CheckoutModel(req.body);
    await checkout.save();
    res.send({ msg: "Successfully added on checkout!" });
  } catch (err) {
    res.send({ msg: "Internal server error", err });
  }
});
// -----------------------------------------
CheckoutRouter.delete("/delete", async (req, res) => {
  try {
    await CheckoutModel.deleteMany({});

    res.send({ msg: "cleared!" });
  } catch (err) {
    res.send({ msg: "Internal server Error", err });
  }
});
module.exports={
CheckoutRouter ,
}