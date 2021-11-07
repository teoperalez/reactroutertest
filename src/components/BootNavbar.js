import React from "react";
import {Link} from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Offcanvas, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const linkStyle = {
    
    textDecoration: "none",
    color: 'white'
  };

  const inlinkStyle = {
    
    textDecoration: "none",
    color: 'black'
  };

function MyNavbar() {
   return (
             
        <Navbar className="stickytop" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand><Link to="/" style={linkStyle}><img  src="https://i.ibb.co/d2vgWr7/removal-ai-tmp-61821f028a039.png" alt="removal-ai-tmp-61821f028a039" border="0" width="300" /></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link><Link to="/" style={linkStyle}>Featured</Link></Nav.Link>
      <Nav.Link><Link to="/about" style={linkStyle}>About</Link></Nav.Link>
      <Nav.Link><Link to="/calendar" style={linkStyle}>Event Calendar</Link></Nav.Link>
      <NavDropdown title="Discography" id="collasible-nav-dropdown">
        <NavDropdown.Item><Link to="/Listen/whiskey_lullabies" style={inlinkStyle}>Whiskey Lullabies</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/Listen/por_deseo" style={inlinkStyle}>Por Deseo</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/Listen/rain" style={inlinkStyle}>RAIN</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item><Link to="/Listen" style={inlinkStyle}>View Full Discography</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Socials</Nav.Link>
      <Nav.Link href="#memes">
        Patreon
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


    )}

export default MyNavbar