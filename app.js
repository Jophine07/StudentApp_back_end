const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Heloo wor")
})
app.post("/contact",(req,res)=>{
    res.send("Hi helo")
})

app.listen(8080,()=>{
    console.log("Server Started")
})