import React from "react";
import "./Navbar.scss";
import { Navbar, Nav } from "react-bootstrap";

export default function index() {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="#home" className="logo">
        Shortly
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav fill className="nav mr-auto">
          <Nav.Link className="link" href="#features">
            Features
          </Nav.Link>
          <Nav.Link className="link" href="#link">
            Pricing
          </Nav.Link>
          <Nav.Link className="link" href="#link">
            Resources
          </Nav.Link>
        </Nav>
        <hr className="rule" />
        <Nav className="nav">
          <button className="button login">Login</button>
          <button className="button signup">Sign Up</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
