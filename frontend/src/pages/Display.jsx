// const Display=()=>{
//     return (
//         <>
//         <center>
//         <h1>Welcom Display Page!!!</h1>
//         </center>
//         </>
//     )
// }
// export default Display;


import { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [empdata, setEmpdata] = useState([]);

  const loadData = () => {
    let url = "http://localhost:3000/employees";
    axios.get(url).then((res) => {
      console.log(res.data);
      setEmpdata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = empdata.map((key, index) => {
    return (
      <tr key={index}>
        <td>{key.empno}</td>
        <td>{key.name}</td>
        <td>{key.dep}</td>
        <td>{key.city}</td>
        <td>{key.salary}</td>
      </tr>
    );
  });

  return (
    <>
      <center>
        <h1 style={{ textAlign: "center", color: "black", marginBottom: "20px" }}>
          Display Employee Data
        </h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Employee No</th>
              <th>Name</th>
              <th>Department</th>
              <th>City</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </table>
      </center>

      <style jsx>{`
        .styled-table {
          border-collapse: collapse;
          margin: 25px 0;
          font-size: 18px;
          font-family: 'Arial', sans-serif;
          width: 80%;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

        .styled-table thead tr {
          background-color: #009879;
          color: #ffffff;
          text-align: left;
        }

        .styled-table th,
        .styled-table td {
          padding: 12px 15px;
        }

        .styled-table tbody tr {
          border-bottom: 1px solid #dddddd;
        }

        .styled-table tbody tr:nth-of-type(even) {
          background-color: #f3f3f3;
        }

        .styled-table tbody tr:last-of-type {
          border-bottom: 2px solid #009879;
        }

        .styled-table tbody tr:hover {
          background-color: #f1f1f1;
          cursor: pointer;
        }

        h1 {
          color: #007bff;
          font-size: 28px;
          margin-bottom: 20px;
        }

        @media screen and (max-width: 768px) {
          .styled-table {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default Display;
