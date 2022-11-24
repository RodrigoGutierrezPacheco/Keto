import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar sticky='top' key={expand}  expand={expand} className="mb-3 navbar bgColor">
          <Container fluid>
						<div className='flex'>
							<Navbar.Brand href='/'>					<img longdesc='/'  className='width' src="images/ketochallenge.png" alt="" a /></Navbar.Brand>
            <Navbar.Toggle className='menu' aria-controls={`offcanvasNavbar-expand-${expand}`} />
						</div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className='bgColor' closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menú
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 fontSize">
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Nav.Link href="/retos">Retos</Nav.Link>
                  <NavDropdown
                    title="Recetarios"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item className='fontSize' href="/recetario1">Recetario 1</NavDropdown.Item>
                    <NavDropdown.Item className='fontSize' href="/recetario2">
                      Recetario 2
                    </NavDropdown.Item>
                    <NavDropdown.Item className='fontSize' href="/recetario3">
                      Recetario 3
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
							<img className="imgOff" src="images/ketoChallenge1.png" alt="" />

            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;