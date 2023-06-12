const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const  mongoose  = require('mongoose')

const User = require('./model/models')
dotenv.config()


const app=express()

app.use(cors())

app.use(express.json())

mongoose.connect(process.env.URL,{
  useNewUrlParser:true
}).then(()=>console.log("connected to mongo"))
.catch((err)=>console.log(err))

app.post('/home',async(req,res)=>{
try{
    const user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    res.status(201)
}
catch(err){
    console.log(err)
    res.send(err)
}
})

app.listen(1000,()=>{
    console.log("on 1000")
}) 