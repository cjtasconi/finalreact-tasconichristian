import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget';

const NavBar = () => {
  
  return (
  <Navbar bg="light" expand="sm">
      <Navbar.Brand href="#home">Tienda de Juegos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Ofertas</Nav.Link>
          <NavDropdown title="Plataformas" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">PC</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">PS5</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">XBOX</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Switch</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className="user-attributes">
          <CartWidget />
          <Nav.Link className="login-button text-secondary" href="#link">Login</Nav.Link>
        </div>
    </Navbar.Collapse>

  </Navbar>
)

};

export default NavBar;