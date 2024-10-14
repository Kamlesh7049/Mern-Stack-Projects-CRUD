const EmpModel=require("../models/employeeModels");

const empDataSave=async(req,res)=>{
    // res.send("Data Save successfully !!")

const {empno, empname, degignation,city, salary}=req.body;
try{
    const Employee=await EmpModel.create({
        empno:empno,
        empname:empname,
        degignation:degignation,
        city:city,
        salary:salary
    })
    console.log("data save!")
    res.status(200).json(Employee);

}
catch(error){
    res.status(404).json("MangoDB Server No Started!!!")
}
}

module.exports={
     empDataSave
}
