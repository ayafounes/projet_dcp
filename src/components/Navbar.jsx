import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './NavbarComp.css';
import 'font-awesome/css/font-awesome.min.css';

function NavbarComp() {
    return (
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
                    <Button type="submit" className="custom-button">Contact</Button>
                </Col>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;
