
const express=require("express");
const { AuthModel } = require("../Model/auth.model");

const authgetRouter=express.Router();


authgetRouter.get("/",async(req,res)=>{
    try{
        const getUser=await AuthModel.find()
        res.send(getUser)
    }catch(err){
        res.send({msg:"internal server error!"})
    }
})
// ---------------------------------------------------

authgetRouter.delete("/delete/:id",async(req,res)=>{
    try{
    const {id}=req.params;
        await AuthModel.findByIdAndDelete({_id:id});
    res.send({msg:"user data has been delete"})
    }catch(err){
        res.send({msg:"internal server error!"})
    }
})
module.exports = {
  authgetRouter,
};