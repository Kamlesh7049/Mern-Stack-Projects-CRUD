import { useState, useEffect } from "react";
import axios from "axios";
import A from "../images/edit.png";
import B from "../images/delete.png";

import Table from 'react-bootstrap/Table';

const Update = () => {
  const [mydata, setMydata] = useState([]);
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
            <a>
              <img src={A} width="20" height="20" />
            </a>
            <a>
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
