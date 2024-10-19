import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
// import {message} from "antd";
const SearchByName=()=>{
    const [empname,setEmpname]=useState("");
    const [mydata,setMydata]=useState([]);


    const handleInput=(e)=>{
        setEmpname(e.target.value);
        let api = `http://localhost:8000/employees/employeesearchbyname/?empname=${empname}`;
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data)
        })
        
    }
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
        <center>
        <>
        <h4>Search Employee Records</h4>
        Enter Employee Name : <input type="text" value={empname}onChange={handleInput}/>
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
       </>
       </center>
    )
}
export default SearchByName;