const express = require("express");
const { ProductModel } = require("../Model/product.model");

const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res) => {
  const { title, category, cate } = req.query;
  if (title && category) {
    const data = await ProductModel.find({ title, category });
    res.send({ data });
  } else if (cate) {
    const products = await ProductModel.find({ cate });
    res.send(products);
  } else if (category) {
    const products = await ProductModel.find({ category });
    res.send(products);
  } else if (title) {
    const products = await ProductModel.find({ title });
    res.send(products);
  } else {
    const products = await ProductModel.find();
    res.send({ products });
  }
});

ProductRouter.get("/get/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.find({ _id: id });
    res.send(product);
  } catch (err) {
    console.log(err);
    res.send({ Msg: "Something Went Wrong" });
  }
});

module.exports = {
  ProductRouter,
};
