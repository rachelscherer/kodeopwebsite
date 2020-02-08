import React from "react";
import  {Navbar , Nav } from 'react-bootstrap';
import "./Header.css";

export const Header = () => (
    <div>
        <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>KodeOp</Navbar.Brand>
        <Nav>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>Our Mission</Nav.Link>
            <Nav.Link>Our Staff</Nav.Link>
            <Nav.Link>Deliverables</Nav.Link>
        </Nav>
        </Navbar>
    </div>
);