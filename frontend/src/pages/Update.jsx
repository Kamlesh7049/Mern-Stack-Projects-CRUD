import { useState, useEffect } from "react";
import axios from "axios";
import A from "../images/edit.png";
import B from "../images/delete.png";
import {useNavigate} from "react-router-dom";


import Table from 'react-bootstrap/Table';

const Update = () => {
  const [mydata, setMydata] = useState([]);

 const navigate=useNavigate();
  const loadData = () => {
    let api = "http://localhost:8000/employees/employeeupdatedisplay";
    axios.get(api).then((res) => {
      console.log(res.data);
      setMydata(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);


  
const myrecDel=(id)=>{
  let api = "http://localhost:8000/employees/employeedatadelete";
  axios.post(api,{id:id}).then((res)=>{
    alert("Data Deleted!!!")
    loadData();
  })
}

const myrecEdit=(id)=>{

  navigate(`editdata/${id}`);
}



  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.empno}</td>
          <td>{key.empname}</td>
          <td>{key.degignation}</td>
          <td>{key.city}</td>
          <td>{key.salary}</td>
          <td>
            <a href="#" onClick={()=>{myrecEdit(key._id)}}>
              <img src={A} width="20" height="20" />
            </a>
            <a href="#" onClick={()=>{myrecDel(key._id)}}>
              <img src={B} width="20" height="20" />
            </a>
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <center>
        <h4>Update Employee Records</h4>
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
        {/* ------------------------------------------------- */}
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
  );
};
export default Update;
