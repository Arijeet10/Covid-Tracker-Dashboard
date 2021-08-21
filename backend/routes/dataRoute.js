const router=require("express").Router();
const CovidData=require("../models/dataModel.js");

router.route("/").get((req,res)=>{
    CovidData.find()
        .then(data=>{res.json(data)})
        .catch(err=>{res.status(400).json("Error: "+err)})
})

module.exports=router;