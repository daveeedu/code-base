import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaSketch } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="secondary" >
        <Container className="col ">
          <Navbar.Brand href="#home"><Link className="text-white text-decoration-none fs-4" to="./"><FaSketch className="mb-1" /> CodeBase</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto  rounded-pill btn-outline-success">
              <Nav.Link href="#"><Link className="text-light text-decoration-none m-3" to="/Login">Sign In</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar