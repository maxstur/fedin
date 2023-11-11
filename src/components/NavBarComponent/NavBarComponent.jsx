import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CardWidgetComp from "../CardWidgetComponent/CardWidgetComponent";
import "../../main.css";

function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-nav">
      <Container fluid>
        <Navbar.Brand href="#">Rod'S Designs</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Tienda</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Diseños</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Videos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Todos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="button-search">Search</Button>
          </Form>
          <CardWidgetComp />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
