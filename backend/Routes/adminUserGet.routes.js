const express = require("express");
const { AdminUserModel } = require("../Model/adminUser.model");


const adminUsergetRouter = express.Router();

adminUsergetRouter.get("/", async (req, res) => {
  try {
    const getUser = await AdminUserModel.find();
    res.send(getUser);
  } catch (err) {
    res.send({ msg: "internal server error!" });
  }
});
// ---------------------------------------------------

adminUsergetRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await AdminUserModel.findByIdAndDelete({ _id: id });
    res.send({ msg: "user data has been delete" });
  } catch (err) {
    res.send({ msg: "internal server error!" });
  }
});

module.exports = {
  adminUsergetRouter,
};