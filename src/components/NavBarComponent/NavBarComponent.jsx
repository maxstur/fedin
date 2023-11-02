import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">fedin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#link">Profesionales</Nav.Link>
            <NavDropdown title="Tienda" id="basic-nav-tiendan">
              <NavDropdown.Item href="#action/3.1">
                Herramientas Manueles
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Herramientas eléctricas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Materiales de construcción</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Equipos de seguridad</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Soldadura y suministros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cerraduras y seguridad</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Suministros de fontanería</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Elecricidad y cableado</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Materiales y suministros para el jardín</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Piiniturería y acabados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Iluminación</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Equiipo elevación de cargas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Herrajes y tornillería</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Productos químicos y adhesivos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Equipos de protección personal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Maquinaria pesada</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Suministros de limpieza industrial</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Herramientas de medición</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Servicios y asesoramiento técnico</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Todo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
