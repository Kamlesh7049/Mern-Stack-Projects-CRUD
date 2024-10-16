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

const empDatadisplay=async(req,res)=>{
    try{
    const Employeedata=await EmpModel.find();
    // console.log("Data Successfully Display!")
    res.status(200).json(Employeedata);

    }
    
    catch(error){
        res.status(404).json("Data from MongoDB not Found!!!")
    }
    
}
const empSearch =async(req,res)=>{
     let ={empno}=req.body;
     const myData=await EmpModel.find({empno:empno})
    //  console.log("ok")
    //  res.send("Chal gya!!")
     res.send(myData)
}
module.exports={
     empDataSave,
     empDatadisplay,
     empSearch
}
