import React from "react";
import React, { useState, useEffect } from "react";
import Axios from "axios";
  
const Create = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://dev072220222.herokuapp.com/api/get").then((response) => {
      setData(response.data);
    });
  }, []);
  
  const submitEmployee = () => {
    Axios.post("https://application-app2022.herokuapp.com//api/insert", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    }).then(() => {
      alert("Successfully added employee");
    });
  };

  return (
      <div className="form">
      <form>
        <h1>Registration</h1>
        <input
          type="text"
          className="first"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="last"
          placeholder="last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          className="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="phone"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button className="submit"
         onClick={submitEmployee}
         >
          Submit
        </button>
      </form>
    </div>
  );
};
  
export default Create;