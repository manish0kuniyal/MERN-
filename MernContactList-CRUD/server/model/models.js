const mongoose=require('mongoose')

const Crud=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true
    }
})

const model=mongoose.model("crud-react",Crud)

module.exports=model