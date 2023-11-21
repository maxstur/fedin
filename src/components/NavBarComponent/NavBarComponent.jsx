import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CardWidgetComp from "../CardWidgetComponent/CardWidgetComponent";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../main.css";

const NavBarComponent = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-nav">
      <Container fluid>
        <Navbar.Brand>
          <Link to={"/"} className="nav-link">
            Rod'S Designs
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              {categories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link to={`/category/${category}`} className="nav-link">
                      {category}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
          <CardWidgetComp />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
