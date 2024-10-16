import { useState,useEffect } from "react";
import axios from "axios";

const Display=()=>{
  const[mydata,setMydata]=useState([]);
  const loadData=async()=>{
    let api = "http://localhost:8000/employees/employeedisplay";
    try{
      const response=await axios.get(api);
      setMydata(response.data);

    }
    catch(error){
      console.log(error)
      alert(error.response.data)
    }
  }
  useEffect(()=>{
    loadData();
  },[]);
  const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.empno}</td>
        <td>{key.empname}</td>
        <td>{key.degignation}</td>
        <td>{key.city}</td>
        <td>{key.salary}</td>
      </tr>
      </>
    )
  })
  return(
    <>
    <center>
    <h1>Display Employee Records</h1>
    <table>
      <tr>
        <th>Employee No</th>
        <th>Name</th>
        <th>Degignation</th>
        <th>City</th>
        <th>Salary</th>
      </tr>
      {ans}
    </table>
    </center>
    </>
  )
}
export default Display;