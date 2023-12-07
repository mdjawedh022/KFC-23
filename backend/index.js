const express = require("express");
const { connection } = require("./Utils/db");
require("dotenv").config();
const app = express();
const cors=require('cors');
const { SellerRouter } = require("./Routes/sellerProduct.routes");
const { ProductRouter } = require("./Routes/product.routes");
const { AuthRouter } = require("./Routes/auth.routes");
const { CartRouter } = require("./Routes/cart.routes");



app.get("/",(req,res)=>{
    res.send("welcome to kfc backend");
})

app.use(cors());
app.use(express.json());
app.use("/users",AuthRouter)
app.use("/product",ProductRouter)
app.use("/cart",CartRouter)
app.use("/seller",SellerRouter)

app.listen(process.env.port,async()=>{
 try {
        await connection
        console.log("Connnected To The Database") 
    } catch (error) {
        console.log("DataBase connection Failed")
    }
    console.log(`Server is Running at the port ${process.env.port}`)
})