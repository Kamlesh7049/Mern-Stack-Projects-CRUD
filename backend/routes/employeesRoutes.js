const express=require("express");
const route=express.Router();
const empController=require("../controllers/employeeControllers");


route.post("/employeesave",empController.empDataSave);

module.exports=route;