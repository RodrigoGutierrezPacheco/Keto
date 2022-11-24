import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Color } from 'react-bootstrap/esm/types';


function NavBar() {
  return (
    <Navbar sticky="top" className='navbar'  expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
						<img className='logonav' src="images/KetoChallengeLogo.png" alt="" />
				</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',color:'blue' }}
            navbarScroll
          >
            <Nav.Link href="/"><p>Inicio</p></Nav.Link>
            <Nav.Link href="/retos"><p>Retos</p></Nav.Link>
            <Nav.Link href="/recetarios">
              <p>Recetarios</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;