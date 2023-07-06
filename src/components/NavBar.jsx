import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import Carrito from './Carrito';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (

        <div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"> Tienda musical </Navbar.Brand>
                    <Nav className="me-auto">

                        <Navbar.Text> <Link to="/" style={{ textDecoration: "none", color: "white" }}> Inicio </Link> </Navbar.Text>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/categorias/guitarras" style={{ textDecoration: "none", color: "black" }}> Guitarras </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/categorias/amplificadores" style={{ textDecoration: "none", color: "black" }}> Amplificadores </Link>
                            </NavDropdown.Item>

                        </NavDropdown>

                    </Nav>
                    <Carrito />
                </Container>
            </Navbar>


        </div>
    )
}

export default NavBar