const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AdminUserModel } = require("../Model/adminUser.model");
const AdminUserRouter = express.Router();

AdminUserRouter.post("/signup", async (req, res) => {
  const { name, email,  password } = req.body;
  try {
    bcrypt.hash(password, 4, async (err, hash) => {
      const user = new AdminUserModel({ name, email, password: hash });
      await user.save();
      res.send({ msg: "user has been registered" });
    });
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err.message });
    console.log(err);
  }
});

AdminUserRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AdminUserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userId: user[0]._id }, "jawed");
          res.send({
            msg: "Login Successful",
            token: token,
            user: user[0].name,
          });
        } else {
          res.send({ msg: "Wrong Credntials" });
        }
      });
    } else {
      res.send({ msg: "Wrong Credntials", err: err.message });
    }
  } catch (err) {
    res.send({ msg: "Something went Wrong", error: err.message });
  }
});

module.exports = {
  AdminUserRouter,
};
