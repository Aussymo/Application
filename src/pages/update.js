import React, { useState, useEffect } from "react";
import Axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
  
const Update = () => {

  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");
  const [newLast, setNewLast] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");

  
  const updateData = (id) => {
    Axios.put(`https://application-app2022.herokuapp.com//api/update/${id}`, {
      id: id,
      firstName: newData,
      lastName: newLast,
      email: newEmail,
      phoneNumber: newPhone,
    });
    setNewData("");
    setNewLast("");
    setNewEmail("");
    setNewPhone("");
  };

  return (
    <div className="form">
    <Card className="cards">
        {data.map((value) => {
          {
            console.log(value);
          }
          return (
            <ListGroup>
              <h1 className="title">Updating...</h1>
              <ListGroup.Item>
                {value.firstName}
                <input
                  type="text"
                  className="firstName"
                  placeholder="First Name"
                  onChange={(e) => {
                    setNewData(e.target.value);
                  }}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                {value.lastName}
                <input
                  type="text"
                  placeholder="Last Name"
                  className="lastName"
                  onChange={(e) => {
                    setNewLast(e.target.value);
                  }}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                {value.email}
                <input
                  type="email"
                  placeholder="Email"
                  className="email"
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                  }}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                {value.phoneNumber}
                <input
                  type="text"
                  placeholder="phoneNumber"
                  className="phoneNumber"
                  onChange={(e) => {
                    setNewPhone(e.target.value);
                  }}
                />
              </ListGroup.Item>
              <button
                type="submit"
                className="update"
                onClick={() => {
                  updateData(value.id);
                }}
              >
                Update
              </button>
            </ListGroup>
          );
        })}
      </Card>
      </div>
  );
};
  
export default Update;