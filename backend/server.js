const express=require("express");
const app=express();
app.use(express.json());

const cors=require("cors");
app.use(cors());

const dotenv=require("dotenv");
dotenv.config()

const mongoose=require("mongoose");
uri=process.env.MONGODB_URI
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true});

const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDB cloud connection established");
});

const userRoute=require("./routes/userRoute.js");
app.use("/user",userRoute);
const dataRoute=require("./routes/dataRoute.js");
app.use("/data",dataRoute);

port=process.env.PORT || 5000
app.listen(port,()=>console.log("Server running on PORT: "+port));