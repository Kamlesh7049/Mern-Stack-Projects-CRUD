import { useState} from "react";
import axios from "axios";
import{message} from "antd";
import Table from 'react-bootstrap/Table';
     

const Search=()=>{
    const [empno, setEmpno]=useState("");
    const [mydata,setMydata]=useState([]);
    // const [emptdata, setEptdata]=useState("")
    const handleSubmit=()=>{
        let api = "http://localhost:8000/employees/employeesearch";
        axios.post(api,{empno:empno}).then((res)=>{
            setMydata(res.data);
            // setEptdata("")
            // console.log(res)
            if(res.data.length==0)
            {
               message.error("No Record Found!")
                //   setEptdata("Data Not Found!!")    
            }
            

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
        <>
        <center>
        <h4> Search Employee Records</h4>
        Enter Employee Number : <input type="text" value={empno}onChange={(e)=>{setEmpno(e.target.value)}}/>
        <button onClick={handleSubmit}> Search!</button>
        <br /><br />
        {/* <hr /> */}
        {/* <table border={1}>
      <tr>
        <th>Employee No</th>
        <th>Name</th>
        <th>Degignation</th>
        <th>City</th>
        <th>Salary</th>
      </tr>
      {ans} */}
      {/* {emptdata} */}
    {/* </table> */}
{/* ------------------------------------------------------------------------------- */}
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
export default Search;