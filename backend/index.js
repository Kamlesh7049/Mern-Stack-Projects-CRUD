const express=require("express");
const app=express();
const bodyparser=require('body-parser')
const cors=require("cors");
const mongoose=require("mongoose")
require("dotenv").config();
const empRoute=require("./routes/employeesRoutes")
mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("DB Succesfully Connected")
});

const port=process.env.PORT || 3000
app.use(cors());
//body-parser middleware
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use("/employees",empRoute);


app.listen (port,()=>{
    console.log(`Server run on ${port}`)
})