const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
require("dotenv").config()
app.use(express.json())

app.use(cors())
app.get("/",(req,res)=>{
    res.send("")
})
mongoose.connect(process.env.MONGODB_URL).then(async ()=>{
    console.log("CONEXIÓN ESTABLECIDA CON MONGODB")
}).catch((error)=>{
    console.log(error)
})

app.use("/api/usuario",require("./src/routes/usuario"))

app.listen(process.env.PORT,()=>{
    console.log(`Servidor esta corriendo en http://localhost:${process.env.PORT}`)
})