import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditData = () => {
  const { empid } = useParams();
  const [mydata, setMydata] = useState({});

  const loadData = () => {
    let api = "http://localhost:8000/employees/employeeeditdata";
    axios.post(api, { id: empid }).then((res) => {
      console.log(res.data);
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, [empid]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMydata((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://localhost:8000/employees/employeeeeditsave";
    axios.post(api, mydata).then((res) => {
      toast.success("Data Successfully Updated!!!");
    });
  };

  return (
    <div style={styles.container}>
      <h4>Edit Employee Data</h4>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Employee No</label>
          <input type="text" name="empno" value={mydata.empno || ''} onChange={handleInput} style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Name</label>
          <input type="text" name="empname" value={mydata.empname || ''} onChange={handleInput} style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Designation</label>
          <input type="text" name="degignation" value={mydata.degignation || ''} onChange={handleInput} style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>City</label>
          <input type="text" name="city" value={mydata.city || ''} onChange={handleInput} style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Salary</label>
          <input type="text" name="salary" value={mydata.salary || ''} onChange={handleInput} style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Edit Save</button>
      </form>
      <ToastContainer />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'center', // Center input fields
  },
  label: {
    display: 'block',
    textAlign: 'left', // Align labels to the left
    marginBottom: '5px', // Space between label and input
    marginLeft:"50px"
  },
  input: {
    display: 'block',
    width: '80%', // Width of input
    margin: '0 auto', // Center the input
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default EditData;
