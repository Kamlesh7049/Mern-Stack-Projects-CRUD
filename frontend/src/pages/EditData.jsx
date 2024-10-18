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

return (
  <>
    <h1>Edit Employee Data</h1>
    Edit Emp no <input type="text" value={mydata.empno} />
    <br />
    Edit Emp name <input type="text" value={mydata.empname} />
    <br />
    Edit Degignation <input type="text" value={mydata.degignation} />
    <br />
    Edit City <input type="text" value={mydata.city} />
    <br />
    Edit Salary <input type="text" value={mydata.salary} />
  </>
);
}
export default EditData;
