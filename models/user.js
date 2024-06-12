

const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        
        

        "name":{type:String,required:true},
        "dob":{type:String,required:true},
        "blood":{type:String,required:true},
        "mobile":{type:String,required:true},
        "adr":{type:String,required:true},
        "pin":{type:String,required:true},
        "dis":{type:String,required:true},
        "place":{type:String,required:true},
        "email":{type:String,required:true},
        "uname":{type:String,required:true},
        "pass":{type:String,required:true},
        "cpass":{type:String,required:true}
    }
)

let usermodel=mongoose.model("users",schema);
module.exports={usermodel}