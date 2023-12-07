const express =require("express");
const { AuthModel}=require("../Model/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AuthRouter=express.Router();

AuthRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    bcrypt.hash(password, 4, async (err, hash) => {
      const user = new AuthModel({ name, email, password: hash });
      await user.save();
      res.send({ msg: "user has been registered" });
    });
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err.message });
    console.log(err);
  }
});


AuthRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
const user=await AuthModel.find({email});
if(user.length>0){
    bcrypt.compare(password,user[0].password,(err,result)=>{
        if(result){
            const token =jwt.sign({userId:user[0]._id},"kfc");
            res.send({msg:"Login Successful","token":token,"user":user[0].name}) 
        } else {
            res.send({msg:"Wrong Credential!"});
        }
    })
} else {
    res.send({msg:"wrong Credential","err":err.message})
}
    }catch(err){
        res.send({ msg: "Something went Wrong", "err": err.message });
    }
})

module.exports={
    AuthRouter
}