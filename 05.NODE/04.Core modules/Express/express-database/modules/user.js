const mongoose=require("mongoose");

const userShcema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true
    }
)

const User=mongoose.model("user",userShcema);

module.exports=User;