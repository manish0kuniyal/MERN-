const express =require("express")
const app=express()

app.use(express.json())

const PORT=5000
const port=process.env.PORT || 3000

const emoji=[
  {id:1,value:'👻'},
  {id:2,value:'👾'},
  {id:3,value:'👽'}
]

app.get('/',(req,res)=>{
  res.send("emojimo")
})

app.get('/api/emoji',(req,res)=>{
  res.send(emoji)
  console.log(req.body)
})


app.post('/api/emoji',(req,res)=>{
const emojinew={
    id:emoji.length+1,
    value:req.body.value
  }
  emoji.push(emojinew)
  res.send(emojinew)

})


app.put('/api/emoji/:id',(req,res)=>{
  emoji.value=req.body.value
  res.send(emojinew)
})



app.get('/api/emoji/:id',(req,res)=>{
  console.log(req.params)
 console.log(parseInt(req.params.id))
 const emojit= emoji.find(c=> c.id ===parseInt(req.params.id))
  if(!emojit) res.status(404).send("notfound");
  res.send(emojit)

})

app.delete('/api/emoji/:id',(req,res)=>{
  const index=emoji.indexOf(emoji)
  emoji.splice(index,1)
  res.send(emoji)
})


app.listen(port,()=>{
  console.log(`listening on ${port}`)
})