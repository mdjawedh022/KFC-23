const express = require("express");
const { CartModel } = require("../Model/cart.model");

const CartRouter = express.Router();

// -----------get cart data--------------
CartRouter.get("/", async (req, res) => {
  const {userId}=req.body
  // console.log("userId",userId);
  try {
    const dataCart = await CartModel.find({ userId });
    res.status(200).send(dataCart);
  } catch (err) {
    res.send({ msg: "Something went wrong!", err });
  }
});

// ------------post data in cart--------------------

CartRouter.post("/post", async (req, res) => {
  try {
    const data = new CartModel(req.body);
    await data.save();
    res.send({ msg: "Item added in cart!" });
  } catch (err) {
    res.send({ msg: "internal server error!", err });
  }
});

// ----------------------update---------
CartRouter.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    await CartModel.findByIdAndUpdate({ _id: id }, payload);
    res.send({ msg: "Item Quantity updated!" });
  } catch (err) {
    res.send({ msg: "Internal server Error", err });
  }
});

// --------------------delete-------------------

CartRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await CartModel.findByIdAndDelete({ _id: id });
    res.send({ msg: "Item delete from cart!" });
  } catch (err) {
    res.send({ msg: "Internal server Error", err });
  }
});

CartRouter.delete("/delete", async (req, res) => {
  try {
    await CartModel.deleteMany({});

    res.send({ msg: "Cart cleared!" });
  } catch (err) {
    res.send({ msg: "Internal server Error", err });
  }
});

module.exports = {
  CartRouter,
};
