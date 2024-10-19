const express=require("express");
const route=express.Router();
const empController=require("../controllers/employeeControllers");


route.post("/employeesave",empController.empDataSave);
route.get("/employeedisplay",empController.empDatadisplay);
route.post("/employeesearch",empController.empSearch)
route.get("/employeeupdatedisplay",empController.employeeUpdateDisplay);
route.post("/employeedatadelete",empController.employeeDataDelete);
route.post("/employeeeditdata",empController.employeeEditData);
route.post("/employeeeeditsave",empController.employeeEditSave);
route.get("/employeesearchbyname",empController.employeeSearchByName);

module.exports=route;