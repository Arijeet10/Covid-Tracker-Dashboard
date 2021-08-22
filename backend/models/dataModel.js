const mongoose=require("mongoose");

const dataSchema=new mongoose.Schema({
    "Patient Number":{type:String},
    "State Patient Number":{type:String},
    // "Date Announced":{type:String},
    // "Estimated Onset Date":{type:String},
    // "Age Bracket":{type:String},
    // Gender:{type:String},
    // "Detected City":{type:String},
    // "Detected District":{type:String},
    // "Detected State":{type:String},
    // "State code":{type:String},
    // "Num Cases":{type:String},
    // "Current Status":{type:String},
    // Notes:{type:String},
    // Source_1:{type:String},
    // Source_2:{type:String},
    // Source_3:{type:String},
    // Nationality:{type:String},
    // "Type of transmission":{type:String},
    // "Status Change Date":{type:String},
    // "Patient Number":{type:String},
    // BackupNotes:{type:String}
})

const CovidData=mongoose.model("dataSample",dataSchema)

module.exports=CovidData;



