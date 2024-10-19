import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const EditData = () => {
  const { empid } = useParams();
  const [mydata, setMydata] = useState({});//mydata={}



const loadData = () => {
  let api = "http://localhost:8000/employees/employeeeditdata";
  axios.post(api, { id: empid }).then((res) => {
    console.log(res.data);
    setMydata(res.data);
  });
};
useEffect(() => {
  loadData();
}, []);


const handleInput=(e)=>{
  let name=e.target.name;
  let value=e.target.value;
  setMydata(values=>({...values,[name]:value}))
  console.log(mydata);
}

const handleSubmit=()=>{
  let api = "http://localhost:8000/employees/employeeeeditsave";
  axios.post(api,mydata).then((res)=>{
    alert("Data Upated!!!")
  })

}
return (
  <center>
  <>
    <h4>Edit Employee Data</h4>
    <form action="">
     Emp no <input type="text" name="empno" value={mydata.empno}onChange={handleInput}  />
    <br />
     Name <input type="text" name="empname" value={mydata.empname}  onChange={handleInput}/>
    <br />
    Degignation <input type="text" name="degignation" value={mydata.degignation} onChange={handleInput} />
    <br />
    City <input type="text" name="city" value={mydata.city}  onChange={handleInput} />
    <br />
    Salary <input type="text" name="salary" value={mydata.salary} onChange={handleInput}  />
    <br />
    <button onClick={handleSubmit}>Edit Save!</button>
    </form>
  </>
  </center>
  
);
}
export default EditData;
