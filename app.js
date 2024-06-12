const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {usermodel} = require("./models/user")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://ahalyalinson:ahalya@cluster0.5hcgbes.mongodb.net/useDB?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input=req.body
    let users = new usermodel(input)
    users.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    usermodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8080,()=>{
    console.log("start server")
})