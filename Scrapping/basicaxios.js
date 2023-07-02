const axios=require('axios')
const express=require('express')
const cheerio=require('cheerio')

const app=express()

const url='https://www.amazon.in/'
axios(url)
.then((response)=>{
    const html=response.data
    console.log(html)
})

app.listen(3000,console.log('on 3000...'))