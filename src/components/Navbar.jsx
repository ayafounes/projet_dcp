import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './NavbarComp.css'; // Import your custom styles
import 'font-awesome/css/font-awesome.min.css';
import Login from './Login'; // Import the Login component

function NavbarComp() {
  const [showLogin, setShowLogin] = useState(false);  // State to manage login form visibility
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleContactClick = () => {
    setShowLogin(true);  // Toggle the login form when the button is clicked
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <i className="fa fa-plane" aria-hidden="true" style={{ marginRight: '8px' }}></i>
            WeTravel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#link">Destinations populaires</Nav.Link>
              <Nav.Link href="#link">Réservations</Nav.Link>
              <Nav.Link href="#link">Promotions</Nav.Link>
              <Nav.Link href="#link">A propos de nous</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Col xs="auto">
            <Button type="button" className="custom-button" onClick={handleContactClick}>Contact</Button>
          </Col>
        </Container>
      </Navbar>

      {/* Conditionally render the Login form */}
      {showLogin && <Login />}
    </div>
  );
}

export default NavbarComp;
