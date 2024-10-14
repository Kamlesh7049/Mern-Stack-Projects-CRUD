import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevents the default form submit behavior

    let api = "http://localhost:8000/employees/employeesave";
    axios.post(api, input).then((res) => {
      console.log(res);
      console.log("Data successfully saved!");
      toast.success("Data Successfully saved!!!");
    }).catch((err) => {
      alert(err.response.data)
    
    });
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="form-container" style={{ padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
              <h2 className="text-center mb-4">Employees Details</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmployeeNo">
                  <Form.Label>Employee No</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter Employee No" 
                    name="empno" 
                    onChange={handleInput} 
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmployeeName">
                  <Form.Label>Employee's Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter Name" 
                    name="empname" 
                    onChange={handleInput} 
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDepartment">
                  <Form.Label>Desgination</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter Department" 
                    name="degignation" 
                    onChange={handleInput} 
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter City" 
                    name="city" 
                    onChange={handleInput} 
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSalary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Enter Salary" 
                    name="salary" 
                    onChange={handleInput} 
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100" onClick={handleSubmit}>
                  Save
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
};

export default Insert;
