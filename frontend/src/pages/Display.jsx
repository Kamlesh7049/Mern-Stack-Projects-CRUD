import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

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
    <h4>Display Employee Records</h4>
    {/* <table border={1}>
      <tr>
        <th>Employee No</th>
        <th>Name</th>
        <th>Degignation</th>
        <th>City</th>
        <th>Salary</th>
      </tr>
      {ans}
    </table> */}
{/* -------------------------------------------------------------- */}
     <Table responsive="sm">
        <thead>
          <tr>
            <th>Employee No</th>
            <th>Name</th>
            <th>Degignation</th>
            <th>City</th>
            <th>Salary</th>
          </tr>
          {ans}
          </thead>
          </Table>
    </center>
    </>
  )
}
export default Display;