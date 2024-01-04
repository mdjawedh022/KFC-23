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
CheckoutGetRouter.delete("/delete/:id",async(req,res)=>{
  try{
    await CheckoutModel.findByIdAndDelete({_id:id})
    res.send({msg:"order data has been deleted!"})
  }catch(err){
    res.send({msg:"internal server error!"})
  }
})

module.exports = {
  CheckoutGetRouter,
};