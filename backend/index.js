const express = require("express");
const { connection } = require("./Utils/db");
require("dotenv").config();
const app = express();
const cors=require('cors');
const { SellerRouter } = require("./Routes/sellerProduct.route");
const { ProductRouter } = require("./Routes/product.route");



app.get("/",(req,res)=>{
    res.send("welcome to kfc backend");
})

app.use(cors());
app.use(express.json());
app.use("/product",ProductRouter)
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