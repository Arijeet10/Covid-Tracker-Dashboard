const router = require("express").Router();
const User = require("../models/userModel.js");

//get all users in the database
router.route("/").get((req, res) => {
    User.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json("Error: " + err));
})


//for user signup
router.route("/").post((req, res) => {
    User.find({
        Email: req.body.email
    },function(err,result) {
            if (result.length) {
                res.json("user exists");
            }
            else{
                const newUser=new User({
                    "First Name":req.body.firstname,
                    "Last Name":req.body.lastname,
                    "Email":req.body.email,
                    "Password":req.body.password
                })
                newUser.save()
                    .then(()=>res.json("account created"))
                    .catch(err=>res.status(400).json("Error: "+err));
            } 
        }
    )
})

//user login
router.route("/:email").post((req,res)=>{
    User.find({
        Email:req.params.email
    },
    function(err,data){
        if(data.length){
            res.json(data);
        }else{
            res.status(400).json("no user detected, User: "+err);
        }
    })
})


module.exports = router;