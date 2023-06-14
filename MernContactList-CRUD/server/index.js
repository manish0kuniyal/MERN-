const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const Crud=require('./model/models')
const cors=require('cors')

dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.URL,{
    useNewUrlParser:true
})
.then(()=>console.log('...on mongo'))
.catch((err)=>console.log(err))



app.get('/home',async(req,res)=>{
   try{
    const show=await Crud.find()
    res.json(show)
   }
   catch(err){
    console.log(err)
   }
})
 


app.post('/home/post',async(req,res)=>{
 try{
    const sendNew=await Crud.create(req.body)
    res.send(req.body)
    }
catch(err){
    console.log(err)
}
})


app.put('/home/:name',async(req,res)=>{
    try{
          const findUser=req.params.name
          const update=await Crud.findOneAndUpdate({name:findUser},req.body)
          if(update){
            res.json(update)
          }

    }
    catch(err){
        console.log(err)
    }
})

app.delete('/home/:name',async(req,res)=>{
    try{
        const finddeluser=req.params.name
        const deluser=await Crud.findOneAndDelete({name:finddeluser})
        if(deluser){
            res.json(deluser)
        }
    }
    catch(err){
        console.log(err)
    }
})

app.listen(1001,()=>{
  console.log('...on 1001')
})