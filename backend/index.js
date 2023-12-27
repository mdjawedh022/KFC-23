const express = require("express");
const { connection } = require("./Utils/db");
require("dotenv").config();
const app = express();
const cors = require("cors");
const { SellerRouter } = require("./Routes/sellerProduct.routes");
const { ProductRouter } = require("./Routes/product.routes");
const { AuthRouter } = require("./Routes/auth.routes");
const { CartRouter } = require("./Routes/cart.routes");
const { CheckoutRouter } = require("./Routes/checkout.routes");
const { authenticate } = require("./middleware/auth.middleware");
const { AdminUserRouter } = require("./Routes/adminUser.routes");
const { CheckoutGetRouter } = require("./Routes/checkoutGet.routes");

app.get("/", (req, res) => {
  res.send("welcome to kfc backend");
});

app.use(cors());
app.use(express.json());
// app.use(cookieParser());

app.use("/users", AuthRouter);
app.use("/product", ProductRouter);
app.use("/carts", authenticate, CartRouter);
app.use("/admin/user", AdminUserRouter);
app.use("/seller",  SellerRouter);
app.use("/checkout", authenticate, CheckoutRouter);
app.use("/order", CheckoutGetRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connnected To The Database");
  } catch (error) {
    console.log("DataBase connection Failed");
  }
  console.log(`Server is Running at the port ${process.env.port}`);
});
