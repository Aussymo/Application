import React from "react";
import navbar from "./navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navigation = () => {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/update">Update</Nav.Link>
            <Nav.Link href="/read">Read/Delete</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
  
export default Navigation;