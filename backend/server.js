const express=require("express");
const app=express();

const dotenv=require("dotenv");
dotenv.config()




port=process.env.PORT || 5000
app.listen(port,()=>console.log("Server running on PORT: "+port));