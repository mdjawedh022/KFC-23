const express = require("express");
const { ProductModel } = require("../Model/product.model");
const SellerRouter = express.Router();

SellerRouter.get("/get", async (req, res) => {
  try {
   
    const sellerData = await ProductModel.find();
    res.send(sellerData);
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

SellerRouter.post("/post", async (req, res) => {
  try {
    const sellerData = new ProductModel(req.body);
    await sellerData.save();
    res.send({ Msg: "Item Added Successfully" });
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

SellerRouter.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send("Item Updated Successfully");
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});
SellerRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndDelete({ _id: id });
    res.send("Item Delete Successfully");
  } catch (error) {
    res.send({ msg: "Something went wrong. Please try again later", error });
  }
});

module.exports = {
  SellerRouter,
};
