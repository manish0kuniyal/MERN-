const mongoose=require('mongoose')

const User=new mongoose.Schema(
    {name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        default:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    },
     quote:{
        type:String
    }
  },
    {collection:'from-react'}
)

 const model=mongoose.model("UserData",User)
 
 module.exports=model