
import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import Axios from "axios";
  
const Read = () => {
  const [data, setData] = useState([]);

  const deleteEmployee = (id) => {
    Axios.delete(`https://application-app2022.herokuapp.com/api/delete/${id}`);
  };

  

  
  return (
    <Table striped bordered hover size="sm">
        <thead>
          <h1>All Employees</h1>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => {
            return (
              <tr>
                <td>
                  {value.id} <br />{" "}
                </td>{" "}
                <td>{value.firstName}</td>
                <td>{value.lastName}</td>
                <td>{value.email}</td>
                <td>{value.phoneNumber}</td>
                <td>
                  <button
                    type="submit"
                    className="delete"
                    onClick={() => {
                      deleteEmployee(value.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
  );
};
  
export default Read;