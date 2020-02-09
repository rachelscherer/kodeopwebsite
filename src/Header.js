import React from "react";
import  {Navbar , Nav } from 'react-bootstrap';
import { Link } from "react-scroll";
import "./Header.css";

export const Header = () => (
    <div>
        <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>KodeOp</Navbar.Brand>
        <Nav>
            <Nav.Link>
                <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >
                    About Us
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link
                activeClass="active"
                to="mission"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                >
                    Our Mission
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link
                activeClass="active"
                to="staff"
                spy={true}
                smooth={true}
                offset={-55}
                duration={500}
                >
                    Our Staff
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link
                activeClass="active"
                to="deliverables"
                spy={true}
                smooth={true}
                offset={-55}
                duration={500}
                >
                    Deliverables
                </Link>
            </Nav.Link>
        </Nav>
        </Navbar>
    </div>
);