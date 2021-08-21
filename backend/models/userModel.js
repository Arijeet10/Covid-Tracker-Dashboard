const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    "First Name":{type:String},
    "Last Name":{type:String},
    Email:{type:String},
    Password:{type:String}
})

const User=mongoose.model("User",userSchema);

module.exports=User;